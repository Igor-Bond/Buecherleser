// Тренажёр фраз (Phrasentrainer): логика и разметка, без обращения к странице — её ведёт app.js.
// Фраза проходит ступени: повторить за голосом → с пропусками → по памяти → в разговоре. Ошибка возвращает на ступень назад.
// Пройденная фраза приходит на повторение через 1, 3, 7, 14 и 30 дней (ящики b = 1…5); ошибка на повторении сдвигает ящик назад.
// Состояние в st (запись sp00): st.tr[«блок.ключ»] = { s: ступень, b: ящик, due: день повторения }, st.me — «Мои данные».
import { DRILLS, PROFILE } from './data/phrases.js';

export { DRILLS, PROFILE };
const IV = [0, 1, 3, 7, 14, 30];
export const NEW_PER = 6, MAX = 20, SOLID = 3;
export const STEPS = {
  rep: ['повторите за голосом', 'Послушайте и повторите фразу целиком.'],
  gap: ['с пропусками', 'Скажите фразу целиком, восстановив пропущенные слова.'],
  ru: ['по памяти', 'Скажите это по-немецки.'],
  talk: ['в разговоре', 'Ответьте собеседнику.'],
};
// номер дня по местному времени: «завтра» наступает в полночь, а не через 24 часа
export const today = (t = Date.now()) => Math.floor((t - new Date(t).getTimezoneOffset() * 60000) / 86400000);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const plural = (n, a, b, c) => (n % 10 === 1 && n % 100 !== 11 ? a : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? b : c);
const phr = n => `${n} ${plural(n, 'фраза', 'фразы', 'фраз')}`;

// ---------- «Мои данные» → куски для подстановки в фразы
const clean = s => String(s ?? '').replace(/[\[\]{}|<>&"]/g, '').replace(/\s+/g, ' ').trim();
const pick = (list, v, def) => (list.some(x => x[0] === v) ? v : def);
export function slots(me) {
  const d = PROFILE.def, m = { ...d, ...(me || {}) };
  const L = PROFILE.lands.find(l => l[0] === m.land), h = PROFILE.hobby[m.hobby] || PROFILE.hobby[d.hobby];
  const own = !L && clean(m.aus); // «другая страна»: человек сам вписал форму после «aus»
  const U = PROFILE.lands[0];
  return {
    land: L ? L[2] : own || U[2], in: L ? L[3] : own ? clean(m.inl) || 'in meiner Heimat' : U[3], ruIn: L ? L[4] : own ? 'на родине' : U[4],
    seit: pick(PROFILE.seit, m.seit, d.seit), mit: pick(PROFILE.mit, m.mit, d.mit), stand: pick(PROFILE.stand, m.stand, d.stand), kinder: pick(PROFILE.kinder, m.kinder, d.kinder),
    stadt: clean(m.stadt) || d.stadt, beruf: clean(m.beruf) || d.beruf, sprache: clean(m.sprache) || d.sprache, weitere: clean(m.weitere) || d.weitere, hv: h[0], hr: h[1],
  };
}
const fill = (s, sl) => s.replace(/\{(\w+)\}/g, (m, k) => sl[k] ?? m);
// «[a|b] c [d |]e» → все сочетания; лишние пробелы убираются, первая буква — заглавная
export function expand(p) {
  const m = p.match(/\[([^\[\]]*)\]/);
  if (!m) { const t = p.replace(/\s+/g, ' ').replace(/\s+([,.?!])/g, '$1').trim(); return [t.charAt(0).toUpperCase() + t.slice(1)]; }
  return m[1].split('|').flatMap(a => expand(p.slice(0, m.index) + a + p.slice(m.index + m[0].length)));
}

export const ALL = DRILLS.flatMap(d => d.items.map(it => ({ key: `${d.id}.${it.k}`, d, it })));
const byKey = new Map(ALL.map(x => [x.key, x]));
// Фраза целиком: подсказка, образец, все принятые формулировки, несколько из них для показа, ступени
export function phrase(key, me) {
  const { d, it } = byKey.get(key), sl = slots(me);
  const de = expand(fill(it.de, sl))[0], pats = (it.ok || []).map(p => expand(fill(p, sl)));
  const accept = [...new Set([de, ...pats.flat()])];
  const norm = s => words(s).join(' '), seen = new Set([norm(de)]), also = [];
  for (const list of pats) { const v = list.find(x => !seen.has(norm(x))); if (v) { seen.add(norm(v)); also.push(v); } }
  return { key, block: d, task: !!it.task, ru: fill(it.ru, sl), de, accept, also: also.slice(0, 4), q: it.q || '', steps: ['rep', 'gap', 'ru', ...(it.q ? ['talk'] : [])] };
}

// ---------- сверка с распознанной речью
// Распознавание пишет числа цифрами и путает das/dass — это не ошибки говорящего
const NUM = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf'];
const words = s => String(s).toLowerCase().replace(/ß/g, 'ss').replace(/nochmal/g, 'noch mal').replace(/[^a-zäöüа-яё0-9\s]/gi, ' ').split(/\s+/).filter(Boolean).map(w => (w !== '1' && NUM[w]) || TWIN[w] || w);
const TWIN = { dass: 'das', gerne: 'gern', alleine: 'allein', einmal: 'mal',eineinhalb: 'anderthalb', selber: 'selbst' };
const same = (a, b) => a === b || (b === '1' && /^ein(e[mnrs]?|s)?$/.test(a)); // «1 Kind» = «ein Kind», «seit 1 Jahr» = «seit einem Jahr»
// Сколько слов образца прозвучало в правильном порядке (наибольшая общая подпоследовательность) и какие именно
export function compare(target, heard) {
  const a = words(target), b = words(heard), L = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) L[i][j] = same(a[i], b[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const marks = []; let i = 0, j = 0;
  while (i < a.length) {
    if (j < b.length && same(a[i], b[j])) { marks.push(true); i++; j++; }
    else if (j < b.length && L[i][j + 1] >= L[i + 1][j]) j++;
    else { marks.push(false); i++; }
  }
  // в длинной фразе (от девяти слов) прощается одно нераспознанное слово, в короткой — ни одного
  const miss = a.length - L[0][0];
  return { score: a.length ? L[0][0] / a.length : 0, marks, ok: a.length > 0 && miss <= (a.length >= 9 ? 1 : 0) };
}
// Лучшая из принятых формулировок: засчитанная, а если такой нет — самая близкая к сказанному
export function judge(p, heard) {
  let best = null;
  for (const text of p.accept) {
    const r = compare(text, heard);
    if (!best || (r.ok && !best.ok) || (r.ok === best.ok && r.score > best.score)) best = { ...r, text };
    if (best.ok && best.score === 1) break;
  }
  return { ...best, heard: heard || '', ok: !!heard && best.ok };
}
// Текст с пропусками: каждое второе слово и все длинные оставляют только первую букву
export function gapText(de) {
  return de.split(/\s+/).map((w, i) => {
    const m = w.match(/^([^\p{L}]*)(\p{L})(\p{L}*)(.*)$/u);
    if (!m || !((i % 2 === 1 && m[3].length >= 1) || m[3].length >= 7)) return esc(w);
    return `${esc(m[1])}${m[2]}<span class="tr-gap">___</span>${esc(m[4])}`;
  }).join(' ');
}

// ---------- расписание
const kindOf = (t, day) => (!t ? 'new' : !t.b ? 'learn' : t.due <= day ? 'due' : 'wait');
export function stats(st, day) {
  const sum = { total: 0, fresh: 0, learn: 0, due: 0, known: 0, solid: 0, tomorrow: 0 };
  const blocks = DRILLS.map(d => {
    const b = { id: d.id, title: d.title, ru: d.ru, mine: !!d.mine, total: d.items.length, fresh: 0, learn: 0, due: 0, known: 0, solid: 0, tomorrow: 0 };
    for (const it of d.items) {
      const t = st.tr?.[`${d.id}.${it.k}`], k = kindOf(t, day);
      if (k === 'new') b.fresh++; else if (k === 'learn') b.learn++; else { b.known++; if (k === 'due') b.due++; else if (t.due === day + 1) b.tomorrow++; if (t.b >= SOLID) b.solid++; }
    }
    for (const k of Object.keys(sum)) sum[k] += b[k];
    return b;
  });
  return { ...sum, blocks };
}
// Что войдёт в заход: всё к повторению и начатое, плюс до шести новых фраз из одного блока
export function plan(st, day, blockId) {
  const pool = ALL.filter(x => !blockId || x.d.id === blockId), of = k => pool.filter(x => kindOf(st.tr?.[x.key], day) === k);
  const due = of('due').sort((a, b) => st.tr[a.key].due - st.tr[b.key].due), old = [...due, ...of('learn')].slice(0, MAX);
  const fresh = of('new'), first = fresh[0]?.d.id, add = fresh.filter(x => x.d.id === first).slice(0, NEW_PER);
  return { due: due.length, old: old.length, fresh: add.length, keys: [...old, ...add].map(x => x.key), rev: due.map(x => x.key) };
}
export function startSession(st, day, blockId) {
  const s = newSession(st, day, blockId);
  if (s) s.steps0 = stepsLeft(s, st);
  return s;
}
function newSession(st, day, blockId) {
  const p = plan(st, day, blockId);
  if (p.keys.length) return { queue: p.keys, total: p.keys.length, done: 0, errs: 0, free: false, rev: new Set(p.rev), bad: new Set(), day, block: blockId || '' };
  // в блоке на сегодня ничего нет — свободное повторение уже пройденных фраз, расписание не меняется
  const keys = ALL.filter(x => (!blockId || x.d.id === blockId) && st.tr?.[x.key]?.b).map(x => x.key);
  return keys.length ? { queue: keys, total: keys.length, done: 0, errs: 0, free: true, rev: new Set(), bad: new Set(), day, block: blockId || '' } : null;
}
// сколько ответов осталось до конца захода, если дальше без ошибок
export const stepsLeft = (sess, st) => sess.queue.reduce((n, key) => n + (sess.free ? 1 : phrase(key).steps.length - Math.min(st?.tr?.[key]?.s || 0, phrase(key).steps.length - 1)), 0);
export function current(sess, st, me) {
  const key = sess.queue[0];
  if (!key) return null;
  const p = phrase(key, me), last = p.steps.length - 1;
  const s = sess.free ? last : Math.min(st.tr?.[key]?.s || 0, last);
  return { p, s, step: p.steps[s], isNew: !st.tr?.[key] };
}
// Ответ на карточку: верно — ступень вверх (на последней — в расписание), неверно — ступень вниз и скорый повтор
export function answer(sess, st, ok) {
  const key = sess.queue.shift(), last = phrase(key).steps.length - 1;
  const back = n => sess.queue.splice(Math.min(n, sess.queue.length), 0, key);
  if (sess.free) { if (ok) sess.done++; else { sess.errs++; back(2); } return; }
  const t = (st.tr ||= {})[key] ||= { s: 0, b: 0 };
  t.s = Math.min(t.s, last);
  if (ok) {
    if (t.s < last) { t.s++; back(3); return; }
    t.b = sess.rev.has(key) && !sess.bad.has(key) ? Math.min(IV.length - 1, t.b + 1) : Math.max(1, t.b);
    t.due = sess.day + IV[t.b]; sess.done++;
  } else {
    sess.errs++;
    if (!sess.bad.has(key)) { sess.bad.add(key); if (t.b > 1) t.b--; }
    t.s = Math.max(0, t.s - 1); back(2);
  }
}
export const interval = t => IV[t?.b || 0];

// ---------- разметка экранов. Каждая функция возвращает { body, bar, pos }: середина экрана, нижние кнопки и счётчик в шапке.
const btn = (act, text, cls = '') => `<button data-tr="${act}"${cls ? ` class="${cls}"` : ''}>${text}</button>`;

export function homeView(st, day, env) {
  const S = stats(st, day), P = plan(st, day);
  let h = '<div class="tr-sum">';
  h += `<p class="tr-big">${P.keys.length ? `Сегодня: ${[P.due && `повторить ${P.due}`, P.old - P.due > 0 && `доучить ${P.old - P.due}`, P.fresh && `новых ${P.fresh}`].filter(Boolean).join(' · ')}` : 'На сегодня всё повторено'}</p>`;
  h += `<p class="muted">Пройдено ${S.known} из ${S.total}, из них закреплено ${S.solid}.${S.tomorrow ? ` Завтра на повторение: ${S.tomorrow}.` : ''}</p></div>`;
  if (!env.canDictate) h += '<p class="tr-note">Распознавание речи в этом браузере недоступно: говорите вслух, открывайте ответ и отмечайте сами, знали ли вы фразу.</p>';
  if (!st.me) h += `<p class="tr-note">Фразы о себе пока про условного человека из примера. ${btn('me', 'Заполнить мои данные')}</p>`;
  h += '<h2>Блоки</h2><div class="tr-blocks">';
  for (const b of S.blocks) {
    const state = [b.due && `сегодня ${b.due}`, b.learn && `в работе ${b.learn}`, b.fresh && `новых ${b.fresh}`].filter(Boolean).join(' · ') || 'всё пройдено';
    h += `<button class="tr-block" data-tr="block" data-id="${b.id}"><b lang="de">${esc(b.title)}</b><span>${esc(b.ru)}</span>
<span class="tr-st">пройдено ${b.known} из ${b.total} · ${state}</span><i class="prog"><i style="width:${Math.round(100 * b.known / b.total)}%"></i></i></button>`;
  }
  h += `</div><p class="btns">${btn('me', 'Мои данные')}${S.total - S.fresh ? btn('reset', 'Сбросить прогресс') : ''}</p>`;
  h += `<details class="tr-how"><summary>Как устроен тренажёр</summary>
<p>Каждая фраза проходит ступени: сначала вы повторяете её за голосом, глядя в текст; потом говорите по тексту с пропусками; потом — по памяти, по русской подсказке; а там, где это уместно, отвечаете ею на реплику собеседника. Ошибка возвращает на ступень назад, и фраза приходит снова через две-три карточки.</p>
<p>Фраза, прошедшая все ступени, возвращается на повторение через 1, 3, 7, 14 и 30 дней. Если на повторении она забылась, срок сокращается.</p>
<p>Микрофон слушает, пока вы не нажмёте «Готово» или не помолчите несколько секунд; торопиться не нужно. Засчитывается любая из принятых формулировок — после ответа карточка показывает и другие.</p>
<p>Распознавание иногда ошибается. Если вы сказали верно, а оно услышало другое, нажмите «Я сказал верно».</p></details>`;
  const bar = P.keys.length ? btn('start', `Начать тренировку · ${phr(P.keys.length)}`, 'primary wide') : '<p class="muted tr-idle">Блок можно повторить вне расписания — нажмите на него.</p>';
  return { body: h, bar, pos: '' };
}

const dots = (n, s) => `<span class="tr-dots">${Array.from({ length: n }, (_, i) => `<i class="${i < s ? 'done' : i === s ? 'on' : ''}"></i>`).join('')}</span>`;
function marked(text, marks) {
  const w = text.split(/\s+/);
  if (w.length !== marks.length) return esc(text); // дефис или цифра внутри слова: слова не сопоставить один к одному
  return w.map((x, i) => `<span class="${marks[i] ? 'hit' : 'miss'}">${esc(x)}</span>`).join(' ');
}
// v: { p, s, step, isNew } из current(); ui: { phase: 'ask' | 'listen' | 'res', res, live, known }; sess; env: { canDictate }
export function cardView(v, ui, sess, env) {
  const { p, s, step } = v, res = ui.res, answered = ui.phase === 'res';
  let h = `<p class="tr-step">${dots(p.steps.length, s)}<span>Ступень ${s + 1} из ${p.steps.length} · ${STEPS[step][0]}</span>${sess.free ? '<span class="tr-tag">вне расписания</span>' : v.isNew && !answered ? '<span class="tr-tag">новая</span>' : ''}</p>`;
  if (step === 'talk') h += `<p class="tr-q" lang="de"><b>${p.block.id === 'd1' || p.block.id === 'd6' ? 'Prüfer' : 'Partner'}:</b> ${esc(p.q)}</p>`;
  h += `<p class="tr-ru${step === 'talk' ? ' small' : ''}"><i>${p.task ? 'Задача' : 'Перевод'}</i>${esc(p.ru)}</p>`;
  if (answered) {
    h += `<p class="tr-de" lang="de">${res.heard ? marked(res.text, res.marks) : esc(p.de)}</p>`;
    if (res.heard && res.text !== p.de) h += `<p class="tr-also"><i>Образец</i><span lang="de">${esc(p.de)}</span></p>`;
    const verdict = res.self ? 'Засчитано.' : res.ok ? 'Верно.' : res.retry ? '<span class="good">Теперь верно.</span>' : !res.heard ? (res.skip ? 'Посмотрите ответ и повторите его вслух.' : 'Ничего не распознано — скажите громче и ближе к микрофону.') : 'Пока не совпало: красным — слова, которых не было слышно.';
    h += `<p class="tr-res ${res.ok ? 'good' : 'bad'}">${verdict}</p>`;
    if (res.heard) h += `<p class="tr-heard"><i>Распознано</i>${esc(res.heard)}</p>`;
    if (!res.ok && res.heard && !res.retry) h += `<p class="tr-self">Распознавание ошиблось? ${btn('yes', 'Я сказал верно')}</p>`;
    const also = p.also.filter(x => x !== res.text);
    if (also.length) h += `<p class="tr-also"><i>Можно и так</i>${also.map(x => `<span lang="de">${esc(x)}</span>`).join('')}</p>`;
    if (!res.ok && !sess.free) h += `<p class="muted">Фраза вернётся через пару карточек${s ? ', на ступень ниже' : ''}.</p>`;
  } else {
    h += `<p class="tr-de${!ui.prev && (step === 'ru' || step === 'talk') ? ' hid' : ''}" lang="de">${step === 'rep' || ui.prev ? esc(p.de) : step === 'gap' ? gapText(p.de) : '· · ·'}</p>`;
    h += `<p class="tr-hint">${ui.phase === 'listen' ? 'Говорите. Закончили — нажмите «Готово».' : STEPS[step][1]}</p>`;
    h += `<p class="tr-heard live"${ui.phase === 'listen' ? '' : ' hidden'}><i>Слышу</i><span class="tr-live">${esc(ui.live || '…')}</span></p>`;
  }
  let bar;
  const hear = btn('hear', '▶ Послушать');
  if (ui.phase === 'listen') bar = btn('stop', '■ Готово', 'primary wide on');
  else if (!answered) bar = env.canDictate ? btn('say', '● Говорить', 'primary wide') + (step === 'rep' ? hear : '') + btn('skip', 'Не знаю')
    : btn('skip', 'Показать ответ', 'primary wide') + (step === 'rep' ? hear : '');
  else if (res.ask) bar = btn('yes', 'Знал', 'primary') + btn('no', 'Не знал') + hear; // без распознавания: самооценка
  else bar = btn('next', 'Дальше →', 'primary wide') + (!res.ok && env.canDictate ? btn('say', '● Повторить') : '') + hear;
  const left = stepsLeft(sess, env.st), all = Math.max(sess.steps0 || 0, left + sess.done);
  return { body: `<i class="prog tr-prog"><i style="width:${all ? Math.round(100 * (all - left) / all) : 0}%"></i></i><div class="tr-card">${h}</div>`, bar, pos: `пройдено ${sess.done} из ${sess.total}` };
}

export function doneView(sess, st, day) {
  const S = stats(st, day), more = plan(st, day, sess.block || undefined);
  let h = `<div class="tr-sum tr-end"><p class="tr-big">Заход окончен</p><p>${sess.free ? `Повторено: ${phr(sess.done)}.` : `Пройдено: ${phr(sess.done)}.`} ${sess.errs ? `Ошибок по пути: ${sess.errs}.` : 'Без ошибок.'}</p>`;
  h += `<p class="muted">Всего пройдено ${S.known} из ${S.total}.${S.tomorrow ? ` Завтра на повторение придёт: ${S.tomorrow}.` : ''}</p></div>`;
  const bar = (more.keys.length ? btn('more', more.fresh ? `Ещё ${phr(more.keys.length)}` : `Продолжить · ${phr(more.keys.length)}`, 'primary wide') : '') + btn('home', 'К списку блоков', more.keys.length ? '' : 'primary wide');
  return { body: h, bar, pos: '' };
}

const sel = (name, list, val, text = x => `${x[0]} — ${x[1]}`) => `<select data-me="${name}">${list.map((x, i) => { const v = typeof val === 'number' ? i : x[0]; return `<option value="${esc(v)}"${v === val ? ' selected' : ''}>${esc(text(x))}</option>`; }).join('')}</select>`;
const inp = (name, val, ph) => `<input data-me="${name}" type="text" lang="de" autocomplete="off" autocapitalize="words" spellcheck="false" value="${esc(val)}" placeholder="${esc(ph)}">`;
export const mePreview = me => DRILLS.find(d => d.mine).items.map(it => `<p lang="de">${esc(phrase(`d1.${it.k}`, me).de)}</p>`).join('');
export function meView(me) {
  const d = PROFILE.def, m = { ...d, ...(me || {}) }, other = !PROFILE.lands.some(l => l[0] === m.land);
  let h = '<p class="muted">Из этих данных строятся фразы блока «sich vorstellen». Выбирайте готовые варианты; своим текстом вписываются только город и профессия — по-немецки.</p><div class="tr-form">';
  h += `<label>Страна<select data-me="land">${PROFILE.lands.map(l => `<option value="${l[0]}"${l[0] === m.land ? ' selected' : ''}>${l[1]} — aus ${l[2]}</option>`).join('')}<option value="other"${other ? ' selected' : ''}>другая страна…</option></select></label>`;
  h += `<label${other ? '' : ' hidden'} data-own>Ich komme aus …${inp('aus', m.aus || '', 'Serbien, der Slowakei')}</label><label${other ? '' : ' hidden'} data-own>«У нас в стране» — in …${inp('inl', m.inl || '', 'in Serbien, in der Slowakei')}</label>`;
  h += `<label>Сколько вы в Германии${sel('seit', PROFILE.seit, m.seit, x => `${x[1]} — ${x[0]}`)}</label>`;
  h += `<label>Город, где вы живёте${inp('stadt', m.stadt, 'Kassel')}</label>`;
  h += `<label>С кем вы живёте${sel('mit', PROFILE.mit, m.mit, x => `${x[1]} — ${x[0]}`)}</label>`;
  h += `<label>Семейное положение${sel('stand', PROFILE.stand, m.stand, x => `${x[1]} — ${x[0]}`)}</label>`;
  h += `<label>Дети${sel('kinder', PROFILE.kinder, m.kinder, x => `${x[1]} — ${x[0]}`)}</label>`;
  h += `<label>Профессия — существительное без артикля${inp('beruf', m.beruf, 'Verkäuferin, Koch, Lehrerin, Fahrer')}</label>`;
  h += `<label>Родной язык${inp('sprache', m.sprache, 'Ukrainisch')}</label>`;
  h += `<label>Другие языки — после «außerdem spreche ich …»${inp('weitere', m.weitere, 'Russisch und ein bisschen Englisch')}</label>`;
  h += `<label>Свободное время${sel('hobby', PROFILE.hobby, +m.hobby || 0, x => `${x[2]} — ${x[0]} ${x[1]}`)}</label></div>`;
  h += `<h2>Ваши фразы</h2><div class="tr-prev">${mePreview(me)}</div>`;
  return { body: h, bar: btn('home', 'Готово', 'primary wide'), pos: '' };
}
