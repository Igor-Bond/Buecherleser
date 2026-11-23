// Книга «Lesen B1»: варианты заданий по чтению, которые открываются в читалке как обычная книга.
// Каждый вариант — семь «глав»: начало, пять частей и итог.
import { LESEN_B1, LESEN_B1_2, LESEN_B1_3 } from './tests/index.js';

// Книг с заданиями две; ответы всех вариантов лежат в одном хранилище, поэтому id вариантов не повторяются (v01–v20, v21–v28, v31–v38).
export const BOOKS = [
  { id: 'lesen-b1', title: 'Lesen B1 — Prüfungstraining', label: 'Prüfungstraining', note: 'Формат DTZ', variants: LESEN_B1.variants },
  { id: 'lesen-b1-2', title: 'Lesen B1 — aktuelle Themen', label: 'aktuelle Themen', note: 'Формат DTZ · темы экзаменов осени 2026', variants: LESEN_B1_2.variants },
  { id: 'lesen-b1-3', title: 'Lesen B1 — Prüfungsniveau', label: 'Prüfungsniveau', note: 'Формат DTZ · тексты как на экзамене, сложнее', variants: LESEN_B1_3.variants },
];
export const MINUTES = LESEN_B1.minutes;
export const TOTAL = 25;
export const bookMeta = b => ({
  id: b.id, test: true, title: b.title, label: b.label,
  author: `${b.note} · вариантов: ${b.variants.length}`, added: Date.now(), progress: 0,
});

const LET = 'abcdefghi';
export const itemsOf = v => v.parts.flatMap(p => p.groups.flatMap(g => g.items));
export const variant = id => BOOKS.flatMap(b => b.variants).find(v => v.id === id);

export function score(v, st) {
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

function startHtml(v, st, ctx) {
  const n = Object.keys(st.ans).length, running = ctx.timerVid() === v.id;
  let h = `<h2>${v.title}</h2><p class="tinfo">${v.about}</p><div class="tbox" lang="ru">`;
  if (st.done) h += `<p><b>Результат: ${st.score} из ${TOTAL}.</b> Верные и неверные ответы отмечены на страницах заданий, итог — в конце варианта.</p>`;
  else if (n) h += `<p>Отвечено: ${n} из ${TOTAL}. Ответы сохраняются — можно продолжить в любой момент.</p>`;
  h += `<p>В варианте 5 частей и ${TOTAL} заданий; на экзамене на них даётся ${MINUTES} минут. Нажмите на любое слово в тексте — появится подсказка из словаря. Подсказки считаются и показываются в итоге.</p><p>`;
  if (!st.done) h += running ? '<button data-t="timer-off">Поставить таймер на паузу</button>'
    : `<button class="primary" data-t="timer">${st.sec ? `Продолжить таймер — осталось ${clock(MINUTES * 60 - st.sec)}` : `Запустить таймер на ${MINUTES} минут`}</button>`;
  if (n || st.done) h += '<button data-t="reset">Начать вариант заново</button>';
  return h + '</p><p class="muted">Листайте дальше — к первой части.</p></div>';
}

function partHtml(v, pi, st) {
  const p = v.parts[pi];
  let h = `<h2>${p.title}</h2><p class="instr">${p.instr}<span lang="ru">${p.ru}</span></p>`;
  h += p.groups.map(g => `<section class="grp">${g.html ? `<div class="tx${p.compact ? ' ads' : ''}">${g.html}</div>` : ''}${g.items.map(it => itemHtml(it, p, st)).join('')}</section>`).join('');
  if (pi === v.parts.length - 1 && !st.done) h += '<div class="tbox" lang="ru"><p><button class="primary" data-t="finish">Завершить и проверить</button></p></div>';
  return h;
}

function resultHtml(v, st) {
  if (!st.done) {
    const n = Object.keys(st.ans).length;
    return `<h2>Ergebnis</h2><div class="tbox" lang="ru"><p>Вариант ещё не проверен. Отвечено: ${n} из ${TOTAL}.</p><p><button class="primary" data-t="finish">Завершить и проверить</button></p></div>`;
  }
  const s = score(v, st), pct = Math.round(s.ok / TOTAL * 100);
  const level = s.ok >= 19 ? 'Это уверенный уровень B1.' : s.ok >= 11 ? 'Это соответствует уровню A2; до B1 не хватает нескольких ответов.' : 'Пока ниже уровня A2 — стоит разобрать ошибки и попробовать ещё раз.';
  let h = `<h2>Ergebnis</h2><p class="score">${s.ok} / ${TOTAL}<small>${pct} %</small></p><div class="tbox" lang="ru"><p>${level}</p><p>`;
  h += s.parts.map((p, i) => `Teil ${i + 1}: <b>${p.ok}</b> из ${p.total}`).join(' · ') + '</p><p>';
  if (st.sec) h += `Время: ${clock(st.sec)} из ${MINUTES}:00. `;
  h += `Подсказок по словам использовано: ${st.used || 0}.</p>`;
  h += `<p><button class="primary" data-t="review">Посмотреть ответы</button><button data-t="reset">Пройти заново</button></p>`;
  h += `<p class="muted">Ориентир, а не официальная оценка: на экзамене DTZ чтение оценивается вместе с аудированием (33 балла из 45 дают B1, 20 — A2). В пересчёте на эту часть B1 начинается примерно с 19 правильных ответов из 25.</p></div>`;
  return h;
}

// ctx: { st(vid) → состояние варианта, timerVid() → вариант с запущенным таймером }
export function build(ctx, bookId) {
  const chapters = [], toc = [];
  for (const v of (BOOKS.find(b => b.id === bookId) || BOOKS[0]).variants) {
    const st = () => ctx.st(v.id);
    toc.push({ title: v.title, depth: 0, ch: chapters.length });
    chapters.push({ vid: v.id, kind: 'start', title: v.title, len: 300, render: () => startHtml(v, st(), ctx) });
    v.parts.forEach((p, pi) => {
      toc.push({ title: p.title, depth: 1, ch: chapters.length });
      chapters.push({ vid: v.id, kind: 'part', title: `${v.title} · ${p.title}`, len: 1500, render: () => partHtml(v, pi, st()) });
    });
    toc.push({ title: 'Ergebnis', depth: 1, ch: chapters.length });
    chapters.push({ vid: v.id, kind: 'result', title: `${v.title} · Ergebnis`, len: 200, render: () => resultHtml(v, st()) });
  }
  return { chapters, toc };
}
