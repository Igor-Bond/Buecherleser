// Книга «Lesen B1»: варианты заданий по чтению, которые открываются в читалке как обычная книга.
// Каждый вариант — семь «глав»: начало, пять частей и итог.
import { LESEN_B1, LESEN_B1_2, LESEN_B1_3 } from './tests/index.js';
import { HOEREN_B1 } from './hoeren/index.js';
import * as H from './hoeren.js';

// Ответы всех вариантов всех книг лежат в одном хранилище, поэтому id вариантов не повторяются (v01–v20, v21–v28, v31–v38, h01–h08).
// b1 и a2 — сколько верных ответов примерно соответствует уровню (на экзамене чтение и аудирование оцениваются вместе: 33 и 20 из 45).
const LESEN = { minutes: LESEN_B1.minutes, total: 25, b1: 19, a2: 11 };
export const BOOKS = [
  { id: 'lesen-b1', title: 'Lesen B1 — Prüfungstraining', label: 'Prüfungstraining', note: 'Формат DTZ', variants: LESEN_B1.variants, ...LESEN },
  { id: 'lesen-b1-2', title: 'Lesen B1 — aktuelle Themen', label: 'aktuelle Themen', note: 'Формат DTZ · темы экзаменов осени 2026', variants: LESEN_B1_2.variants, ...LESEN },
  { id: 'lesen-b1-3', title: 'Lesen B1 — Prüfungsniveau', label: 'Prüfungsniveau', note: 'Формат DTZ · тексты как на экзамене, сложнее', variants: LESEN_B1_3.variants, ...LESEN },
  { id: 'hoeren-b1', title: 'Hören B1 — Hörtraining', label: 'Hörtraining', note: 'Формат DTZ · читает голос устройства', variants: HOEREN_B1.variants,
    hoeren: true, minutes: HOEREN_B1.minutes, total: 20, b1: 15, a2: 9 },
];
export const bookMeta = b => ({
  id: b.id, test: true, title: b.title, label: b.label,
  author: `${b.note} · вариантов: ${b.variants.length}`, added: Date.now(), progress: 0,
});

const LET = 'abcdefghi';
export const itemsOf = v => v.parts.flatMap(p => p.groups.flatMap(g => g.items));
export const variant = id => BOOKS.flatMap(b => b.variants).find(v => v.id === id);
export const bookOf = vid => BOOKS.find(b => b.variants.some(v => v.id === vid));
export const audioOf = (vid, key) => H.audioOf(variant(vid), key);

// В первой книге (v01–v20) ответ «x — ничего не подходит» всегда стоял в задании 10. Здесь он меняется местами с другим
// заданием Teil 2 — у каждого варианта со своим (иногда остаётся на 10). Если ответы на 6–10 уже даны при старом порядке,
// порядок для этого варианта не меняется (st.ord), иначе сохранённые ответы съехали бы на чужие вопросы.
const moved = new Map();
export function view(v, st) {
  const num = +v.id.slice(1);
  if (!(num <= 20)) return v;
  st.ord ||= [6, 7, 8, 9, 10].some(n => st.ans[n] != null) ? 'old' : 'new';
  const to = 6 + (num * 2 + 1) % 5;
  if (st.ord === 'old' || to === 10) return v;
  if (!moved.has(v.id)) {
    const parts = v.parts.map((p, i) => i !== 1 ? p : { ...p, groups: p.groups.map(g => ({ ...g, items: g.items.map(it => ({ ...it })) })) });
    const its = parts[1].groups.flatMap(g => g.items), a = its.find(i => i.n === to), b = its.find(i => i.n === 10);
    if (a && b && b.a === 8) [a.q, a.a, b.q, b.a] = [b.q, b.a, a.q, a.a];
    moved.set(v.id, { ...v, parts });
  }
  return moved.get(v.id);
}

export function score(v, st) {
  v = view(v, st);
  const parts = v.parts.map(p => {
    const its = p.groups.flatMap(g => g.items);
    return { total: its.length, ok: its.filter(it => st.ans[it.n] === it.a).length };
  });
  return { parts, ok: parts.reduce((s, p) => s + p.ok, 0) };
}
export const clock = sec => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;

function itemHtml(it, p, st) {
  const a = st.ans[it.n], row = p.compact || p.gaps || it.opts.length === 2;
  const opts = it.opts.map((o, k) => {
    let c = 'opt';
    if (a === k) c += ' on';
    if (st.done) c += k === it.a ? ' ok' : a === k ? ' bad' : '';
    const letter = p.compact || it.opts.length === 2 ? '' : `<i>${LET[k]}</i>`;
    return `<button class="${c}" data-k="${k}">${letter}<span>${o}</span></button>`;
  }).join('');
  const none = st.done && a == null ? '<div class="noans" lang="ru">нет ответа</div>' : '';
  return `<div class="q" data-n="${it.n}"><div class="q-t"><b>${it.n}</b>${it.q}</div><div class="opts${row ? ' line' : ''}">${opts}</div>${none}</div>`;
}

function startHtml(v, st, ctx, B) {
  const n = Object.keys(st.ans).length, running = ctx.timerVid() === v.id, TOTAL = B.total, MINUTES = B.minutes;
  let h = `<h2>${v.title}</h2><p class="tinfo">${v.about}</p><div class="tbox" lang="ru">`;
  if (st.done) h += `<p><b>Результат: ${st.score} из ${TOTAL}.</b> Верные и неверные ответы отмечены на страницах заданий, итог — в конце варианта.</p>`;
  else if (n) h += `<p>Отвечено: ${n} из ${TOTAL}. Ответы сохраняются — можно продолжить в любой момент.</p>`;
  h += B.hoeren ? `<p>В варианте 4 части и ${TOTAL} заданий; на экзамене аудирование идёт около ${MINUTES} минут, и каждый текст звучит один раз. Сначала прочитайте задание, потом нажмите «Прослушать». Текста на экране нет: расшифровка появится после проверки, и тогда по любому слову можно нажать — откроется словарь. Счётчик показывает, сколько раз вы прослушали текст; слушать повторно можно.</p><p>`
    : `<p>В варианте 5 частей и ${TOTAL} заданий; на экзамене на них даётся ${MINUTES} минут. Нажмите на любое слово в тексте — появится подсказка из словаря. Подсказки считаются и показываются в итоге.</p><p>`;
  if (!st.done) h += running ? '<button data-t="timer-off">Поставить таймер на паузу</button>'
    : `<button class="primary" data-t="timer">${st.sec ? `Продолжить таймер — осталось ${clock(MINUTES * 60 - st.sec)}` : `Запустить таймер на ${MINUTES} минут`}</button>`;
  if (n || st.done) h += '<button data-t="reset">Начать вариант заново</button>';
  return h + '</p><p class="muted">Листайте дальше — к первой части.</p></div>' + (B.hoeren ? H.speechBox(ctx) : '');
}

function partHtml(v, pi, st) {
  v = view(v, st);
  const p = v.parts[pi];
  let h = `<h2>${p.title}</h2><p class="instr">${p.instr}<span lang="ru">${p.ru}</span></p>`;
  h += H.stmtsHtml(p);
  h += p.groups.map((g, gi) => `<section class="grp">${g.audio ? H.groupHead(p, pi, g, gi, st) : ''}${g.html ? `<div class="tx${p.compact ? ' ads' : ''}">${g.html}</div>` : ''}${g.items.map(it => itemHtml(it, p, st)).join('')}</section>`).join('');
  if (pi === v.parts.length - 1 && !st.done) h += '<div class="tbox" lang="ru"><p><button class="primary" data-t="finish">Завершить и проверить</button></p></div>';
  return h;
}

function resultHtml(v, st, B) {
  const TOTAL = B.total, MINUTES = B.minutes;
  if (!st.done) {
    const n = Object.keys(st.ans).length;
    return `<h2>Ergebnis</h2><div class="tbox" lang="ru"><p>Вариант ещё не проверен. Отвечено: ${n} из ${TOTAL}.</p><p><button class="primary" data-t="finish">Завершить и проверить</button></p></div>`;
  }
  const s = score(v, st), pct = Math.round(s.ok / TOTAL * 100);
  const level = s.ok >= B.b1 ? 'Это уверенный уровень B1.' : s.ok >= B.a2 ? 'Это соответствует уровню A2; до B1 не хватает нескольких ответов.' : 'Пока ниже уровня A2 — стоит разобрать ошибки и попробовать ещё раз.';
  let h = `<h2>Ergebnis</h2><p class="score">${s.ok} / ${TOTAL}<small>${pct} %</small></p><div class="tbox" lang="ru"><p>${level}</p><p>`;
  h += s.parts.map((p, i) => `Teil ${i + 1}: <b>${p.ok}</b> из ${p.total}`).join(' · ') + '</p><p>';
  if (st.sec) h += `Время: ${clock(st.sec)} из ${MINUTES}:00. `;
  h += `Подсказок по словам использовано: ${st.used || 0}.</p>`;
  h += `<p><button class="primary" data-t="review">${B.hoeren ? 'Посмотреть ответы и расшифровки' : 'Посмотреть ответы'}</button><button data-t="reset">Пройти заново</button></p>`;
  h += `<p class="muted">Ориентир, а не официальная оценка: на экзамене DTZ чтение оценивается вместе с аудированием (33 балла из 45 дают B1, 20 — A2). В пересчёте на эту часть B1 начинается примерно с ${B.b1} правильных ответов из ${TOTAL}.${B.hoeren ? ' Голос синтезатора ровнее и чище записи на экзамене: там говорят живые люди, быстрее и с шумами.' : ''}</p></div>`;
  return h;
}

// ctx: { st(vid) → состояние варианта, timerVid() → вариант с запущенным таймером, rate() → скорость речи }
export function build(ctx, bookId) {
  const chapters = [], toc = [];
  const B = BOOKS.find(b => b.id === bookId) || BOOKS[0];
  for (const v of B.variants) {
    const st = () => ctx.st(v.id);
    toc.push({ title: v.title, depth: 0, ch: chapters.length });
    chapters.push({ vid: v.id, kind: 'start', title: v.title, len: 300, render: () => startHtml(v, st(), ctx, B) });
    v.parts.forEach((p, pi) => {
      toc.push({ title: p.title, depth: 1, ch: chapters.length });
      chapters.push({ vid: v.id, kind: 'part', title: `${v.title} · ${p.title}`, len: 1500, render: () => partHtml(v, pi, st()) });
    });
    toc.push({ title: 'Ergebnis', depth: 1, ch: chapters.length });
    chapters.push({ vid: v.id, kind: 'result', title: `${v.title} · Ergebnis`, len: 200, render: () => resultHtml(v, st(), B) });
  }
  return { chapters, toc };
}
