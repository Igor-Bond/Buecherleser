// Проверка книги Sprechen B1 на формат: node tools/check-sprechen.mjs
// Наборы заданий (js/sprechen/sNN.js), рисунки для Teil 2 и фразы голосового тренажёра.
import { SETS } from '../js/sprechen/index.js';
import { SCENE_IDS, scene } from '../js/sprechen/scenes.js';
import { DRILLS } from '../js/sprechen/phrases.js';

// То, что синтезатор речи читает неправильно, а распознавание речи не может сверить
const TTS_BAD = [[/\d{1,2}[.:]\d{2}\s*Uhr/, 'время пишется «14 Uhr 30»'], [/\d,\d{2}\s*(Euro|€)|€/, 'цена пишется «12 Euro 50»'],
  [/\b(z\. ?B\.|ca\.|Str\.|Nr\.|Tel\.|bzw\.|usw\.|Dr\.|inkl\.)/, 'сокращение'], [/[()\[\]\/<>]|&\w+;/, 'скобки, косая черта или разметка']];
const count = t => t.split(/\s+/).filter(Boolean).length;
let bad = 0;
const ids = new Set(), scenes = new Set(), asks = new Map();

for (const s of SETS) {
  const err = [], warn = [], need = (ok, msg) => { if (!ok) err.push(msg); };
  need(/^s\d\d$/.test(s.id || '') && !ids.has(s.id), `id должен быть вида s07 и не повторяться: «${s.id}»`); ids.add(s.id);
  need(/^Set \d+$/.test(s.title || ''), 'title должен быть «Set N»');
  need(typeof s.about === 'string' && s.about.length > 10, 'нет about');
  for (const part of ['t1', 't2', 't3']) {
    const t = s[part], T = `Teil ${part[1]}`;
    if (!t) { err.push(`${T}: нет`); continue; }
    const ok = Array.isArray(t.sample) && t.sample.length && t.sample.every(l => Array.isArray(l) && /^[fm]\d$/.test(l[0]) && typeof l[1] === 'string' && l[1].trim().length > 3);
    need(ok, `${T}: sample должен быть списком [код f1/m1…, текст]`);
    if (!ok) continue;
    const codes = [...new Set(t.sample.map(l => l[0]))], text = t.sample.map(l => l[1]).join(' ');
    need(codes.length === 2, `${T}: в образце должно быть два говорящих`);
    need(t.sample.every((l, i) => !i || l[0] !== t.sample[i - 1][0]), `${T}: две реплики подряд у одного говорящего`);
    for (const [re, msg] of TTS_BAD) if (re.test(text)) warn.push(`${T}: ${msg} — «${text.match(re)[0]}»`);
    if (part !== 't3') {
      need(Array.isArray(t.ask) && t.ask.length === 2 && t.ask.every(q => typeof q === 'string' && q.trim().endsWith('?')), `${T}: ask — два вопроса`);
      need(t.sample.length === 5, `${T}: образец — рассказ, вопрос, ответ, вопрос, ответ (5 реплик), а не ${t.sample.length}`);
      // вопросы экзаменатора в образце — те же, что в задании (допустимо вводное «Danke.» / «Und …»)
      const norm = q => q.toLowerCase().replace(/[^a-zäöüß ]/g, '').trim();
      (t.ask || []).forEach((q, i) => { const said = norm(t.sample[1 + 2 * i]?.[1] || ''); need(said.endsWith(norm(q)) || said.includes(norm(q).split(' ').slice(1).join(' ')), `${T}: вопрос ${i + 1} в образце не совпадает с ask`); });
      const first = count(t.sample[0][1]);
      if (first < 55 || first > 110) warn.push(`${T}: первый рассказ — ${first} слов, обычно 70–90`);
      for (const q of t.ask || []) { if (asks.has(q)) warn.push(`${T}: вопрос «${q}» уже есть в ${asks.get(q)}`); asks.set(q, s.id); }
    }
    if (part === 't2') {
      need(SCENE_IDS.includes(t.scene) && scene(t.scene).startsWith('<svg'), `Teil 2: нет рисунка «${t.scene}»`);
      need(!scenes.has(t.scene), `Teil 2: рисунок «${t.scene}» уже занят другим набором`); scenes.add(t.scene);
      need(typeof t.topic === 'string' && t.topic.startsWith('Thema: '), 'Teil 2: topic должен начинаться с «Thema: »');
      need(typeof t.pic === 'string' && t.pic.length > 60, 'Teil 2: нет описания рисунка pic (его получает ИИ)');
    }
    if (part === 't3') {
      need(typeof t.title === 'string' && typeof t.task === 'string' && t.task.length > 40, 'Teil 3: нет title или task');
      need(Array.isArray(t.points) && t.points.length === 5, 'Teil 3: должно быть пять пунктов');
      need(t.who && codes.every(c => t.who[c]), 'Teil 3: нет имён говорящих (who)');
      need(t.sample.length >= 10 && t.sample.length <= 14, `Teil 3: в диалоге ${t.sample.length} реплик, нужно 10–14`);
      need(/^also\b/i.test(t.sample.at(-1)[1].replace(/^[^.!?]*[.!?]\s*/, '')) || /\balso\b/i.test(t.sample.at(-1)[1]), 'Teil 3: последняя реплика должна подводить итог («Also …»)');
    }
  }
  console.log(`${err.length ? 'ОШИБКА' : 'ok    '} ${s.id} — ${s.title}`);
  for (const e of err) console.log('   ✗ ' + e);
  for (const w of warn) console.log('   ! ' + w);
  if (err.length) bad++;
}

// Тренажёр фраз: полные предложения без цифр и пропусков, иначе распознавание не сможет сверить их слово в слово
const seen = new Set(), dIds = new Set();
let phrases = 0;
for (const d of DRILLS) {
  const err = [];
  if (!/^d\d$/.test(d.id) || dIds.has(d.id)) err.push('id блока должен быть вида d3 и не повторяться'); dIds.add(d.id);
  if (!d.title || !d.ru || !Array.isArray(d.items) || d.items.length < 5) err.push('нужны title, ru и не меньше пяти фраз');
  for (const [de, ru] of d.items || []) {
    phrases++;
    if (typeof de !== 'string' || typeof ru !== 'string' || !ru.trim()) { err.push('фраза без перевода'); continue; }
    if (/\d|…|\.\.\.|[\/()]/.test(de)) err.push(`цифры, пропуск или варианты через черту: «${de}»`);
    if (!/[.!?]$/.test(de)) err.push(`нет точки в конце: «${de}»`);
    if (count(de) > 16) err.push(`слишком длинная для одной реплики (${count(de)} слов): «${de}»`);
    if (seen.has(de)) err.push(`повтор: «${de}»`); seen.add(de);
  }
  console.log(`${err.length ? 'ОШИБКА' : 'ok    '} ${d.id} — ${d.title}: фраз ${d.items?.length}`);
  for (const e of err) console.log('   ✗ ' + e);
  if (err.length) bad++;
}
console.log(bad ? `Ошибок: ${bad}` : `Всё в порядке: наборов ${SETS.length}, фраз в тренажёре ${phrases}`);
process.exit(bad ? 1 : 0);
