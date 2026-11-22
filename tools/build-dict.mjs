// Сборка встроенного словаря из выгрузок Wiktionary (kaikki.org) и выверенного вручную ядра.
//
//   node tools/build-dict.mjs <de.jsonl.gz> <ru.jsonl>
//
// de.jsonl.gz — https://kaikki.org/dewiktionary/Deutsch/kaikki.org-dictionary-Deutsch.jsonl.gz
// ru.jsonl    — https://kaikki.org/ruwiktionary/Немецкий/kaikki.org-dictionary-Немецкий.jsonl
// Результат: data/base-de-ru.txt (строки «слово|часть речи|грамматика|перевод|формы»).
import { createReadStream, readFileSync, writeFileSync } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

const [dePath, ruPath] = process.argv.slice(2);
if (!dePath || !ruPath) { console.error('Нужны два файла: de.jsonl.gz и ru.jsonl'); process.exit(1); }
const root = fileURLToPath(new URL('..', import.meta.url));

const POS = { noun: 'n', name: 'n', verb: 'v', adj: 'adj', adv: 'adv', prep: 'prp', conj: 'conj', pron: 'pron',
  det: 'pron', article: 'art', num: 'num', particle: 'part', intj: 'part' };
const GENDER = { masculine: 'm', feminine: 'f', neuter: 'n' };
const WORD = /^[A-Za-zÀ-ÖØ-öø-ÿẞ][A-Za-zÀ-ÖØ-öø-ÿẞ'-]*$/;
const clean = s => String(s || '').replace(/[|;\r\n\t]+/g, ', ').replace(/\s+/g, ' ').replace(/^[\s,]+|[\s,.]+$/g, '');
const single = f => f && WORD.test(f);

const entries = new Map();   // «слово\tчасть речи» → [статья, …] (омонимы отдельно)
const formOf = new Map();    // лемма (нижний регистр) → Set словоформ

function entry(word, pos, g, pl) {
  const key = word + '\t' + pos;
  if (!entries.has(key)) entries.set(key, []);
  const list = entries.get(key);
  let e = list.find(x => !g || !x.g || (x.g === g && (!pl || !x.pl || x.pl === pl)));
  if (!e) { e = { w: word, pos, t: [], f: new Set() }; list.push(e); }
  if (g && !e.g) e.g = g;
  if (pl && !e.pl) e.pl = pl;
  return e;
}
function addT(e, list, front = false) {
  // «начинать» не добавляем, если уже есть «начинать, начинаться»
  const parts = t => t.toLowerCase().split(/\s*[,/]\s*/).filter(Boolean);
  const have = new Set(e.t.flatMap(parts));
  const fresh = [];
  for (const raw of list) {
    const t = clean(raw);
    if (!t || t.length > 140 || parts(t).every(p => have.has(p))) continue;
    for (const p of parts(t)) have.add(p);
    fresh.push(t);
  }
  e.t = front ? [...fresh, ...e.t] : [...e.t, ...fresh];
}
function noteFormOf(o) {
  for (const s of o.senses || []) for (const f of s.form_of || []) {
    if (!f.word || !single(o.word)) continue;
    const k = f.word.toLowerCase();
    if (!formOf.has(k)) formOf.set(k, new Set());
    formOf.get(k).add(o.word.toLowerCase());
  }
}
const isFormOf = o => (o.senses || []).length > 0 && (o.senses || []).every(s => (s.tags || []).includes('form-of') || s.form_of?.length);
const has = (f, ...tags) => tags.every(t => (f.tags || []).includes(t));

function grammar(o, pos) {
  const forms = o.forms || [], out = { f: [] };
  if (pos === 'n') {
    out.g = (o.tags || []).map(t => GENDER[t]).find(Boolean);
    const pl = forms.find(f => has(f, 'nominative', 'plural') && single(f.form));
    if (pl) out.pl = pl.form === o.word ? '-' : pl.form;
    else if ((o.tags || []).includes('no-plural') || (o.tags || []).includes('singular-only')) out.pl = '-';
    for (const f of forms) if (single(f.form) && (f.tags || []).some(t => ['genitive', 'dative', 'accusative', 'plural'].includes(t))) out.f.push(f.form);
  } else if (pos === 'v') {
    const pick = fn => forms.find(fn)?.form;
    const pr3 = pick(f => has(f, 'present') && (f.pronouns || []).includes('er'));
    const pt = pick(f => has(f, 'past') && (f.pronouns || []).includes('ich'));
    const pp = pick(f => has(f, 'participle-2'));
    const aux = forms.filter(f => has(f, 'auxiliary')).map(f => f.form);
    if (pr3 && pt && pp) out.forms = [pr3, pt, pp, aux.includes('sein') && !aux.includes('haben') ? 's' : 'h'].map(clean);
    for (const f of forms) {
      if (!(f.tags || []).some(t => ['present', 'past', 'subjunctive-ii', 'participle-2', 'imperative'].includes(t))) continue;
      const x = String(f.form || '').replace(/!$/, '');
      if (single(x)) out.f.push(x);
    }
  } else {
    for (const f of forms) if (single(f.form) && (f.tags || []).some(t => ['comparative', 'superlative', 'positive'].includes(t))) out.f.push(f.form);
  }
  return out;
}

async function eachLine(stream, fn) {
  let n = 0;
  for await (const line of createInterface({ input: stream, crlfDelay: Infinity })) {
    if (!line) continue;
    let o; try { o = JSON.parse(line); } catch { continue; }
    fn(o);
    if (++n % 200000 === 0) console.log(`  …${n.toLocaleString('ru')} строк`);
  }
  return n;
}

function take(o, translations) {
  const pos = POS[o.pos];
  if (!pos || !single(o.word)) return;
  if (isFormOf(o)) return noteFormOf(o);
  if (!translations.length) return;
  const gr = grammar(o, pos);
  const e = entry(o.word, pos, gr.g, gr.pl);
  if (gr.forms && !e.forms) e.forms = gr.forms;
  for (const f of gr.f) e.f.add(f.toLowerCase());
  addT(e, translations);
}

console.log('Немецкий Wiktionary…');
await eachLine(createReadStream(dePath).pipe(createGunzip()), o => {
  if (o.lang_code !== 'de') return;
  const tr = (o.translations || []).filter(t => t.lang_code === 'ru' && t.word);
  const modern = tr.filter(t => !(t.tags || []).some(x => x === 'archaic' || x === 'obsolete'));
  const list = (modern.length ? modern : tr).sort((a, b) => (parseInt(a.sense_index) || 99) - (parseInt(b.sense_index) || 99)).map(t => t.word);
  take(o, list);
});
console.log(`  статей с русским переводом: ${entries.size.toLocaleString('ru')}`);

console.log('Русский Wiktionary…');
await eachLine(createReadStream(ruPath), o => {
  const glosses = (o.senses || []).filter(s => !(s.tags || []).includes('form-of')).flatMap(s => s.glosses || []);
  take(o, glosses);
});
console.log(`  всего статей: ${entries.size.toLocaleString('ru')}`);

// Выверенное вручную ядро: его переводы идут первыми, грамматика имеет приоритет.
let curated = 0;
const closed = new Set();
for (const line of readFileSync(root + 'data/src/base-curated.txt', 'utf8').split('\n')) {
  if (!line.trim() || line.startsWith('#')) continue;
  const [w, pos, gram = '', t = '', extra = ''] = line.trim().split('|');
  const g = gram.split(',');
  const e = pos === 'n' ? entry(w, pos, g[0] || undefined, g[1] || undefined) : entry(w, pos);
  if (pos === 'n') { if (g[0]) e.g = g[0]; if (g[1]) e.pl = g[1]; }
  if (pos === 'v') { if (g.length >= 3) e.forms = [g[0], g[1], g[2], g[3] || 'h']; else if (g[0] === 's') e.aux = 's'; }
  e.cur = true;
  if (['art', 'pron', 'prp', 'conj', 'part'].includes(pos)) closed.add(w.toLowerCase());
  const rest = e.t; e.t = [];
  addT(e, t.split(';')); addT(e, rest);
  for (const f of extra.split(',')) if (f.trim()) e.f.add(f.trim().toLowerCase());
  curated++;
}

const lines = [];
for (const list of entries.values()) for (const e of list) {
  if (!e.t.length) continue;
  const lw = e.w.toLowerCase();
  // мусорные «существительные»: со строчной буквы или совпадающие со служебным словом (Sie, Der…)
  if (e.pos === 'n' && !e.cur && (e.w[0] === lw[0] || closed.has(lw))) continue;
  for (const f of formOf.get(lw) || []) e.f.add(f);
  e.f.delete(lw);
  let gram = '';
  if (e.pos === 'n') gram = [e.g || '', e.pl || ''].join(',').replace(/,$/, '');
  else if (e.pos === 'v') {
    if (e.forms) { if (e.aux) e.forms[3] = e.aux; gram = e.forms.join(','); }
    else if (e.aux) gram = e.aux;
  }
  lines.push([e.w, e.pos, gram, e.t.slice(0, 8).join('; '), [...e.f].slice(0, 30).join(',')].join('|').replace(/\|+$/, ''));
}
lines.sort((a, b) => a.localeCompare(b, 'de'));
const header = `# Немецко-русский словарь Bücherleser.
# Источники: de.wiktionary.org и ru.wiktionary.org (выгрузки kaikki.org), лицензия CC BY-SA 4.0,
# плюс выверенное вручную ядро частых слов (data/src/base-curated.txt). Собрано tools/build-dict.mjs.
# Формат: слово|часть речи|грамматика|перевод|словоформы
`;
writeFileSync(root + 'data/base-de-ru.txt', header + lines.join('\n') + '\n');
console.log(`Готово: ${lines.length.toLocaleString('ru')} статей (из них ${curated} из ядра), ${(Buffer.byteLength(lines.join('\n')) / 1e6).toFixed(1)} МБ`);
