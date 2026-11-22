// Словари: поиск слова с учётом немецкой морфологии, импорт и экспорт.
import * as DB from './db.js';
import * as G from './german.js';
import { unzip } from './fb2.js';

let enabled = null;
async function enabledSet() {
  return enabled ??= new Set((await DB.all('dicts')).filter(d => d.enabled !== false).map(d => d.id));
}
export const listDicts = async () => (await DB.all('dicts')).sort((a, b) => (b.builtin ? 1 : 0) - (a.builtin ? 1 : 0) || a.name.localeCompare(b.name));
export async function setEnabled(id, on) {
  const d = await DB.get('dicts', id);
  if (d) { d.enabled = on; await DB.put('dicts', d); enabled = null; }
}

// Статьи по списку ключей — по заглавному слову и по словоформам.
async function fetchKeys(keys) {
  const en = await enabledSet(), out = new Map();
  await DB.tx('entries', 'readonly', s => {
    const ik = s.index('k'), iF = s.index('f');
    for (const k of new Set(keys)) {
      const arr = []; out.set(k, arr);
      ik.getAll(k).onsuccess = e => { for (const x of e.target.result) if (en.has(x.d)) arr.push(x); };
      iF.getAll(k).onsuccess = e => { for (const x of e.target.result) if (en.has(x.d)) arr.push({ ...x, _form: true }); };
    }
  });
  return out;
}

const POS_OK = { v: ['v'], n: ['n'], adj: ['adj', 'adv', 'num', 'pron', 'art'] };
const CLOSED = ['art', 'pron', 'prp', 'conj', 'part'];
const fits = (e, pos) => !pos || !e.pos || POS_OK[pos].includes(e.pos);

export async function lookup(word, sentence = '', start = -1) {
  const lw = word.toLowerCase();
  const cands = [...G.strongForms(lw), ...G.regular(lw)];
  const verbCands = [{ k: lw, pos: 'v' }, ...cands.filter(c => c.pos === 'v')];
  const ctx = sentence && start >= 0 ? G.sepContext(sentence, start, start + word.length) : null;

  const keys = [lw, ...cands.map(c => c.k)];
  let particleVerbs = [];
  if (ctx?.isParticle) {
    for (const w of ctx.before) {
      for (const c of [{ k: w, pos: 'v' }, ...G.strongForms(w), ...G.regular(w).filter(c => c.pos === 'v')]) {
        particleVerbs.push({ ...c, from: w }); keys.push(lw + c.k, c.k);
      }
    }
  } else if (ctx) for (const c of verbCands) keys.push(ctx.particle + c.k);
  const map = await fetchKeys(keys);
  const isVerb = k => (map.get(k) || []).some(e => e.pos === 'v');

  const items = [], seen = new Set();
  const add = (key, pos, via) => {
    for (const e of map.get(key) || []) {
      if (!fits(e, pos)) continue;
      const id = [e.d, e.w, e.pos, (e.t || []).join(), (e.x || '').slice(0, 40)].join('|');
      if (seen.has(id)) continue;
      seen.add(id); items.push({ e, via: e._form && !via ? { tag: cands.find(c => c.k === e.k && c.tag)?.tag || 'форма слова' } : via });
    }
  };

  // 1. Отделяемая приставка в конце клаузы
  let sepGuess = null;
  if (ctx?.isParticle) {
    for (const c of particleVerbs) {
      const before = items.length;
      add(lw + c.k, 'v', { sep: lw, verb: c.from });
      if (items.length === before && !sepGuess && (c.strong || isVerb(c.k))) sepGuess = { verb: lw + c.k, particle: lw, base: c.k, from: c.from };
    }
  } else if (ctx) {
    for (const c of verbCands) {
      const before = items.length;
      add(ctx.particle + c.k, 'v', { sep: ctx.particle, tag: c.tag });
      if (items.length === before && !sepGuess && (c.strong || isVerb(c.k))) sepGuess = { verb: ctx.particle + c.k, particle: ctx.particle, base: c.k };
    }
  }
  if (items.length) sepGuess = null;
  const nSep = items.length;

  // 2. Точное совпадение, 3. словоформы
  add(lw, null, null);
  const hitTags = new Set();
  for (const c of cands) {
    if (c.du && (hitTags.has(c.pos + c.tag) || items.slice(nSep).some(it => it.e.pos && fits(it.e, c.pos)))) continue; // «schönste» → schön, но не schon
    const before = items.length;
    add(c.k, c.pos, { tag: c.tag });
    if (items.length > before) hitTags.add(c.pos + c.tag);
    if (c.strong && items.length === before && !seen.has('strong|' + c.k) && !(map.get(c.k) || []).length) {
      seen.add('strong|' + c.k);
      items.push({ e: { w: c.k, pos: 'v', t: [] }, via: { tag: c.tag }, missing: true });
    }
  }

  // существительные вперёд, если слово с заглавной буквы в середине предложения
  const cap = word[0] !== word[0].toLowerCase(), mid = start > 0;
  let rest = items.splice(nSep);
  const isN = it => it.e.pos === 'n';
  // служебное слово найдено точно — догадки по окончаниям не нужны («die» — не форма «dienen»)
  if (rest.some(it => !it.via && CLOSED.includes(it.e.pos))) rest = rest.filter(it => !it.via);
  rest.sort((a, b) => (!a.via && a.e.w === word ? 0 : 1) - (!b.via && b.e.w === word ? 0 : 1));
  if (cap && mid) rest.sort((a, b) => isN(b) - isN(a));
  else if (!cap) { const other = rest.filter(it => !isN(it)); if (other.length) rest = other; } // существительные пишутся с заглавной
  items.push(...rest);

  // формы глаголов для карточек
  const verbs = items.filter(it => it.e.pos === 'v');
  if (verbs.length) {
    const rests = await fetchKeys(verbs.flatMap(it => G.sepRests(it.e.w)));
    const has = k => G.STRONG.has(k) || (rests.get(k) || []).some(e => e.pos === 'v');
    for (const it of verbs) {
      const f = it.e.forms?.pt ? it.e.forms : G.verbForms(it.e.w, has);
      if (f) it.forms = { ...f, aux: it.e.forms?.aux || f.aux || 'h' };
    }
  }

  const compound = items.length ? null : await splitCompound(lw);
  return { word, items, sepGuess, compound };
}

// Составные слова: Treppenhaus → Treppe + Haus.
async function splitCompound(lw) {
  const n = lw.length;
  if (n < 7 || n > 40) return null;
  const keys = [];
  for (let i = 0; i < n; i++) for (let j = i + 3; j <= n; j++) keys.push(lw.slice(i, j));
  const map = await fetchKeys(keys);
  const has = k => (map.get(k) || []).some(e => e.pos !== 'art' && e.pos !== 'pron');
  const memo = new Map();
  const rec = i => {
    if (i === n) return [];
    if (memo.has(i)) return memo.get(i);
    let best = null;
    for (let j = n; j >= i + 3; j--) {
      const part = lw.slice(i, j);
      let key = has(part) ? part : null;
      if (!key && j < n) for (const f of ['es', 'en', 's', 'n', 'e']) {
        const st = part.slice(0, -f.length);
        if (part.endsWith(f) && st.length >= 3 && has(st)) { key = st; break; }
      }
      if (!key) continue;
      const tail = rec(j);
      if (tail && (!best || tail.length + 1 < best.length)) best = [key, ...tail];
    }
    memo.set(i, best);
    return best;
  };
  const parts = rec(0);
  if (!parts || parts.length < 2 || parts.length > 4) return null;
  return parts.map(k => ({ k, entries: [...map.get(k)].sort((a, b) => (b.pos === 'n') - (a.pos === 'n')).slice(0, 1) }));
}

// ---------- импорт

function normalize(e, d) {
  const w = String(e.w || '').trim(), k = w.toLowerCase(), f = new Set(e.f || []);
  if (e.pos === 'n') {
    if (e.pl && e.pl !== '-') { const pl = e.pl.toLowerCase(); f.add(pl); if (!/[ns]$/.test(pl)) f.add(pl + 'n'); }
    if (e.g === 'm' || e.g === 'n') { f.add(k + 's'); f.add(k + 'es'); }
  }
  if (e.forms) for (const x of [e.forms.pr3, e.forms.pt, e.forms.pp]) if (x && !x.includes(' ')) f.add(x.toLowerCase());
  f.delete(k);
  return { ...e, w, d, k, f: [...f] };
}

async function addEntries(id, list) {
  for (let i = 0; i < list.length; i += 3000) {
    const part = list.slice(i, i + 3000);
    await DB.tx('entries', 'readwrite', s => { for (const e of part) if (e.w) s.add(normalize(e, id)); });
  }
}

async function removeEntries(id) {
  await DB.tx('entries', 'readwrite', s => {
    s.index('d').openKeyCursor(IDBKeyRange.only(id)).onsuccess = e => {
      const c = e.target.result;
      if (c) { s.delete(c.primaryKey); c.continue(); }
    };
  });
}

export async function removeDict(id) {
  await removeEntries(id); await DB.del('dicts', id); enabled = null;
}

async function saveDict(name, entries, extra = {}) {
  const id = extra.id || 'd' + Date.now().toString(36);
  await addEntries(id, entries);
  await DB.put('dicts', { id, name, count: entries.length, enabled: true, ...extra });
  enabled = null;
  return { name, count: entries.length };
}

// Базовый словарь: строки «слово|часть речи|грамматика|перевод|доп. формы».
function parseBase(text) {
  const out = [];
  for (const line of text.split('\n')) {
    if (!line.trim() || line.startsWith('#')) continue;
    const [w, pos, gram = '', t = '', extra = ''] = line.trim().split('|');
    const e = { w, pos, t: t.split(';').map(s => s.trim()).filter(Boolean) };
    const g = gram.split(',');
    if (pos === 'n') { if (g[0]) e.g = g[0]; if (g[1]) e.pl = g[1]; }
    else if (pos === 'v') {
      if (g.length >= 3) e.forms = { pr3: g[0], pt: g[1], pp: g[2], aux: g[3] || 'h' };
      else if (g[0] === 's') e.forms = { aux: 's' };
    }
    if (extra) e.f = extra.split(',').map(s => s.trim().toLowerCase());
    out.push(e);
  }
  return out;
}

// Устанавливает или обновляет встроенный словарь. onProgress(доля) вызывается только при установке.
export async function ensureBase(onProgress) {
  let text;
  try { text = await (await fetch('data/base-de-ru.txt')).text(); } catch { return false; }
  let h = text.length; for (let i = 0; i < text.length; i += 97) h = (h * 31 + text.charCodeAt(i)) | 0;
  const meta = await DB.get('dicts', 'base');
  if (meta?.ver === h) return false;
  onProgress?.(0);
  await removeEntries('base');
  const list = parseBase(text);
  for (let i = 0; i < list.length; i += 3000) {
    await addEntries('base', list.slice(i, i + 3000));
    onProgress?.(Math.min(1, (i + 3000) / list.length));
  }
  await DB.put('dicts', { id: 'base', name: 'Немецко-русский (Wiktionary + ядро)', count: list.length, ver: h, builtin: true, enabled: meta?.enabled ?? true });
  enabled = null;
  return true;
}

const ext = n => n.toLowerCase().match(/\.(json|tsv|txt|csv|ifo|idx|dict|dz|gz|zip|syn)$/)?.[1];
const gunzip = buf => new Response(new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();

export async function importFiles(fileList) {
  let files = [];
  for (const f of fileList) {
    const buf = await f.arrayBuffer();
    if (ext(f.name) === 'zip') {
      const z = await unzip(buf);
      for (const x of z.files) if (ext(x.name) && !x.name.endsWith('/')) files.push({ name: x.name.split('/').pop(), buf: await z.read(x) });
    } else files.push({ name: f.name, buf });
  }
  const done = [];
  if (files.some(f => ext(f.name) === 'ifo')) done.push(await importStarDict(files));
  for (const f of files) {
    const e = ext(f.name), text = () => new TextDecoder().decode(f.buf), base = f.name.replace(/\.\w+$/, '');
    if (e === 'json') {
      const j = JSON.parse(text());
      const entries = Array.isArray(j) ? j : j.entries;
      if (!Array.isArray(entries)) throw new Error(`${f.name}: не найден список статей`);
      done.push(await saveDict(j.name || base, entries.map(({ k, d, f: _f, ...rest }) => rest)));
    } else if (e === 'tsv' || e === 'txt' || e === 'csv') {
      const entries = text().split(/\r?\n/).map(l => l.split(e === 'csv' ? /[;,]/ : '\t')).filter(p => p.length >= 2 && p[0].trim())
        .map(p => ({ w: p[0].trim(), t: [p.slice(1).join('; ').trim()] }));
      if (!entries.length) throw new Error(`${f.name}: ожидаются строки «слово<Tab>перевод»`);
      done.push(await saveDict(base, entries));
    }
  }
  if (!done.length) throw new Error('Не найдено файлов словаря. Поддерживаются JSON, TSV и StarDict (.ifo + .idx + .dict)');
  return done;
}

async function importStarDict(files) {
  const pick = re => files.find(f => re.test(f.name.toLowerCase()));
  const ifoF = pick(/\.ifo$/), idxF = pick(/\.idx(\.gz)?$/), dictF = pick(/\.dict(\.dz)?$/);
  if (!idxF || !dictF) throw new Error('Для StarDict выберите сразу три файла: .ifo, .idx и .dict (или .dict.dz)');
  const ifo = Object.fromEntries(new TextDecoder().decode(ifoF.buf).split(/\r?\n/).filter(l => l.includes('=')).map(l => [l.slice(0, l.indexOf('=')), l.slice(l.indexOf('=') + 1).trim()]));
  const idx = new Uint8Array(/\.gz$/i.test(idxF.name) ? await gunzip(idxF.buf) : idxF.buf);
  const dict = new Uint8Array(/\.dz$/i.test(dictF.name) ? await gunzip(dictF.buf) : dictF.buf);
  const dv = new DataView(idx.buffer, idx.byteOffset, idx.byteLength), td = new TextDecoder();
  const wide = ifo.idxoffsetbits === '64', sts = ifo.sametypesequence || '';
  const clean = s => s.replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|li|tr)>/gi, '\n').replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&')
    .replace(/\n{3,}/g, '\n\n').trim();
  const entries = [];
  let p = 0;
  while (p < idx.length) {
    const e = idx.indexOf(0, p);
    if (e < 0) break;
    const w = td.decode(idx.subarray(p, e));
    let off, size;
    if (wide) { off = dv.getUint32(e + 1) * 2 ** 32 + dv.getUint32(e + 5); size = dv.getUint32(e + 9); p = e + 13; }
    else { off = dv.getUint32(e + 1); size = dv.getUint32(e + 5); p = e + 9; }
    let data = dict.subarray(off, off + size);
    if (!sts) data = data.subarray(1);
    const z = data.indexOf(0);
    if (z >= 0 && (sts.length !== 1)) data = data.subarray(0, z);
    const x = clean(td.decode(data));
    if (w && x) entries.push({ w, x });
  }
  return saveDict(ifo.bookname || ifoF.name.replace(/\.ifo$/i, ''), entries);
}

export async function exportDict(id) {
  const meta = await DB.get('dicts', id);
  const rows = await DB.tx('entries', 'readonly', s => DB.req(s.index('d').getAll(id)));
  const entries = rows.map(({ k, d, f, ...rest }) => rest);
  return { name: meta.name, json: JSON.stringify({ format: 'buecherleser-dict-1', name: meta.name, entries }) };
}
