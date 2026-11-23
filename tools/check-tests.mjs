// Проверка вариантов Lesen B1 на формат: node tools/check-tests.mjs [файлы js/tests/vNN.js …]
// Без аргументов проверяет все варианты из js/tests/index.js.
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const COUNTS = [5, 5, 6, 3, 6];
function check(v, name) {
  const err = [], warn = [];
  const need = (ok, msg) => { if (!ok) err.push(msg); };
  need(/^v\d\d$/.test(v.id || ''), `id должен быть вида v07, а не «${v.id}»`);
  need(/^Variante \d+$/.test(v.title || ''), 'title должен быть «Variante N»');
  need(typeof v.about === 'string' && v.about.length > 10, 'нет about');
  need(Array.isArray(v.parts) && v.parts.length === 5, 'должно быть 5 частей');
  if (err.length) return { err, warn };
  let n = 1;
  v.parts.forEach((p, pi) => {
    const items = p.groups.flatMap(g => g.items);
    need(items.length === COUNTS[pi], `Teil ${pi + 1}: заданий ${items.length}, нужно ${COUNTS[pi]}`);
    for (const it of items) {
      need(it.n === n, `Teil ${pi + 1}: номер ${it.n}, ожидался ${n}`); n++;
      need(Array.isArray(it.opts) && Number.isInteger(it.a) && it.a >= 0 && it.a < it.opts.length, `задание ${it.n}: ответ вне вариантов`);
      need(new Set(it.opts).size === it.opts.length, `задание ${it.n}: одинаковые варианты`);
    }
    const as = items.map(it => it.a);
    if (pi === 0) for (const it of items) need(it.opts.length === 3 && it.q, `задание ${it.n}: нужно 3 варианта и вопрос`);
    if (pi === 1) {
      need(p.compact === true, 'Teil 2: нет compact');
      need(p.groups.length === 1 && (p.groups[0].html.match(/class="ad"/g) || []).length === 8, 'Teil 2: должно быть 8 объявлений');
      need(items.every(it => it.opts.length === 9), 'Teil 2: варианты должны быть AX');
      need(as.filter(a => a === 8).length === 1, 'Teil 2: ровно одна ситуация должна иметь ответ x');
      need(new Set(as).size === 5, 'Teil 2: объявления в ответах не должны повторяться');
    }
    if (pi === 2) {
      need(p.groups.length === 3 && p.groups.every(g => g.items.length === 2 && g.html), 'Teil 3: три текста по два задания');
      for (const g of p.groups) need(g.items[0]?.opts.length === 2 && g.items[1]?.opts.length === 3, 'Teil 3: сначала richtig/falsch, затем a/b/c');
      const rf = p.groups.map(g => g.items[0]?.a);
      if (new Set(rf).size === 1) warn.push('Teil 3: все ответы richtig/falsch одинаковые');
    }
    if (pi === 3) {
      need(items.every(it => it.opts.length === 2), 'Teil 4: только richtig/falsch');
      if (new Set(as).size === 1) warn.push('Teil 4: все ответы одинаковые');
    }
    if (pi === 4) {
      need(p.gaps === true, 'Teil 5: нет gaps');
      for (const it of items) need(it.opts.length === 3 && p.groups[0].html.includes(`(${it.n})`), `задание ${it.n}: нет пропуска в тексте или не 3 варианта`);
    }
    if ((pi === 0 || pi === 4) && new Set(as).size === 1) warn.push(`Teil ${pi + 1}: все ответы на одной букве`);
    if (pi === 0 || pi === 4) { const c = [0, 1, 2].map(k => as.filter(a => a === k).length); if (Math.max(...c) >= as.length - 1) warn.push(`Teil ${pi + 1}: ответы распределены неравномерно (${c.join('/')})`); }
  });
  return { err, warn };
}

const files = process.argv.slice(2);
let variants;
if (files.length) variants = await Promise.all(files.map(async f => [f, (await import(pathToFileURL(resolve(f)).href)).default]));
else { const T = await import('../js/tests/index.js'); variants = [...T.LESEN_B1.variants, ...T.LESEN_B1_2.variants, ...T.LESEN_B1_3.variants].map(v => [v.id, v]); }
let bad = 0;
const ids = new Set();
for (const [name, v] of variants) {
  const { err, warn } = v ? check(v, name) : { err: ['нет export default'], warn: [] };
  if (v && ids.has(v.id)) err.push('повтор id ' + v.id);
  if (v) ids.add(v.id);
  console.log(`${err.length ? 'ОШИБКА' : 'ok    '} ${name}${v ? ' — ' + v.title : ''}`);
  for (const e of err) console.log('   ✗ ' + e);
  for (const w of warn) console.log('   ! ' + w);
  if (err.length) bad++;
}
console.log(bad ? `Вариантов с ошибками: ${bad}` : `Все варианты в порядке: ${variants.length}`);
process.exit(bad ? 1 : 0);
