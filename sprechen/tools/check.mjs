// Проверка содержания на формат: node tools/check.mjs
// Наборы заданий (js/data/sNN.js), рисунки для Teil 2, фразы голосового тренажёра и его расписание повторений.
import { SETS } from '../js/data/index.js';
import { SCENE_IDS, scene } from '../js/data/scenes.js';
import { DRILLS, PROFILE } from '../js/data/phrases.js';
import * as TR from '../js/trainer.js';
import { existsSync, statSync } from 'node:fs';

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
      if (t.img) { const f = new URL('../assets/' + t.img, import.meta.url); need(existsSync(f), `Teil 2: нет файла assets/${t.img}`); if (existsSync(f) && statSync(f).size > 200000) warn.push(`Teil 2: фото ${t.img} больше 200 КБ`); }
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

// Тренажёр фраз: формат фраз, принятые формулировки и расписание повторений
const seen = new Set(), dIds = new Set();
let phrases = 0, variants = 0;
for (const d of DRILLS) {
  const err = [], keys = new Set();
  if (!/^d\d$/.test(d.id) || dIds.has(d.id)) err.push('id блока должен быть вида d3 и не повторяться'); dIds.add(d.id);
  if (!d.title || !d.ru || !Array.isArray(d.items) || d.items.length < 5) err.push('нужны title, ru и не меньше пяти фраз');
  for (const it of d.items || []) {
    phrases++;
    const at = `«${it.k}»`;
    if (!/^[a-z]+$/.test(it.k || '') || keys.has(it.k)) { err.push(`ключ фразы — строчные латинские буквы, без повторов: ${at}`); continue; } keys.add(it.k);
    if (typeof it.de !== 'string' || typeof it.ru !== 'string' || !it.ru.trim()) { err.push(`${at}: нужны de и ru`); continue; }
    for (const t of [it.de, ...(it.ok || [])]) {
      if (/\d|…|\.\.\.|[\/()]/.test(t)) err.push(`${at}: цифры, пропуск или скобки: «${t}»`);
      if (!/[.!?]$/.test(t)) err.push(`${at}: нет точки в конце: «${t}»`);
    }
    if (/[\[\]|]/.test(it.de)) err.push(`${at}: в образце de не должно быть вариантов в скобках`);
    if (it.q != null && (typeof it.q !== 'string' || !/[.!?]$/.test(it.q))) err.push(`${at}: реплика q должна быть предложением`);
    const p = TR.phrase(`${d.id}.${it.k}`);
    variants += p.accept.length;
    if (p.accept.length > 80) err.push(`${at}: слишком много сочетаний (${p.accept.length})`);
    for (const v of p.accept) {
      if (/[\[\]{}|]/.test(v)) err.push(`${at}: не раскрылись скобки: «${v}»`);
      if (/\s[,.?!]|,,|\s\s/.test(v)) err.push(`${at}: лишний пробел или запятая: «${v}»`);
      if (!TR.judge(p, v).ok) err.push(`${at}: формулировка не засчитывается сама себе: «${v}»`);
    }
    if (count(p.de) > 16) err.push(`${at}: слишком длинная для одной реплики (${count(p.de)} слов)`);
    if (TR.judge(p, 'Guten Tag').ok || TR.judge(p, '').ok) err.push(`${at}: засчитывается посторонняя фраза`);
    if (!/tr-gap/.test(TR.gapText(p.de))) err.push(`${at}: в тексте с пропусками нет пропусков`);
    if (seen.has(p.de)) err.push(`повтор: «${p.de}»`); seen.add(p.de);
  }
  console.log(`${err.length ? 'ОШИБКА' : 'ok    '} ${d.id} — ${d.title}: фраз ${d.items?.length}`);
  for (const e of err) console.log('   ✗ ' + e);
  if (err.length) bad++;
}
// «Мои данные»: любая страна и любые варианты из списков дают фразы без дыр
{
  const err = [];
  for (const l of [...PROFILE.lands.map(x => ({ land: x[0] })), { land: 'other', aus: 'Serbien', inl: 'in Serbien' }, { land: 'other' }, { land: 'ua', hobby: 5, kinder: 'ein Kind', seit: 'seit einem Jahr' }])
    for (const it of DRILLS[0].items) { const p = TR.phrase('d1.' + it.k, l); if (p.accept.some(v => /[{}\[\]]|undefined/.test(v))) err.push(`${l.land}: «${p.de}»`); }
  const one = TR.phrase('d1.familie', { kinder: 'ein Kind' }), yr = TR.phrase('d1.herkunft', { seit: 'seit einem Jahr' });
  if (!TR.judge(one, 'ich bin verheiratet und habe 1 Kind').ok) err.push('«1 Kind» должно засчитываться как «ein Kind»');
  if (!TR.judge(yr, 'ich komme aus der Ukraine und lebe seit 1 Jahr in Deutschland').ok) err.push('«seit 1 Jahr» должно засчитываться');
  if (!TR.judge(TR.phrase('d1.herkunft'), 'Ich komme aus der Ukraine und wohne seit 2 Jahren in Deutschland').ok) err.push('«seit 2 Jahren» и wohne должны засчитываться');
  if (TR.judge(TR.phrase('d5.nicht'), 'Am Sonntag kann ich leider nicht').ok) err.push('Sonntag вместо Samstag не должно засчитываться');
  if (!TR.judge(TR.phrase('d4.samstag'), 'wir könnten am Samstag feiern').ok) err.push('другая формулировка предложения должна засчитываться');
  console.log(`${err.length ? 'ОШИБКА' : 'ok    '} Мои данные и сверка`);
  for (const e of err) console.log('   ✗ ' + e);
  if (err.length) bad++;
}
// Расписание: новая фраза проходит все ступени за один заход и приходит завтра; дальше интервалы растут, ошибка их сокращает
{
  const err = [], st = {}, day = 1000, need = (ok, msg) => { if (!ok) err.push(msg); };
  let s = TR.startSession(st, day), guard = 0;
  need(s && s.queue.length === TR.NEW_PER, `первый заход — ${TR.NEW_PER} новых фраз`);
  const first = s.queue[0], steps = TR.phrase(first).steps.length;
  while (s.queue.length && guard++ < 500) TR.answer(s, st, true);
  need(s.done === TR.NEW_PER && guard === TR.NEW_PER * steps, `каждая фраза должна пройти ${steps} ступени: ответов ${guard}`);
  need(st.tr[first].b === 1 && st.tr[first].due === day + 1, 'пройденная фраза приходит на повторение завтра');
  need(!TR.plan(st, day).rev.length && TR.plan(st, day + 1).due === TR.NEW_PER, 'завтра к повторению — все вчерашние');
  s = TR.startSession(st, day + 1); TR.answer(s, st, true);
  need(st.tr[first].b === 2 && st.tr[first].due === day + 1 + 3, 'после первого повторения — через три дня');
  s = TR.startSession(st, day + 4, 'd1');
  need(s.queue.includes(first) && s.queue[0] !== first && s.rev.has(first), 'к повторению идут все просроченные, самые давние — первыми');
  s.queue = [first, ...s.queue.filter(k => k !== first)];
  TR.answer(s, st, false);
  need(st.tr[first].b === 1 && st.tr[first].s === steps - 2 && s.queue.indexOf(first) === Math.min(2, s.queue.length - 1), 'ошибка на повторении: ящик и ступень назад, фраза возвращается через две карточки');
  while (s.queue.length && guard++ < 1000) TR.answer(s, st, true);
  need(st.tr[first].due === day + 5, 'исправленная фраза приходит завтра');
  const all = {}; for (const x of TR.ALL) all[x.key] = { s: 3, b: 5, due: day + 30 };
  const free = TR.startSession({ tr: all }, day, 'd2');
  need(free?.free && free.queue.length === DRILLS[1].items.length, 'когда в блоке всё пройдено — свободное повторение');
  const before = JSON.stringify(all); TR.answer(free, { tr: all }, false); TR.answer(free, { tr: all }, true);
  need(JSON.stringify(all) === before, 'свободное повторение не меняет расписание');
  need(TR.startSession({}, day, 'zz') === null, 'пустой блок — нет захода');
  for (const view of [TR.homeView(st, day, { canDictate: true }), TR.meView(), TR.cardView(TR.current(TR.startSession(st, day + 9), st), { phase: 'ask' }, TR.startSession(st, day + 9), { canDictate: true })])
    need(view.body.length > 50 && typeof view.bar === 'string', 'экран не собрался');
  console.log(`${err.length ? 'ОШИБКА' : 'ok    '} Расписание повторений`);
  for (const e of err) console.log('   ✗ ' + e);
  if (err.length) bad++;
}
console.log(bad ? `Ошибок: ${bad}` : `Всё в порядке: наборов ${SETS.length}, фраз в тренажёре ${phrases}, принятых формулировок ${variants}`);
process.exit(bad ? 1 : 0);
