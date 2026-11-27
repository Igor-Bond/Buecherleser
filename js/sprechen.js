// Книга «Sprechen B1»: тренировка устной части DTZ. Ключа с ответами здесь нет, поэтому проверка другая:
// запись и самопроверка по списку, образец ответа, а при наличии ключа ИИ — разбор распознанного текста.
import { SETS, REDEMITTEL } from './sprechen/index.js';
import { scene } from './sprechen/scenes.js';
import { bookPage, today } from './trainer.js';
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
  h += V.canRecord ? `<p><button data-sp="rec">● Записать себя</button><span class="sp-time"></span></p><p class="sp-audio${ctx.blob(set.id, part) ? ' has' : ''}"><audio controls${ctx.blob(set.id, part) ? ` src="${ctx.blob(set.id, part)}"` : ''}></audio></p>`
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
- **Задание:** одним-двумя предложениями: что из задания раскрыто, что пропущено, хватает ли объёма.
- **Ошибки:** до пяти самых важных — грамматика и выбор слов; для каждой одна строка: как сказано → как правильно, и объяснение в пять-десять слов.
- **Исправленный ответ:** тот же ответ целиком по-немецки, без ошибок, не усложняя его сверх уровня B1.
- **Уровень:** одним предложением — ближе к A2 или к B1 и почему.
- **Что добавить до B1:** две-три готовые немецкие фразы именно для этого ответа.`;
}

// ctx: { st(id), md(text), hasKey(), blob(id, part), speechBox() }
export function build(ctx) {
  const chapters = [], toc = [];
  REDEMITTEL.forEach(r => {
    toc.push({ title: r.title, depth: 0, ch: chapters.length });
    chapters.push({ vid: 'sp00', kind: 'info', title: r.title, len: 900, html: r.html });
  });
  // Тренажёр фраз живёт на отдельном экране (см. js/trainer.js): в книге только вход в него
  toc.push({ title: 'Phrasentrainer', depth: 0, ch: chapters.length });
  chapters.push({ vid: 'sp00', kind: 'drill', title: 'Phrasentrainer', len: 400, render: () => bookPage(ctx.st('sp00'), today()) });
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
