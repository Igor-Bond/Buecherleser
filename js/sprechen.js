// Книга «Sprechen B1»: тренировка устной части DTZ. Ключа с ответами здесь нет, поэтому проверка другая:
// запись и самопроверка по списку, образец ответа, а при наличии ключа ИИ — разбор распознанного текста.
import { SETS, REDEMITTEL } from './sprechen/index.js';
import { scene } from './sprechen/scenes.js';
import { DRILLS } from './sprechen/phrases.js';
import * as V from './voicein.js';

export { SETS };
export const setOf = id => SETS.find(s => s.id === id);
export const audioOf = (set, key) => set?.[key.split('.')[1]]?.sample; // ключ кнопки «Прослушать»: sp.t1 / sp.t2 / sp.t3

const KEYWORDS = ['Name', 'Geburtsort', 'Wohnort', 'Arbeit / Beruf', 'Familie', 'Sprachen'];
export const PARTS = {
  t1: {
    title: 'Teil 1 · Sich vorstellen', short: 'Teil 1', time: 'около 2 минут: минута рассказа и ответы на вопросы',
    instr: 'Stellen Sie sich vor. Erzählen Sie etwas über sich. Die Stichwörter helfen Ihnen. Danach stellt die Prüferin oder der Prüfer noch ein oder zwei Fragen.',
    ru: 'Расскажите о себе по опорным словам (все называть не обязательно), потом ответьте на вопросы экзаменатора.',
    who: { f: 'Kandidatin', m: 'Kandidat', x: ['Prüfer', 'Prüferin'] },
    checks: ['Рассказ шёл около минуты, без долгих пауз', 'Назвал(а) большинство пунктов: имя, откуда, где живу, семья, работа, языки', 'На каждый вопрос ответил(а) двумя-тремя предложениями, а не одним словом',
      'Были связки: weil, deshalb, aber, und dann', 'Прошедшее время без запинки: ich bin gekommen, ich habe gearbeitet'],
  },
  t2: {
    title: 'Teil 2 · Über Erfahrungen sprechen', short: 'Teil 2', time: 'около 3 минут: описание и свой опыт',
    instr: 'Sehen Sie sich das Bild an. Erzählen Sie: Was sehen Sie? Was für eine Situation zeigt das Bild? Danach sprechen Sie über Ihre eigenen Erfahrungen.',
    ru: 'Опишите картинку и ситуацию, затем расскажите о своём опыте и сравните со своей страной. Сначала опишите, что видно, потом скажите, что это за ситуация.',
    who: { f: 'Kandidatin', m: 'Kandidat', x: ['Prüfer', 'Prüferin'] },
    checks: ['Сказал(а), кто на картинке, где они и что делают', 'Было предположение: ich glaube, vielleicht, wahrscheinlich', 'Рассказал(а) о своём опыте — с примером из жизни',
      'Сравнил(а) со своей страной: bei uns …, in meiner Heimat …', 'Говорил(а) полторы-две минуты без долгих пауз'],
  },
  t3: {
    title: 'Teil 3 · Gemeinsam etwas planen', short: 'Teil 3', time: 'около 6 минут на двоих',
    instr: 'Planen Sie gemeinsam mit Ihrer Partnerin oder Ihrem Partner. Sprechen Sie über die Punkte auf dem Blatt, machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Partners.',
    ru: 'Это диалог: предлагайте, спрашивайте мнение, соглашайтесь или возражайте и в конце договоритесь. Без партнёра говорите свою половину: предложение по каждому пункту и вопрос собеседнику.',
    checks: ['Прошёл(ла) по всем пунктам задания', 'Предлагал(а): wir könnten …, ich schlage vor, dass …, wie wäre es, wenn …', 'Спрашивал(а) мнение партнёра: was meinst du? hast du Zeit?',
      'Соглашался(ась) или возражал(а) с причиной: gute Idee; das finde ich nicht so gut, weil …', 'В конце назвал(а), о чём договорились: also, wir machen es so …'],
  },
};
const ORDER = ['t1', 't2', 't3'];

function taskHtml(set, part) {
  const t = set[part];
  if (part === 't1') return `<div class="board sp-card"><h3>Stichwörter</h3><p>${KEYWORDS.join(' · ')}</p></div>
<p class="sp-q"><b>Fragen der Prüferin / des Prüfers:</b></p><ul class="sp-list">${t.ask.map(q => `<li>${q}</li>`).join('')}</ul>`;
  if (part === 't2') return `<div class="img sp-scene">${t.img ? `<img src="assets/sprechen/${t.img}" alt="Bild zur Aufgabe" width="900" height="600">` : scene(t.scene)}</div>
<p class="sp-q"><b>${t.topic}</b></p><ul class="sp-list"><li>Was sehen Sie auf dem Bild?</li><li>Was für eine Situation zeigt das Bild?</li></ul>
<p class="sp-q"><b>Ihre Erfahrungen:</b></p><ul class="sp-list">${t.ask.map(q => `<li>${q}</li>`).join('')}</ul>`;
  return `<div class="board sp-card"><h3>${t.title}</h3><p>${t.task}</p><p>${t.points.map(p => `– ${p}`).join('<br>')}<br>– …</p></div>`;
}
// То же задание простым текстом — для запроса к ИИ
export function taskText(set, part) {
  const t = set[part];
  if (part === 't1') return `Teil 1 «Sich vorstellen». Stichwörter: ${KEYWORDS.join(', ')}. Nachfragen des Prüfers: ${t.ask.join(' ')}`;
  if (part === 't2') return `Teil 2 «Über Erfahrungen sprechen». ${t.topic}. Auf dem Bild: ${t.pic} Aufgaben: Was sehen Sie auf dem Bild? Was für eine Situation zeigt das Bild? Fragen zu eigenen Erfahrungen: ${t.ask.join(' ')}`;
  return `Teil 3 «Gemeinsam etwas planen». Situation: ${t.task} Punkte: ${t.points.join(' ')}`;
}

function names(set, part) {
  const t = set[part], codes = [...new Set(t.sample.map(l => l[0]))];
  if (t.who) return t.who;
  const w = PARTS[part].who; // в Teil 1–2 первым говорит кандидат, второй голос — экзаменатор
  return Object.fromEntries(codes.map((c, i) => [c, i ? w.x[c[0] === 'm' ? 0 : 1] : w[c[0]]]));
}
export function sampleHtml(set, part) {
  const who = names(set, part), key = 'sp.' + part;
  return `<div class="hear"><button class="play" data-play="${key}">▶ Прослушать</button><span class="now" lang="ru"></span></div>
<div class="tx script">${set[part].sample.map(([c, t]) => `<p><b class="sp">${who[c]}:</b> ${t}</p>`).join('')}</div>`;
}

const count = (st, part) => PARTS[part].checks.filter((_, i) => st.chk?.[`${part}.${i}`]).length;
export const countText = (st, part) => `отмечено ${count(st, part)} из ${PARTS[part].checks.length}`;

function practiceHtml(set, part, st, ctx) {
  const P = PARTS[part], txt = st.txt?.[part] || '', esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
  let h = `<div class="tbox sp" lang="ru" data-part="${part}">`;
  h += `<p class="sp-h"><b>1. Скажите вслух.</b> Ориентир — ${P.time}.</p>`;
  h += V.canRecord ? `<p><button data-sp="rec">● Записать себя</button><span class="sp-time"></span></p><p class="sp-audio"${ctx.blob(set.id, part) ? '' : ' hidden'}><audio controls${ctx.blob(set.id, part) ? ` src="${ctx.blob(set.id, part)}"` : ''}></audio></p>`
    : '<p class="muted">Запись в этом браузере недоступна — говорите вслух и засеките время.</p>';
  h += `<p class="sp-h"><b>2. Самопроверка.</b> Послушайте запись и отметьте, что получилось: <span class="sp-n">${countText(st, part)}</span></p><div class="chks">`;
  h += P.checks.map((c, i) => `<button class="chk${st.chk?.[`${part}.${i}`] ? ' on' : ''}" data-chk="${part}.${i}"><i>✓</i><span>${c}</span></button>`).join('') + '</div>';
  h += '<p class="sp-h"><b>3. Разбор от ИИ.</b> Продиктуйте ответ ещё раз — он превратится в текст — или напечатайте его.</p>';
  h += `<p>${V.canDictate ? '<button data-sp="dict">● Продиктовать</button>' : ''}<button class="primary" data-sp="ai">Разобрать ответ</button></p>`;
  h += `<textarea class="sp-text" rows="5" lang="de" spellcheck="false" placeholder="Ihre Antwort auf Deutsch">${esc(txt)}</textarea>`;
  h += `<p class="muted">${V.canDictate ? 'Распознаванию нужен интернет; звук при этом обрабатывает сервис браузера. ' : 'Распознавание речи в этом браузере недоступно — текст можно напечатать. '}${ctx.hasKey() ? 'ИИ видит только текст: произношение и интонацию он не оценивает.' : 'Для разбора нужен ключ ИИ — он задаётся в настройках приложения.'}</p>`;
  h += `<div class="sp-ai ai">${st.ai?.[part] ? ctx.md(st.ai[part]) : ''}</div>`;
  h += '<p class="sp-h"><b>4. Образец ответа.</b> Сначала ответьте сами, потом сравните.</p>';
  h += `<div class="sp-sample">${st.show?.[part] ? sampleHtml(set, part) : '<p><button data-sp="sample">Показать образец</button></p>'}</div>`;
  return h + '</div>';
}

function partHtml(set, part, st, ctx) {
  const P = PARTS[part];
  return `<h2>${P.title}</h2><p class="instr">${P.instr}<span lang="ru">${P.ru}</span></p>${taskHtml(set, part)}${practiceHtml(set, part, st, ctx)}`;
}

function startHtml(set, st, ctx) {
  let h = `<h2>${set.title}</h2><p class="tinfo">${set.about}</p><div class="tbox" lang="ru">`;
  h += '<p>В наборе три задания, как на экзамене: рассказ о себе, описание фотографии с разговором о своём опыте и совместное планирование. На экзамене вы сдаёте вдвоём с другим кандидатом, времени на подготовку нет, всё вместе занимает около 16 минут.</p>';
  h += '<p>Правильного ответа здесь нет, поэтому проверка такая: запишите себя и отметьте по списку, что получилось; сравните с образцом; а если в настройках есть ключ ИИ — получите разбор ошибок по тексту ответа.</p>';
  h += `<p>${ORDER.map(p => `${PARTS[p].short}: <b>${countText(st, p).replace('отмечено ', '')}</b>${st.ai?.[p] ? ' · есть разбор' : ''}`).join(' &nbsp;·&nbsp; ')}</p>`;
  if (Object.keys(st.chk || {}).length || Object.keys(st.txt || {}).length) h += '<p><button data-t="reset">Начать набор заново</button></p>';
  return h + '<p class="muted">Листайте дальше — к первому заданию.</p></div>' + ctx.speechBox();
}

// Запрос к ИИ: ответ распознан из речи, поэтому пунктуацию не оцениваем
export const AI_SYSTEM = level => `Ты — экзаменатор и преподаватель немецкого языка. Ты готовишь русскоязычного ученика (сейчас уровень ${level}) к устной части экзамена DTZ (Deutsch-Test für Zuwanderer, A2–B1). \
Ученик прислал свой устный ответ, превращённый в текст распознаванием речи: знаки препинания, заглавные буквы и орфографию не оценивай, а явные ошибки распознавания (слово не к месту, похожее по звучанию) не считай ошибками ученика. \
Отвечай по-русски, коротко и по делу, без вступлений и прощаний. Немецкие слова и примеры выделяй **жирным**. Используй короткие абзацы и маркированные списки, без таблиц.`;
export function aiPrompt(set, part, text) {
  const extra = part === 't3' ? '\nЭто задание на экзамене — диалог двух кандидатов. Ученик тренируется один и говорит только свою половину: предложения по пунктам и вопросы партнёру. Оцени, умеет ли он предлагать, спрашивать мнение, аргументировать и подводить итог; отсутствие реплик партнёра ошибкой не считай.' : '';
  return `Задание экзамена: ${taskText(set, part)}${extra}

Ответ ученика (распознанная речь):
«${text}»

Разбери ответ в таком порядке:
- **Задание:** что из задания раскрыто, а что пропущено; хватает ли объёма.
- **Ошибки:** до шести самых важных — грамматика и выбор слов; для каждой: как сказано → как правильно и одно короткое объяснение.
- **Исправленный ответ:** тот же ответ целиком по-немецки, без ошибок, не усложняя его сверх уровня B1.
- **Уровень:** ближе к A2 или к B1 и почему (связность, длина предложений, придаточные, словарь).
- **Что добавить до B1:** две-три готовые немецкие фразы именно для этого ответа.`;
}

// ---------- Тренажёр фраз: русская подсказка → сказать по-немецки → распознавание сверяет с образцом.
// В состоянии (st.dr) хранится, сколько раз подряд фраза сказана верно: ключ «блок.номер», две удачи — фраза выучена.
export { DRILLS };
const LEARNED = 2;
const drill = id => DRILLS.find(d => d.id === id);
const cur = {}; // что сейчас на карточке каждого блока: { i, shown, heard, score, marks }
const cnt = (st, id, i) => st.dr?.[`${id}.${i}`] || 0;
// следующая фраза: из тех, что сказаны верно меньше всего раз, ближайшая после текущей
function pickNext(id, st, from) {
  const n = drill(id).items.length, min = Math.min(...drill(id).items.map((_, i) => cnt(st, id, i)));
  for (let k = 1; k <= n; k++) { const i = (from + k) % n; if (cnt(st, id, i) === min && (i !== from || n === 1)) return i; }
  return (from + 1) % n;
}
const state = (id, st) => cur[id] ||= { i: pickNext(id, st, -1) };
export const drillNow = (id, st) => drill(id).items[state(id, st).i][0];

// Распознавание пишет числа цифрами и путает das/dass — это не ошибки говорящего
const NUM = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf'];
const words = s => s.toLowerCase().replace(/ß/g, 'ss').replace(/[^a-zäöü0-9\s]/gi, ' ').split(/\s+/).filter(Boolean).map(w => NUM[w] || (w === 'dass' ? 'das' : w));
// Сколько слов образца прозвучало в правильном порядке (наибольшая общая подпоследовательность) и какие именно
export function compare(target, heard) {
  const a = words(target), b = words(heard), L = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const marks = []; let i = 0, j = 0;
  while (i < a.length) {
    if (j < b.length && a[i] === b[j]) { marks.push(true); i++; j++; }
    else if (j < b.length && L[i][j + 1] >= L[i + 1][j]) j++;
    else { marks.push(false); i++; }
  }
  // в длинной фразе (от девяти слов) прощается одно нераспознанное слово, в короткой — ни одного
  const miss = a.length - L[0][0];
  return { score: a.length ? L[0][0] / a.length : 0, marks, ok: a.length > 0 && miss <= (a.length >= 9 ? 1 : 0) };
}
// Ответ голосом: сверить и запомнить результат
export function drillAnswer(id, st, heard) {
  const c = state(id, st), k = `${id}.${c.i}`, r = compare(drill(id).items[c.i][0], heard);
  Object.assign(c, { heard, score: r.score, ok: r.ok, marks: r.marks, shown: true });
  st.dr ||= {};
  if (r.ok) st.dr[k] = cnt(st, id, c.i) + 1; else if (heard) delete st.dr[k];
}
// Кнопки карточки: show — открыть ответ, ok / no — самооценка, next — дальше, again — ещё раз ту же
export function drillAct(id, st, act) {
  const c = state(id, st), k = `${id}.${c.i}`;
  st.dr ||= {};
  if (act === 'show') { c.shown = true; return; }
  if (act === 'again') { cur[id] = { i: c.i }; return; }
  if (act === 'ok') st.dr[k] = cnt(st, id, c.i) + 1;
  if (act === 'no') delete st.dr[k];
  if (act === 'restart') for (const key of Object.keys(st.dr)) if (key.startsWith(id + '.')) delete st.dr[key];
  cur[id] = { i: pickNext(id, st, act === 'restart' ? -1 : c.i) };
}
export function drillCard(id, st) {
  const d = drill(id), c = state(id, st), [de, ru] = d.items[c.i], learned = d.items.filter((_, i) => cnt(st, id, i) >= LEARNED).length;
  const answered = c.score != null, pass = answered && c.ok, tw = de.split(/\s+/);
  let h = `<div class="tbox drill" lang="ru" data-drill="${id}"><p class="dr-n">Фраза ${c.i + 1} из ${d.items.length} · выучено: <b>${learned}</b> из ${d.items.length}${learned === d.items.length ? ' — блок выучен' : ''}</p>`;
  h += `<p class="dr-ru">${ru}</p>`;
  if (c.shown) h += `<p class="dr-de" lang="de">${answered && c.heard ? tw.map((w, i) => `<span class="${c.marks[i] ? 'hit' : 'miss'}">${w}</span>`).join(' ') : de}</p>`;
  if (answered) h += !c.heard ? '<p class="dr-res bad">Ничего не распознано — скажите громче и ближе к микрофону.</p>'
    : `<p class="dr-res ${pass ? 'good' : 'bad'}">${pass ? 'Верно.' : 'Пока не совпало: красным — слова, которых не было слышно.'} <span class="muted">Распознано: «${c.heard.replace(/[<>&]/g, '')}»</span></p>`;
  const say = V.canDictate ? `<button data-dr="say"${answered && pass ? '' : ' class="primary"'}>● ${answered ? 'Сказать ещё раз' : 'Сказать по-немецки'}</button>` : '';
  const hear = '<button data-dr="hear">▶ Послушать</button>';
  h += '<p class="dr-btns">';
  if (answered) h += (pass ? '<button data-dr="next" class="primary">Дальше →</button>' + say : say + '<button data-dr="next">Дальше →</button>') + hear;
  else if (c.shown) h += '<button data-dr="ok" class="primary">Знаю</button><button data-dr="no">Не знаю</button>' + say + hear;
  else h += say + `<button data-dr="show"${V.canDictate ? '' : ' class="primary"'}>Показать ответ</button>` + hear;
  h += '</p>';
  if (!V.canDictate) h += '<p class="muted">Распознавание речи в этом браузере недоступно: скажите фразу вслух, откройте ответ и отметьте сами, знаете ли вы её.</p>';
  if (learned) h += '<p><button data-dr="restart">Начать блок заново</button></p>';
  return h + '</div>';
}
function drillHtml(d, st) {
  return `<h2>${d.title}</h2><p lang="ru" class="ru">${d.ru} Прочитайте подсказку по-русски, нажмите «Сказать по-немецки» и произнесите фразу целиком. Распознавание сверит её с образцом. Фраза считается выученной, когда сказана верно два раза подряд; ошибка обнуляет счёт. Распознаванию нужен интернет.</p>${drillCard(d.id, st)}
<details class="dr-all"><summary lang="ru">Все фразы блока</summary>${d.items.map(([de, ru]) => `<p class="rm"><b>${de}</b><span lang="ru">${ru}</span></p>`).join('')}</details>`;
}

// ctx: { st(id), md(text), hasKey(), blob(id, part), speechBox() }
export function build(ctx) {
  const chapters = [], toc = [];
  REDEMITTEL.forEach(r => {
    toc.push({ title: r.title, depth: 0, ch: chapters.length });
    chapters.push({ vid: 'sp00', kind: 'info', title: r.title, len: 900, html: r.html });
  });
  toc.push({ title: 'Phrasentrainer', depth: 0, ch: chapters.length });
  for (const d of DRILLS) {
    toc.push({ title: d.title, depth: 1, ch: chapters.length });
    chapters.push({ vid: 'sp00', kind: 'drill', title: `Phrasentrainer · ${d.title}`, len: 400, render: () => drillHtml(d, ctx.st('sp00')) });
  }
  for (const set of SETS) {
    const st = () => ctx.st(set.id);
    toc.push({ title: set.title, depth: 0, ch: chapters.length });
    chapters.push({ vid: set.id, kind: 'start', title: set.title, len: 300, render: () => startHtml(set, st(), ctx) });
    for (const part of ORDER) {
      toc.push({ title: PARTS[part].title, depth: 1, ch: chapters.length });
      chapters.push({ vid: set.id, kind: 'part', part, title: `${set.title} · ${PARTS[part].short}`, len: 900, render: () => partHtml(set, part, st(), ctx) });
    }
  }
  return { chapters, toc };
}
