// Приложение «Sprechen B1»: тренировка устной части DTZ. Здесь разметка экранов (показывает их sprechen/app.js):
// главный экран, тренажёр фраз (js/trainer.js), задания по наборам, прогон экзамена, справочник фраз и настройки.
// Ключа с ответами здесь нет, поэтому проверка другая: запись и самопроверка по списку, образец ответа, а при наличии ключа ИИ — разбор текста.
// Каждая функция …View возвращает { title, body, bar, pos }: заголовок, середину экрана, нижние кнопки и надпись справа в шапке.
import { SETS, REDEMITTEL } from './sprechen/index.js';
import { scene } from './sprechen/scenes.js';
import * as TR from './trainer.js';
import * as V from './voicein.js';

export { SETS };
export const setOf = id => SETS.find(s => s.id === id);
export const audioOf = (set, key) => set?.[key.split('.')[1]]?.sample; // ключ кнопки «Прослушать»: sp.t1 / sp.t2 / sp.t3
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const clock = sec => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;

const PHOTOS = new URL('../assets/sprechen/', import.meta.url).href; // адрес считается от этого файла, а не от страницы приложения
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
export const ORDER = ['t1', 't2', 't3'];

function taskHtml(set, part, exam = false) {
  const t = set[part];
  if (part === 't1') return `<div class="sx-board" lang="de"><h3>Stichwörter</h3><p>${KEYWORDS.join(' · ')}</p></div>${exam ? '' : `
<p class="sx-q" lang="de"><b>Fragen der Prüferin / des Prüfers:</b></p><ul class="sx-list" lang="de">${t.ask.map(q => `<li>${q}</li>`).join('')}</ul>`}`;
  if (part === 't2') return `<div class="sx-photo">${t.img ? `<img src="${PHOTOS}${t.img}" alt="Bild zur Aufgabe" width="900" height="600">` : scene(t.scene)}</div>
<p class="sx-q" lang="de"><b>${t.topic}</b></p>${exam ? '' : `<ul class="sx-list" lang="de"><li>Was sehen Sie auf dem Bild?</li><li>Was für eine Situation zeigt das Bild?</li></ul>
<p class="sx-q" lang="de"><b>Ihre Erfahrungen:</b></p><ul class="sx-list" lang="de">${t.ask.map(q => `<li>${q}</li>`).join('')}</ul>`}`;
  return `<div class="sx-board" lang="de"><h3>${t.title}</h3><p>${t.task}</p><p>${t.points.map(p => `– ${p}`).join('<br>')}<br>– …</p></div>`;
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
  const who = names(set, part);
  return `<p class="sx-play"><button data-sp="play">▶ Прослушать</button><span class="sx-now"></span></p>
<div class="sx-script" lang="de">${set[part].sample.map(([c, t]) => `<p><b>${who[c]}:</b> ${t}</p>`).join('')}</div>`;
}

const count = (st, part) => PARTS[part].checks.filter((_, i) => st.chk?.[`${part}.${i}`]).length;
export const countText = (st, part) => `отмечено ${count(st, part)} из ${PARTS[part].checks.length}`;
// задание считается сделанным, когда по нему есть самопроверка, текст ответа или разбор
export const taskDone = (st, part) => !!(count(st, part) || st.txt?.[part] || st.ai?.[part]);
const doneTotal = ctx => SETS.reduce((n, s) => n + ORDER.filter(p => taskDone(ctx.st(s.id), p)).length, 0);
const dateRu = t => new Date(t).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });

// ---------- главный экран раздела
// ctx: { st(id), day, md(text), hasKey(), blob(id, part), speechBox() }
export function hubView(ctx) {
  const st0 = ctx.st('sp00'), S = TR.stats(st0, ctx.day), P = TR.plan(st0, ctx.day), done = doneTotal(ctx), all = SETS.length * ORDER.length;
  const exams = SETS.filter(s => ctx.st(s.id).exam).length;
  const item = (act, title, ru, state, pct) => `<button class="tr-block" ${act}><b lang="de">${title}</b><span>${ru}</span><span class="tr-st">${state}</span>${pct == null ? '' : `<i class="prog"><i style="width:${pct}%"></i></i>`}</button>`;
  let h = '<div class="tr-blocks">';
  h += item('data-sx="go" data-scr="home"', 'Phrasentrainer', 'Готовые фразы голосом: ступени запоминания и повторение по дням.', `${P.keys.length ? `сегодня ${P.keys.length}` : 'на сегодня всё'} · пройдено ${S.known} из ${S.total}`, Math.round(100 * S.known / S.total));
  h += item('data-sx="go" data-scr="sets"', 'Aufgaben', 'Восемь наборов по три задания: рассказ о себе, фотография, совместное планирование. Запись, самопроверка, разбор ИИ, образец.', `сделано ${done} из ${all}`, Math.round(100 * done / all));
  h += item('data-sx="go" data-scr="exsel"', 'Prüfung', 'Три части подряд, как на экзамене: вопросы задаёт голос, идёт время, ответы превращаются в текст.', exams ? `пройдено наборов: ${exams} из ${SETS.length}` : 'ещё не проходили');
  h += item('data-sx="go" data-scr="ref"', 'Redemittel und Ablauf', 'Как проходит экзамен и готовые фразы для каждой части.', 'справочник');
  h += item('data-sx="go" data-scr="voice"', 'Einstellungen', 'Голос и скорость речи, проверка звука, ключ ИИ для разбора ответов.', ctx.hasKey() ? 'ключ ИИ задан' : 'ключ ИИ не задан');
  h += '</div><p class="sx-foot"><a href="../">Bücherleser — книги, Lesen и Hören</a></p>';
  const bar = P.keys.length ? `<button class="primary wide" data-sx="go" data-scr="home">Фразы на сегодня · ${P.keys.length}</button>` : '';
  return { title: 'Sprechen B1', body: h, bar, pos: '' };
}

export function setsView(ctx) {
  let h = '<p class="muted">В наборе три задания, как на экзамене. Правильного ответа нет, поэтому проверка такая: запишите себя и отметьте по списку, что получилось; сравните с образцом; а с ключом ИИ — получите разбор ошибок.</p>';
  for (const set of SETS) {
    const st = ctx.st(set.id);
    h += `<div class="sx-set"><p class="sx-set-t"><b lang="de">${set.title}</b><span lang="de">${esc(set.about)}</span></p><p class="sx-parts">`;
    h += ORDER.map(p => `<button data-sx="task" data-set="${set.id}" data-part="${p}"${taskDone(st, p) ? ' class="done"' : ''}>${taskDone(st, p) ? '✓ ' : ''}${PARTS[p].short}</button>`).join('') + '</p></div>';
  }
  return { title: 'Aufgaben', body: h, bar: '', pos: '' };
}

// ---------- экран задания: задание сверху, под ним запись, самопроверка, текст с разбором и образец; кнопки микрофона — в нижней полосе
export function taskView(set, part, ctx) {
  const P = PARTS[part], st = ctx.st(set.id), url = ctx.blob(set.id, part), i = ORDER.indexOf(part);
  let h = `<p class="sx-instr" lang="de">${P.instr}<span lang="ru">${P.ru}</span></p>${taskHtml(set, part)}<div class="sp" data-set="${set.id}" data-part="${part}">`;
  h += `<h2>1 · Запись</h2><p class="muted">Скажите ответ вслух. Ориентир — ${P.time}.${V.canRecord ? ' Потом послушайте себя.' : ' Запись в этом браузере недоступна — засеките время.'}</p>`;
  if (V.canRecord) h += `<p class="sp-audio${url ? ' has' : ''}"><audio controls${url ? ` src="${url}"` : ''}></audio></p>`;
  h += `<h2>2 · Самопроверка <span class="sp-n">${countText(st, part)}</span></h2><div class="chks">`;
  h += P.checks.map((c, k) => `<button class="chk${st.chk?.[`${part}.${k}`] ? ' on' : ''}" data-chk="${part}.${k}"><i>✓</i><span>${c}</span></button>`).join('') + '</div>';
  h += `<h2>3 · Текст ответа и разбор</h2><textarea class="sp-text" rows="5" lang="de" spellcheck="false" placeholder="Ihre Antwort auf Deutsch — продиктуйте или напечатайте">${esc(st.txt?.[part] || '')}</textarea>`;
  h += `<p class="muted">${V.canDictate ? 'Распознаванию нужен интернет; звук при этом обрабатывает сервис браузера. ' : 'Распознавание речи в этом браузере недоступно — текст можно напечатать. '}${ctx.hasKey() ? 'ИИ видит только текст: произношение и интонацию он не оценивает.' : 'Для разбора нужен ключ ИИ — он задаётся в настройках приложения.'}</p>`;
  h += `<div class="sp-ai ai">${st.ai?.[part] ? ctx.md(st.ai[part]) : ''}</div>`;
  h += `<h2>4 · Образец</h2><div class="sp-sample">${st.show?.[part] ? sampleHtml(set, part) : '<p class="muted">Сначала ответьте сами, потом сравните.</p><p><button data-sp="sample">Показать образец</button></p>'}</div></div>`;
  const go = k => `<button data-sx="task" data-set="${set.id}" data-part="${ORDER[k]}">${k < i ? '← ' : ''}${PARTS[ORDER[k]].short}${k > i ? ' →' : ''}</button>`;
  h += `<p class="btns sx-nav">${i > 0 ? go(i - 1) : ''}${i < ORDER.length - 1 ? go(i + 1) : ''}${Object.keys(st.chk || {}).length || Object.keys(st.txt || {}).length ? '<button data-sx="reset">Начать набор заново</button>' : ''}</p>`;
  const rec = V.canRecord ? '<button data-sp="rec" class="primary wide">● Записать ответ</button>' : '';
  const bar = rec + (V.canDictate ? `<button data-sp="dict"${rec ? '' : ' class="primary wide"'}>● Продиктовать</button>` : '') + '<button data-sp="ai">Разбор ИИ</button>';
  return { title: `${set.title} · ${P.short}`, body: h, bar, pos: '' };
}

// ---------- Prüfung: три части подряд. Вопросы задаёт голос, ответ слушает распознавание; в конце тексты ответов ложатся в задания набора.
const INTRO = {
  t1: 'Wir beginnen mit Teil eins. Stellen Sie sich bitte vor. Erzählen Sie etwas über sich.',
  t2: 'Jetzt kommt Teil zwei. Sehen Sie sich bitte das Bild an. Was sehen Sie auf dem Bild? Was für eine Situation zeigt das Bild?',
  t3: 'Jetzt kommt Teil drei. Planen Sie bitte gemeinsam. Lesen Sie die Aufgabe und machen Sie Vorschläge zu allen Punkten.',
};
// шаги прогона: [часть, реплика экзаменатора]
export const examSteps = set => [['t1', INTRO.t1], ...set.t1.ask.map(q => ['t1', q]), ['t2', INTRO.t2], ...set.t2.ask.map(q => ['t2', q]), ['t3', INTRO.t3]];
export function exselView(ctx) {
  let h = `<p class="muted">Прогон как на экзамене: три части подряд, без подготовки и без образца перед глазами. Вопрос задаёт голос, вы отвечаете и нажимаете «Weiter». ${V.canDictate ? 'Ответы распознаются и после прогона попадают в задания набора — там их можно разобрать с ИИ.' : 'Распознавание речи в этом браузере недоступно: прогон идёт по времени, без текста ответов.'} На экзамене устная часть длится около 16 минут на двоих; одному хватит 8–10 минут.</p><div class="tr-blocks">`;
  for (const set of SETS) {
    const e = ctx.st(set.id).exam;
    h += `<button class="tr-block" data-sx="exam" data-set="${set.id}"><b lang="de">${set.title}</b><span lang="de">${esc(set.about)}</span><span class="tr-st">${e ? `пройден ${dateRu(e.at)} · ${clock(e.sec)}` : 'ещё не проходили'}</span></button>`;
  }
  return { title: 'Prüfung', body: h + '</div>', bar: '', pos: '' };
}
// ex: { i: номер шага, phase: 'ask' | 'answer', live, sec }
export function examView(set, ex) {
  const steps = examSteps(set), [part, say] = steps[ex.i], last = ex.i === steps.length - 1;
  let h = `<p class="tr-step"><span class="tr-dots">${steps.map((_, k) => `<i class="${k < ex.i ? 'done' : k === ex.i ? 'on' : ''}"></i>`).join('')}</span><span>${PARTS[part].title}</span></p>`;
  h += `<p class="tr-q" lang="de"><b>Prüferin:</b> ${esc(say)}</p>${taskHtml(set, part, true)}`;
  h += `<p class="tr-hint">${ex.phase === 'ask' ? 'Слушайте вопрос…' : `Говорите. Закончили — нажмите «${last ? 'Закончить' : 'Weiter'}».`}</p>`;
  if (V.canDictate) h += `<p class="tr-heard live"><i>Ваш ответ</i><span class="tr-live">${esc(ex.live || '…')}</span></p>`;
  const bar = `<button data-sx="exnext" class="primary wide">${last ? 'Закончить' : 'Weiter →'}</button><button data-sx="exsay">▶ Вопрос ещё раз</button>`;
  return { title: `Prüfung · ${set.title}`, body: `<div class="tr-card sx-exam">${h}</div>`, bar, pos: clock(ex.sec || 0) };
}
export function exdoneView(set, ctx) {
  const st = ctx.st(set.id), words = p => (st.txt?.[p] || '').split(/\s+/).filter(Boolean).length;
  let h = `<div class="tr-sum tr-end"><p class="tr-big">Прогон окончен</p><p>${set.title} · время ${clock(st.exam?.sec || 0)}</p><p class="muted">На экзамене один кандидат говорит около 8 минут из шестнадцати.</p></div>`;
  h += '<h2>Что дальше</h2><p class="muted">Откройте каждую часть: текст ответа уже там. Отметьте самопроверку, получите разбор ИИ и сравните с образцом.</p><div class="tr-blocks">';
  for (const p of ORDER) h += `<button class="tr-block" data-sx="task" data-set="${set.id}" data-part="${p}"><b lang="de">${PARTS[p].title}</b><span class="tr-st">${V.canDictate ? `распознано слов: ${words(p)}` : 'текст можно напечатать'}</span></button>`;
  return { title: `Prüfung · ${set.title}`, body: h + '</div>', bar: '<button class="primary wide" data-sx="hub">К разделу</button>', pos: '' };
}

export const refView = () => ({ title: 'Redemittel', body: `<div class="sx-ref" lang="de">${REDEMITTEL.map(r => r.html).join('')}</div>`, bar: '', pos: '' });
// ctx.set: { key, level } — ключ и уровень общие с Bücherleser
export function voiceView(ctx) {
  const set = ctx.set();
  let h = `<div class="sx-voice">${ctx.speechBox()}</div><h2>Разбор ответов ИИ</h2><div class="tr-form">`;
  h += `<label>Ключ Google Gemini (бесплатный) или Claude<input data-set="key" type="password" autocomplete="off" placeholder="AIza…" value="${esc(set.key)}"></label>`;
  h += `<label>Ваш уровень немецкого<select data-set="level">${['A1', 'A2', 'B1', 'B2', 'C1'].map(l => `<option${l === set.level ? ' selected' : ''}>${l}</option>`).join('')}</select></label></div>`;
  h += '<p class="muted">Ключ хранится только на этом устройстве и общий с Bücherleser: если он задан там, здесь он уже есть. Бесплатный ключ: aistudio.google.com/app/apikey → «Create API key». Прогресс тоже общий — в другие устройства он уходит через синхронизацию Bücherleser.</p>';
  return { title: 'Einstellungen', body: h, bar: '', pos: '' };
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
- **Задание:** одним-двумя предложениями: что из задания раскрыто, что пропущено, хватает ли объёма.
- **Ошибки:** до пяти самых важных — грамматика и выбор слов; для каждой одна строка: как сказано → как правильно, и объяснение в пять-десять слов.
- **Исправленный ответ:** тот же ответ целиком по-немецки, без ошибок, не усложняя его сверх уровня B1.
- **Уровень:** одним предложением — ближе к A2 или к B1 и почему.
- **Что добавить до B1:** две-три готовые немецкие фразы именно для этого ответа.`;
}
