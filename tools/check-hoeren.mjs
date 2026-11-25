// Проверка вариантов Hören B1 на формат: node tools/check-hoeren.mjs [файлы js/hoeren/hNN.js …]
// Без аргументов проверяет все варианты из js/hoeren/index.js и печатает, как ответы распределены по позициям.
// --dump — вывести задания без ключей (JSON) для независимой вычитки, --key — только ключи.
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const COUNTS = [4, 5, 8, 3];
// То, что синтезатор речи читает неправильно или по-разному на разных устройствах
const TTS_BAD = [[/\d{1,2}[.:]\d{2}\s*Uhr/, 'время пишется «14 Uhr 30»'], [/\d,\d{2}\s*(Euro|€)|€/, 'цена пишется «12 Euro 50»'],
  [/\b(z\. ?B\.|ca\.|Str\.|Nr\.|Tel\.|bzw\.|usw\.|Dr\.|inkl\.|Min\.|Std\.)/, 'сокращение'], [/[()\[\]\/<>]|&\w+;/, 'скобки, косая черта или разметка'], [/\d{1,2}\.\d{1,2}\.(\d|\s|$)/, 'дата цифрами']];

function check(v) {
  const err = [], warn = [];
  const need = (ok, msg) => { if (!ok) err.push(msg); };
  need(/^h\d\d$/.test(v.id || ''), `id должен быть вида h07, а не «${v.id}»`);
  need(/^Variante \d+$/.test(v.title || ''), 'title должен быть «Variante N»');
  need(typeof v.about === 'string' && v.about.length > 10, 'нет about');
  need(Array.isArray(v.parts) && v.parts.length === 4, 'должно быть 4 части');
  if (err.length) return { err, warn };
  let n = 1;
  v.parts.forEach((p, pi) => {
    const T = `Teil ${pi + 1}`, items = p.groups.flatMap(g => g.items), as = items.map(it => it.a);
    need(items.length === COUNTS[pi], `${T}: заданий ${items.length}, нужно ${COUNTS[pi]}`);
    for (const it of items) {
      need(it.n === n, `${T}: номер ${it.n}, ожидался ${n}`); n++;
      need(Array.isArray(it.opts) && Number.isInteger(it.a) && it.a >= 0 && it.a < it.opts.length, `задание ${it.n}: ответ вне вариантов`);
      need(new Set(it.opts).size === it.opts.length, `задание ${it.n}: одинаковые варианты`);
    }
    p.groups.forEach((g, gi) => {
      const G = `${T}, текст ${gi + 1}`;
      need(Array.isArray(g.audio) && g.audio.length && g.audio.every(l => Array.isArray(l) && /^[fm]\d$/.test(l[0]) && typeof l[1] === 'string' && l[1].trim().length > 3), `${G}: audio должно быть списком [код f1/m1…, текст]`);
      need(!g.html, `${G}: у текста для прослушивания не должно быть html — он виден до проверки`);
      if (!Array.isArray(g.audio)) return;
      const text = g.audio.map(l => l[1]).join(' '), words = text.split(/\s+/).length, codes = new Set(g.audio.map(l => l[0]));
      for (const [re, msg] of TTS_BAD) if (re.test(text)) warn.push(`${G}: ${msg} — «${text.match(re)[0]}»`);
      if (pi === 2) {
        need(codes.size === 2, `${G}: в разговоре должно быть два говорящих`);
        need(g.audio.length >= 6, `${G}: в разговоре меньше 6 реплик`);
        need(g.audio.every((l, i) => !i || l[0] !== g.audio[i - 1][0]), `${G}: две реплики подряд у одного говорящего`);
        need(g.who && [...codes].every(c => g.who[c]), `${G}: нет подписей говорящих (who)`);
      } else need(codes.size === 1, `${G}: один текст — один говорящий`);
      const [lo, hi] = pi === 2 ? [70, 190] : pi === 3 ? [35, 80] : [40, 95];
      if (words < lo || words > hi) warn.push(`${G}: слов ${words}, обычно ${lo}–${hi}`);
    });
    if (pi < 2) {
      need(p.groups.length === COUNTS[pi] && p.groups.every(g => g.items.length === 1), `${T}: ${COUNTS[pi]} текстов по одному заданию`);
      for (const it of items) need(it.opts.length === 3 && it.q, `задание ${it.n}: нужно 3 варианта и вопрос`);
    }
    if (pi === 2) {
      need(p.groups.length === 4 && p.groups.every(g => g.items.length === 2), 'Teil 3: четыре разговора по два задания');
      for (const g of p.groups) need(g.items[0]?.opts.length === 2 && g.items[1]?.opts.length === 3 && g.items[0]?.q && g.items[1]?.q, 'Teil 3: сначала richtig/falsch, затем a/b/c');
      const rf = p.groups.map(g => g.items[0]?.a);
      if (new Set(rf).size === 1) warn.push('Teil 3: все ответы richtig/falsch одинаковые');
    }
    if (pi === 3) {
      need(p.compact === true && typeof p.topic === 'string' && Array.isArray(p.stmts) && p.stmts.length === 6 && new Set(p.stmts).size === 6, 'Teil 4: нужны topic и шесть разных утверждений stmts');
      need(p.groups.length === 4 && Number.isInteger(p.groups[0].ex) && p.groups[0].ex >= 0 && p.groups[0].ex < 6 && p.groups[0].items.length === 0, 'Teil 4: первая группа — пример (ex, без заданий)');
      need(p.groups.slice(1).every(g => g.ex == null && g.items.length === 1 && g.items[0].opts.length === 6), 'Teil 4: три высказывания по одному заданию с вариантами a–f');
      need(new Set([p.groups[0].ex, ...as]).size === 4, 'Teil 4: пример и три ответа должны быть четырьмя разными утверждениями');
      need(new Set(p.groups.map(g => g.audio?.[0]?.[0])).size === 4, 'Teil 4: четыре разных говорящих');
    }
    const abc = items.filter(it => it.opts.length === 3).map(it => it.a);
    if (abc.length >= 4) { const c = [0, 1, 2].map(k => abc.filter(a => a === k).length); if (Math.max(...c) >= abc.length - 1) warn.push(`${T}: ответы a/b/c распределены неравномерно (${c.join('/')})`); }
  });
  return { err, warn };
}

const args = process.argv.slice(2), flags = args.filter(a => a.startsWith('--')), files = args.filter(a => !a.startsWith('--'));
let variants;
if (files.length) variants = await Promise.all(files.map(async f => [f, (await import(pathToFileURL(resolve(f)).href)).default]));
else variants = (await import('../js/hoeren/index.js')).HOEREN_B1.variants.map(v => [v.id, v]);

if (flags.includes('--dump') || flags.includes('--key')) {
  const key = flags.includes('--key');
  const out = variants.map(([, v]) => key ? { id: v.id, key: Object.fromEntries(v.parts.flatMap(p => p.groups.flatMap(g => g.items)).map(it => [it.n, it.a])) } : {
    id: v.id, parts: v.parts.map(p => ({ title: p.title, instr: p.instr, topic: p.topic, statements: p.stmts?.map((s, k) => `${'abcdef'[k]}) ${s}`),
      texts: p.groups.map(g => ({ ...(g.ex != null && { example: 'abcdef'[g.ex] }), text: g.audio.map(([c, t]) => (g.who?.[c] ? g.who[c] + ': ' : '') + t),
        tasks: g.items.map(it => ({ n: it.n, q: it.q, options: it.opts.length === 6 ? 'a–f' : it.opts.map((o, k) => `${it.opts.length === 2 ? o : 'abc'[k] + ') ' + o}`) })) })) })) });
  console.log(JSON.stringify(out, null, 1));
  process.exit(0);
}

let bad = 0;
const ids = new Set();
for (const [name, v] of variants) {
  const { err, warn } = v ? check(v) : { err: ['нет export default'], warn: [] };
  if (v && ids.has(v.id)) err.push('повтор id ' + v.id);
  if (v) ids.add(v.id);
  console.log(`${err.length ? 'ОШИБКА' : 'ok    '} ${name}${v ? ' — ' + v.title : ''}`);
  for (const e of err) console.log('   ✗ ' + e);
  for (const w of warn) console.log('   ! ' + w);
  if (err.length) bad++;
}

// Сводка по всем вариантам: один и тот же ответ не должен всегда стоять на одном месте
const ok = variants.filter(([, v]) => v?.parts?.length === 4).map(([, v]) => v);
if (ok.length > 1) {
  const all = ok.flatMap(v => v.parts.flatMap(p => p.groups.flatMap(g => g.items)));
  const count = (its, n) => Array.from({ length: n }, (_, k) => its.filter(it => it.a === k).length).join('/');
  console.log(`Ответы по позициям — a/b/c: ${count(all.filter(it => it.opts.length === 3), 3)}, richtig/falsch: ${count(all.filter(it => it.opts.length === 2), 2)}, Teil 4 a–f: ${count(all.filter(it => it.opts.length === 6), 6)}`);
  for (let n = 1; n <= 20; n++) {
    const as = ok.map(v => v.parts.flatMap(p => p.groups.flatMap(g => g.items)).find(it => it.n === n)?.a);
    if (ok.length >= 4 && new Set(as).size === 1) { console.log(`   ✗ задание ${n}: во всех вариантах ответ на одной позиции`); bad++; }
  }
  const sig = ok.map(v => v.parts.flatMap(p => p.groups.flatMap(g => g.items)).map(it => it.a).join(''));
  if (new Set(sig).size < sig.length) { console.log('   ✗ у двух вариантов совпадает весь ключ'); bad++; }
}
console.log(bad ? `Ошибок: ${bad}` : `Все варианты в порядке: ${variants.length}`);
process.exit(bad ? 1 : 0);
