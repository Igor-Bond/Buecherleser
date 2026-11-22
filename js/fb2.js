// Разбор книг: fb2, fb2.zip, txt → главы в виде HTML. EPUB разбирает epub.js.

const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const textLen = html => html.replace(/<[^>]+>/g, '').length;

// Минимальное чтение zip-архива средствами браузера.
export async function unzip(buf) {
  const dv = new DataView(buf);
  let i = buf.byteLength - 22;
  while (i >= 0 && dv.getUint32(i, true) !== 0x06054b50) i--;
  if (i < 0) throw new Error('Не удалось прочитать архив');
  const n = dv.getUint16(i + 10, true);
  let p = dv.getUint32(i + 16, true);
  const td = new TextDecoder(), files = [];
  for (let k = 0; k < n; k++) {
    const method = dv.getUint16(p + 10, true), size = dv.getUint32(p + 20, true);
    const nl = dv.getUint16(p + 28, true), el = dv.getUint16(p + 30, true), cl = dv.getUint16(p + 32, true);
    const off = dv.getUint32(p + 42, true);
    files.push({ name: td.decode(new Uint8Array(buf, p + 46, nl)), method, size, off });
    p += 46 + nl + el + cl;
  }
  const read = async f => {
    const nl = dv.getUint16(f.off + 26, true), el = dv.getUint16(f.off + 28, true);
    const data = new Uint8Array(buf, f.off + 30 + nl + el, f.size);
    if (f.method === 0) return data.slice().buffer;
    const s = new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
    return new Response(s).arrayBuffer();
  };
  return { files, read };
}

function decode(buf) {
  const head = new TextDecoder('latin1').decode(new Uint8Array(buf, 0, Math.min(200, buf.byteLength)));
  const enc = head.match(/encoding=["']([\w-]+)["']/i)?.[1] || 'utf-8';
  try { return new TextDecoder(enc).decode(buf); } catch { return new TextDecoder().decode(buf); }
}

export async function parseBookFile(file) {
  let buf = await file.arrayBuffer();
  let name = file.name;
  const epub = async b => (await import('./epub.js')).parseEpub(b, name.replace(/\.(epub|zip)$/gi, ''));
  if (/\.epub$/i.test(name)) return epub(buf);
  if (/\.zip$/i.test(name)) {
    const z = await unzip(buf);
    if (z.files.some(x => x.name === 'META-INF/container.xml')) return epub(buf); // EPUB, переименованный в zip
    const inner = z.files.find(x => /\.epub$/i.test(x.name));
    if (inner) return epub(await z.read(inner));
    const f = z.files.find(x => /\.fb2$/i.test(x.name)) || z.files.find(x => /\.txt$/i.test(x.name));
    if (!f) throw new Error('В архиве нет книги fb2 или epub');
    buf = await z.read(f); name = f.name;
  }
  const fallback = name.replace(/\.(fb2|txt|zip)$/gi, '');
  if (/\.txt$/i.test(name)) return parseTxt(decode(buf), fallback);
  return parseFb2Text(decode(buf), fallback);
}

function parseTxt(text, title) {
  const paras = text.split(/\r?\n\s*\r?\n|\r?\n/).map(s => s.trim()).filter(Boolean);
  const chapters = [];
  for (let i = 0; i < paras.length; i += 120) {
    const html = paras.slice(i, i + 120).map(p => `<p>${esc(p)}</p>`).join('');
    chapters.push({ title: `Часть ${chapters.length + 1}`, html, len: textLen(html) });
  }
  return { title, author: '', cover: null, chapters, toc: chapters.map((c, i) => ({ title: c.title, depth: 0, ch: i })), notes: {} };
}

export function parseFb2Text(xml, fallbackTitle = 'Без названия') {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  if (doc.querySelector('parsererror')) throw new Error('Файл fb2 повреждён или имеет неверный формат');
  const kids = (n, name) => [...n.children].filter(c => c.localName === name);
  const first = (n, name) => n && kids(n, name)[0];
  const href = n => [...n.attributes].find(a => a.localName === 'href')?.value || '';

  const bin = {};
  for (const b of doc.getElementsByTagNameNS('*', 'binary')) {
    bin[b.getAttribute('id')] = `data:${b.getAttribute('content-type') || 'image/jpeg'};base64,${b.textContent.replace(/\s+/g, '')}`;
  }
  const img = n => { const src = bin[href(n).replace(/^#/, '')]; return src ? `<img src="${src}" alt="">` : ''; };

  const inline = n => {
    let s = '';
    for (const c of n.childNodes) {
      if (c.nodeType === 3) { s += esc(c.nodeValue); continue; }
      if (c.nodeType !== 1) continue;
      const t = c.localName, i = inline(c);
      if (t === 'emphasis') s += `<em>${i}</em>`;
      else if (t === 'strong') s += `<strong>${i}</strong>`;
      else if (t === 'sup' || t === 'sub' || t === 'code') s += `<${t}>${i}</${t}>`;
      else if (t === 'strikethrough') s += `<s>${i}</s>`;
      else if (t === 'image') s += img(c);
      else if (t === 'a') { const h = href(c); s += h.startsWith('#') ? `<a class="note" data-note="${esc(h.slice(1))}">${i}</a>` : i; }
      else s += i;
    }
    return s;
  };
  const blocks = (n, lvl) => [...n.children].map(c => block(c, lvl)).join('');
  const block = (n, lvl) => {
    switch (n.localName) {
      case 'p': return `<p>${inline(n)}</p>`;
      case 'subtitle': return `<h4>${inline(n)}</h4>`;
      case 'empty-line': return '<div class="gap"></div>';
      case 'title': return `<h${lvl}>${kids(n, 'p').map(inline).filter(Boolean).join('<br>')}</h${lvl}>`;
      case 'epigraph': case 'cite': case 'annotation': return `<blockquote class="${n.localName}">${blocks(n, lvl)}</blockquote>`;
      case 'poem': return `<div class="poem">${blocks(n, lvl)}</div>`;
      case 'stanza': return `<div class="stanza">${blocks(n, lvl)}</div>`;
      case 'v': return `<p class="v">${inline(n)}</p>`;
      case 'text-author': return `<p class="ta">${inline(n)}</p>`;
      case 'image': return `<div class="img">${img(n)}</div>`;
      case 'table': return kids(n, 'tr').map(tr => `<p>${[...tr.children].map(inline).join(' · ')}</p>`).join('');
      case 'section': return blocks(n, lvl);
      default: return '';
    }
  };

  const chapters = [], toc = [];
  const walk = (sec, depth, prefix) => {
    const subs = kids(sec, 'section');
    const t = first(sec, 'title');
    const title = t ? t.textContent.trim().replace(/\s+/g, ' ') : '';
    const lvl = depth <= 0 ? 2 : 3;
    let own = prefix + [...sec.children].filter(c => c.localName !== 'section').map(c => block(c, lvl)).join('');
    if (title && depth >= 0) toc.push({ title, depth: Math.max(0, depth), ch: chapters.length });
    if (!subs.length || textLen(own) > 800) { chapters.push({ title, html: own }); own = ''; }
    for (const s of subs) { walk(s, depth + 1, own); own = ''; }
  };

  const bodies = [...doc.documentElement.children].filter(c => c.localName === 'body');
  const main = bodies.find(b => !b.getAttribute('name')) || bodies[0];
  if (main) walk(main, -1, '');

  const notes = {};
  for (const b of bodies) {
    if (b === main) continue;
    for (const s of b.getElementsByTagNameNS('*', 'section')) {
      const id = s.getAttribute('id');
      if (id) notes[id] = [...s.children].filter(c => c.localName !== 'title').map(c => block(c, 3)).join('');
    }
  }

  const info = doc.getElementsByTagNameNS('*', 'title-info')[0];
  const title = first(info, 'book-title')?.textContent.trim() || fallbackTitle;
  const a = first(info, 'author');
  const author = a ? ['first-name', 'middle-name', 'last-name'].map(k => first(a, k)?.textContent.trim()).filter(Boolean).join(' ') : '';
  const cv = first(info, 'coverpage');
  const cover = cv ? bin[href(cv.getElementsByTagNameNS('*', 'image')[0] || cv).replace(/^#/, '')] || null : null;

  const out = chapters.filter(c => textLen(c.html) > 0 || c.html.includes('<img'));
  if (!out.length) out.push({ title, html: '<p>В книге не найден текст.</p>' });
  // после фильтрации пустых глав пересчитываем ссылки оглавления
  const map = new Map(); let k = 0;
  chapters.forEach((c, i) => map.set(i, out.includes(c) ? k++ : k));
  for (const c of out) { c.len = Math.max(1, textLen(c.html)); if (!c.title) c.title = title; }
  return { title, author, cover, chapters: out, notes, toc: toc.map(x => ({ ...x, ch: Math.min(map.get(x.ch) ?? 0, out.length - 1) })) };
}
