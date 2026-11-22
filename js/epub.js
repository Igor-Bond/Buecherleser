// Разбор EPUB (2 и 3): архив → главы в том же виде, что и у fb2.
//
// Книга EPUB — это zip с набором страниц XHTML. Порядок чтения задаёт «корешок» (spine) в файле OPF,
// оглавление лежит отдельно (nav в EPUB 3, toc.ncx в EPUB 2). Вёрстку издателя не переносим:
// из страниц берётся только текст с простой разметкой, чтобы работали свои шрифты, темы и нажатие на слово.
import { unzip } from './fb2.js';

const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const textLen = html => html.replace(/<[^>]+>/g, '').length;
const MIME = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif', webp: 'image/webp', svg: 'image/svg+xml' };
const BLOCK = new Set(['p', 'div', 'section', 'article', 'main', 'header', 'footer', 'aside', 'figure', 'figcaption', 'blockquote',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'dl', 'dt', 'dd', 'table', 'tr', 'pre', 'hr', 'center']);
const SKIP = new Set(['script', 'style', 'head', 'nav', 'template', 'iframe', 'audio', 'video', 'object', 'form', 'button', 'input']);

// Путь ссылки относительно файла, в котором она стоит
function resolve(from, href) {
  const parts = from.split('/').slice(0, -1);
  for (const s of decodeURIComponent(href.split('#')[0]).split('/')) {
    if (s === '..') parts.pop(); else if (s && s !== '.') parts.push(s);
  }
  return parts.join('/');
}
const parseXml = (text, html) => {
  let doc = new DOMParser().parseFromString(text, html ? 'application/xhtml+xml' : 'application/xml');
  // Небрежно свёрстанные книги не проходят строгий разбор — читаем их как обычный HTML
  if (doc.querySelector('parsererror')) doc = new DOMParser().parseFromString(text, 'text/html');
  return doc;
};
const els = (n, name) => [...n.getElementsByTagNameNS('*', name)];
const dataUrl = (buf, type) => new Promise((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(r.result); r.onerror = () => rej(r.error);
  r.readAsDataURL(new Blob([buf], { type }));
});

export async function parseEpub(buf, fallbackTitle = 'Без названия') {
  const z = await unzip(buf);
  const byName = new Map(z.files.map(f => [f.name.replace(/\\/g, '/'), f]));
  const find = name => byName.get(name) || byName.get([...byName.keys()].find(k => k.toLowerCase() === name.toLowerCase()));
  const text = async name => { const f = find(name); return f ? new TextDecoder().decode(await z.read(f)) : null; };

  const container = await text('META-INF/container.xml');
  if (!container) throw new Error('Это не книга EPUB: в архиве нет описания');
  const opfPath = els(parseXml(container), 'rootfile')[0]?.getAttribute('full-path');
  const opfText = opfPath && await text(opfPath);
  if (!opfText) throw new Error('Файл EPUB повреждён: не найдено описание книги');
  const opf = parseXml(opfText);

  const items = new Map();
  for (const it of els(opf, 'item')) {
    items.set(it.getAttribute('id'), { path: resolve(opfPath, it.getAttribute('href') || ''), type: it.getAttribute('media-type') || '', props: it.getAttribute('properties') || '' });
  }
  const spine = els(opf, 'itemref').map(r => items.get(r.getAttribute('idref'))).filter(i => i && /html|xml/.test(i.type));
  if (!spine.length) throw new Error('В книге EPUB не найден текст');

  // Защищённые книги (DRM) зашифрованы — прочитать их нельзя. Шифрование одних шрифтов не мешает.
  const enc = await text('META-INF/encryption.xml');
  if (enc) {
    const locked = new Set(els(parseXml(enc), 'CipherReference').map(c => decodeURIComponent(c.getAttribute('URI') || '')));
    if (spine.some(s => locked.has(s.path))) throw new Error('Книга защищена от копирования (DRM) — открыть её нельзя');
  }

  const images = new Map();
  const image = async path => {
    if (!images.has(path)) {
      const f = find(path), type = MIME[path.split('.').pop().toLowerCase()];
      images.set(path, f && type ? await dataUrl(await z.read(f), type) : '');
    }
    return images.get(path);
  };

  // --- страница XHTML → простой HTML
  const convert = (doc, path) => {
    const imgTag = n => {
      const src = n.getAttribute('src') || [...n.attributes].find(a => a.localName === 'href')?.value || '';
      const url = src && images.get(resolve(path, src));
      return url ? `<img src="${url}" alt="">` : '';
    };
    const inline = n => {
      let s = '';
      for (const c of n.childNodes) {
        if (c.nodeType === 3) { s += esc(c.nodeValue.replace(/\s+/g, ' ')); continue; }
        if (c.nodeType !== 1) continue;
        const t = c.localName.toLowerCase();
        if (SKIP.has(t)) continue;
        if (t === 'br') { s += '<br>'; continue; }
        if (t === 'img' || t === 'image') { s += imgTag(c); continue; }
        const i = inline(c);
        if (t === 'em' || t === 'i' || t === 'cite') s += `<em>${i}</em>`;
        else if (t === 'strong' || t === 'b') s += `<strong>${i}</strong>`;
        else if (t === 'sup' || t === 'sub' || t === 'code') s += `<${t}>${i}</${t}>`;
        else if (t === 's' || t === 'del' || t === 'strike') s += `<s>${i}</s>`;
        else s += i;
      }
      return s;
    };
    const hasBlock = n => [...n.children].some(c => BLOCK.has(c.localName.toLowerCase()));
    const para = (n, cls) => { const i = inline(n).trim(); return !i ? '' : /^(<img[^>]*>\s*)+$/.test(i) ? `<div class="img">${i}</div>` : `<p${cls ? ` class="${cls}"` : ''}>${i}</p>`; };
    const block = n => {
      const t = n.localName.toLowerCase();
      if (SKIP.has(t)) return '';
      if (/^h[1-6]$/.test(t)) { const i = inline(n).trim(); return i ? `<h${t < 'h3' ? 2 : t === 'h3' ? 3 : 4}>${i}</h${t < 'h3' ? 2 : t === 'h3' ? 3 : 4}>` : ''; }
      if (t === 'hr') return '<div class="gap"></div>';
      if (t === 'img') return `<div class="img">${imgTag(n)}</div>`;
      if (t === 'blockquote') return `<blockquote class="cite">${flow(n)}</blockquote>`;
      if (t === 'li') return hasBlock(n) ? flow(n) : para(n).replace(/^<p>/, '<p>• ');
      if (t === 'tr') { const cells = [...n.children].map(c => inline(c).trim()).filter(Boolean); return cells.length ? `<p>${cells.join(' · ')}</p>` : ''; }
      if (t === 'pre') return `<p>${esc(n.textContent).replace(/\n/g, '<br>')}</p>`;
      return BLOCK.has(t) || hasBlock(n) ? flow(n) : para(n);
    };
    // Текст и строчные элементы между блоками собираются в абзац
    const flow = n => {
      if (!hasBlock(n)) return para(n);
      let out = '', run = null;
      const flush = () => { if (run) { out += para(run); run = null; } };
      for (const c of n.childNodes) {
        if (c.nodeType === 1 && (BLOCK.has(c.localName.toLowerCase()) || hasBlock(c))) { flush(); out += block(c); }
        else if (c.nodeType === 1 || (c.nodeType === 3 && c.nodeValue.trim())) (run ??= doc.createElement('span')).append(c.cloneNode(true));
      }
      flush();
      return out;
    };
    const body = doc.body || els(doc, 'body')[0];
    return body ? flow(body) : '';
  };

  // --- оглавление: nav (EPUB 3) или toc.ncx (EPUB 2)
  const marks = []; // { title, depth, path }
  const navItem = [...items.values()].find(i => /\bnav\b/.test(i.props));
  const ncxItem = [...items.values()].find(i => i.type === 'application/x-dtbncx+xml');
  if (navItem) {
    const doc = parseXml(await text(navItem.path) || '', true);
    const nav = els(doc, 'nav').find(n => /toc/.test([...n.attributes].find(a => a.localName === 'type')?.value || '')) || els(doc, 'nav')[0];
    const walk = (list, depth) => {
      for (const li of [...list.children].filter(c => c.localName === 'li')) {
        const a = [...li.children].find(c => c.localName === 'a' || c.localName === 'span');
        const href = a?.getAttribute('href'), title = a?.textContent.trim().replace(/\s+/g, ' ');
        if (title && href) marks.push({ title, depth, path: resolve(navItem.path, href) });
        const sub = [...li.children].find(c => c.localName === 'ol' || c.localName === 'ul');
        if (sub) walk(sub, depth + 1);
      }
    };
    const top = nav && [...nav.children].find(c => c.localName === 'ol' || c.localName === 'ul');
    if (top) walk(top, 0);
  }
  if (!marks.length && ncxItem) {
    const doc = parseXml(await text(ncxItem.path) || '');
    const walk = (n, depth) => {
      for (const p of [...n.children].filter(c => c.localName === 'navPoint')) {
        const title = els(p, 'text')[0]?.textContent.trim().replace(/\s+/g, ' ');
        const src = [...p.children].find(c => c.localName === 'content')?.getAttribute('src');
        if (title && src) marks.push({ title, depth, path: resolve(ncxItem.path, src) });
        walk(p, depth + 1);
      }
    };
    const map = els(doc, 'navMap')[0];
    if (map) walk(map, 0);
  }

  // --- главы по порядку чтения
  const chapters = [], chapterOf = new Map();
  for (const it of spine) {
    const src = await text(it.path);
    if (!src) continue;
    const doc = parseXml(src, true);
    for (const n of [...els(doc, 'img'), ...els(doc, 'image')]) {
      const ref = n.getAttribute('src') || [...n.attributes].find(a => a.localName === 'href')?.value;
      if (ref && !ref.startsWith('data:')) await image(resolve(it.path, ref));
    }
    const html = convert(doc, it.path);
    chapterOf.set(it.path, chapters.length); // пустая страница ведёт к следующей главе
    if (!textLen(html) && !html.includes('<img')) continue;
    const head = html.match(/<h[234]>(.*?)<\/h[234]>/)?.[1].replace(/<[^>]+>/g, '').trim();
    chapters.push({ title: marks.find(m => m.path === it.path)?.title || head || '', html, len: Math.max(1, textLen(html)) });
  }
  if (!chapters.length) throw new Error('В книге EPUB не найден текст');

  const meta = name => els(opf, name)[0]?.textContent.trim() || '';
  const title = meta('title') || fallbackTitle;
  chapters.forEach((c, i) => { if (!c.title) c.title = chapters.length > 1 ? `Часть ${i + 1}` : title; });

  let toc = marks.filter(m => chapterOf.has(m.path)).map(m => ({ title: m.title, depth: Math.min(m.depth, 2), ch: Math.min(chapterOf.get(m.path), chapters.length - 1) }));
  if (!toc.length) toc = chapters.map((c, i) => ({ title: c.title, depth: 0, ch: i }));

  const coverId = els(opf, 'meta').find(m => m.getAttribute('name') === 'cover')?.getAttribute('content');
  const coverItem = [...items.values()].find(i => /cover-image/.test(i.props)) || items.get(coverId);
  const cover = coverItem && /^image\//.test(coverItem.type) ? await image(coverItem.path) || null : null;

  return { title, author: els(opf, 'creator').map(c => c.textContent.trim()).filter(Boolean).join(', '), cover, chapters, toc, notes: {} };
}
