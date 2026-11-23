import * as DB from './db.js';
import * as D from './dict.js';
import * as G from './german.js';
import { parseBookFile, parseFb2Text } from './fb2.js';
import { explain, MODELS, modelsFor, refreshModels } from './llm.js';
import { DEMO_FB2 } from './demo.js';
import { coverSvg } from './cover.js';
import * as L from './lesen.js';
import * as Y from './sync.js';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

function toast(msg, ms = 3200) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, ms);
}
function download(name, text, type = 'text/plain') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: type + ';charset=utf-8' }));
  a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

// ---------- настройки и оформление

const THEMES = {
  light: ['#fbfaf7', '#1f1f1f'], sepia: ['#f4ecd8', '#3d3223'], green: ['#e2ecdf', '#25302a'],
  dark: ['#1e1f22', '#cfcdc8'], black: ['#000000', '#a8a8a8'],
};
const FONTS = {
  'С засечками': 'Georgia, "Noto Serif", "Times New Roman", serif',
  'Без засечек': 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  'Palatino': '"Palatino Linotype", "Book Antiqua", Palatino, "Noto Serif", serif',
  'Cambria': 'Cambria, Charter, "Noto Serif", serif',
  'Verdana': 'Verdana, "DejaVu Sans", sans-serif',
  'Моноширинный': 'Consolas, "Roboto Mono", monospace',
};
const DEF = {
  look: { theme: 'sepia', bg: THEMES.sepia[0], fg: THEMES.sepia[1], font: 'С засечками', size: 19, lh: 1.6, para: 0.5,
    indent: true, margin: 24, maxw: 720, align: 'justify', hyph: true, mode: 'paged' },
  answer: 'dict', key: '', model: MODELS[0][0], level: 'A2',
};
let S = DEF, userFonts = [];
const saveSettings = debounce(() => { S.at = Date.now(); DB.put('kv', S, 'settings'); Y.touch(); }, 250);

function lum(hex) {
  const n = parseInt(hex.slice(1), 16);
  return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
}
function applyLook(relay = true) {
  const L = S.look, st = document.documentElement.style;
  st.setProperty('--bg', L.bg); st.setProperty('--fg', L.fg);
  st.setProperty('--font', FONTS[L.font] || `"${L.font}", Georgia, serif`);
  st.setProperty('--size', L.size + 'px'); st.setProperty('--lh', L.lh);
  st.setProperty('--para', L.para + 'em'); st.setProperty('--indent', L.indent ? '1.5em' : '0');
  st.setProperty('--margin', L.margin + 'px'); st.setProperty('--maxw', L.maxw + 'px');
  st.setProperty('--align', L.align); st.setProperty('--hyph', L.hyph ? 'auto' : 'manual');
  document.documentElement.dataset.dark = lum(L.bg) < 0.4 ? '1' : '0';
  $('meta[name=theme-color]').content = L.bg;
  view.dataset.mode = L.mode;
  if (relay && R) relayout();
}

function renderLook() {
  const L = S.look;
  $('#lk-themes').innerHTML = Object.entries(THEMES).map(([k, [bg, fg]]) =>
    `<button data-t="${k}" class="${L.theme === k ? 'on' : ''}" style="background:${bg};color:${fg}">Аа</button>`).join('');
  $('#lk-bg').value = L.bg; $('#lk-fg').value = L.fg;
  $('#lk-font').innerHTML = [...Object.keys(FONTS), ...userFonts.map(f => f.name)].map(n => `<option ${n === L.font ? 'selected' : ''}>${esc(n)}</option>`).join('');
  for (const el of $$('#look .step')) {
    const k = el.dataset.k, dec = +el.dataset.step < 1 ? 2 : 0;
    el.innerHTML = `<button data-d="-1">−</button><output>${dec ? (+L[k]).toFixed(2).replace(/0$/, '') : L[k]}</output><button data-d="1">+</button>`;
  }
  for (const el of $$('#look .seg')) for (const b of el.children) b.classList.toggle('on', String(L[el.dataset.k]) === b.dataset.v);
}

function initLook() {
  $('#look').addEventListener('click', e => {
    const L = S.look, b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.t) { L.theme = b.dataset.t; [L.bg, L.fg] = THEMES[L.theme]; }
    else if (b.dataset.d) {
      const el = b.parentElement, k = el.dataset.k;
      L[k] = +clamp(L[k] + b.dataset.d * el.dataset.step, +el.dataset.min, +el.dataset.max).toFixed(2);
    } else if (b.dataset.v) {
      const k = b.parentElement.dataset.k;
      L[k] = b.dataset.v === 'true' ? true : b.dataset.v === 'false' ? false : b.dataset.v;
    } else if (b.id === 'lk-font-add') return $('#font-file').click();
    else return;
    applyLook(); renderLook(); saveSettings();
  });
  for (const id of ['bg', 'fg']) $('#lk-' + id).addEventListener('input', e => {
    S.look[id] = e.target.value; S.look.theme = 'custom'; applyLook(); renderLook(); saveSettings();
  });
  $('#lk-font').addEventListener('change', e => { S.look.font = e.target.value; applyLook(); saveSettings(); });
  $('#font-file').addEventListener('change', async e => {
    const f = e.target.files[0]; e.target.value = '';
    if (!f) return;
    try {
      const font = { name: f.name.replace(/\.\w+$/, ''), buf: await f.arrayBuffer() };
      await addFont(font);
      userFonts = userFonts.filter(x => x.name !== font.name).concat(font);
      await DB.put('kv', userFonts, 'fonts');
      S.look.font = font.name; applyLook(); renderLook(); saveSettings();
    } catch { toast('Не удалось загрузить этот шрифт'); }
  });
}
async function addFont(f) { document.fonts.add(await new FontFace(f.name, f.buf).load()); }

// ---------- навигация между экранами

let current = 'library';
function show(name, push = true) {
  if (current === 'reader' && name !== 'reader') { savePos.flush?.(); closeSheet(); closePanels(); }
  current = name;
  for (const v of $$('.view')) v.hidden = v.id !== 'v-' + name;
  if (push) history.pushState({ v: name }, '');
  ({ library: renderLibrary, vocab: renderVocab, dicts: renderDicts, settings: renderSettings })[name]?.();
}
addEventListener('popstate', e => {
  if (!$('#sheet').hidden) closeSheet();
  closePanels();
  show(e.state?.v || 'library', false);
});
document.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) show(b.dataset.go); });

// ---------- библиотека

async function renderLibrary() {
  const books = (await DB.all('books')).sort((a, b) => (b.opened || b.added) - (a.opened || a.added));
  $('#books').innerHTML = books.map(b => `
    <article class="book" data-id="${b.id}" tabindex="0">
      <div class="cover${b.cover ? '' : ' art'}">${b.cover ? `<img src="${b.cover}" alt="">` : coverSvg(b.title, b.test ? '' : b.author)}</div>
      <div class="bt">${esc(b.title)}</div><div class="ba">${esc(b.author || '')}</div>
      <div class="prog"><i style="width:${Math.round((b.progress || 0) * 100)}%"></i></div>
      ${b.test ? '' : '<button class="del" aria-label="Удалить книгу">×</button>'}
    </article>`).join('') || '<div class="empty">Здесь пока пусто. Добавьте первую книгу.</div>';
}
async function addBooks(files) {
  let last;
  for (const f of files) {
    try { last = await storeBook(await parseBookFile(f)); }
    catch (err) { toast(`${f.name}: ${err.message}`); }
  }
  await renderLibrary();
  if (last && files.length === 1) openBook(last);
}
async function storeBook(b) {
  const id = 'b' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  await DB.put('content', { id, chapters: b.chapters, toc: b.toc, notes: b.notes });
  await DB.put('books', await Y.adopt({ id, title: b.title, author: b.author, cover: b.cover, added: Date.now(), progress: 0 }));
  return id;
}
function initLibrary() {
  $('#add-book').onclick = () => $('#book-file').click();
  $('#book-file').onchange = e => { addBooks([...e.target.files]); e.target.value = ''; };
  $('#books').addEventListener('click', async e => {
    const card = e.target.closest('.book'); if (!card?.dataset.id) return;
    if (e.target.closest('.del')) {
      if (!confirm('Удалить книгу из библиотеки? Сохранённые слова останутся.')) return;
      await DB.del('books', card.dataset.id); await DB.del('content', card.dataset.id);
      return renderLibrary();
    }
    openBook(card.dataset.id);
  });
  let depth = 0;
  addEventListener('dragenter', e => { if (e.dataTransfer?.types.includes('Files')) { depth++; $('#drop').hidden = false; } });
  addEventListener('dragleave', () => { if (--depth <= 0) { depth = 0; $('#drop').hidden = true; } });
  addEventListener('dragover', e => e.preventDefault());
  addEventListener('drop', e => {
    e.preventDefault(); depth = 0; $('#drop').hidden = true;
    if (e.dataTransfer?.files.length) { if (current !== 'library') show('library'); addBooks([...e.dataTransfer.files]); }
  });
}

// ---------- чтение

const view = $('#r-view'), content = $('#r-content');
let R = null; // состояние открытой книги
const paged = () => S.look.mode === 'paged';

let bareT = 0;
$('#v-reader').addEventListener('pointerdown', () => clearTimeout(bareT), true);
async function openBook(id) {
  const meta = await DB.get('books', id);
  stopTimer();
  const test = meta?.test ? makeTest((await DB.get('kv', 'lesen')) || {}) : null;
  const c = test ? { ...L.build(test, id), notes: {} } : await DB.get('content', id);
  if (!meta || !c) return toast('Книга не найдена');
  const pre = []; let total = 0;
  for (const ch of c.chapters) { pre.push(total); total += ch.len; }
  R = { meta, ch: c.chapters, toc: c.toc || [], notes: c.notes || {}, pre, total, ci: 0, page: 0, pages: 1, W: 0, blocks: [], test };
  $('#r-title').textContent = meta.title;
  show('reader');
  $('#v-reader').classList.remove('bare');
  // панели с названием и прогрессом показываются на пару секунд и плавно уезжают; любое касание отменяет автоскрытие
  clearTimeout(bareT);
  bareT = setTimeout(() => { if (current === 'reader' && $('#look').hidden && $('#toc').hidden) $('#v-reader').classList.add('bare'); }, 1600);
  showChapter(clamp(meta.pos?.ch || 0, 0, R.ch.length - 1), { block: meta.pos?.b || 0 });
}

function showChapter(i, { block = 0, last = false, frac = 0 } = {}) {
  R.ci = i;
  let html = R.ch[i].render ? R.ch[i].render() : R.ch[i].html;
  if (!paged()) {
    if (i < R.ch.length - 1) html += '<div class="chnav"><button data-nav="1">Следующая глава →</button></div>';
    if (i > 0) html = '<div class="chnav"><button data-nav="-1">← Предыдущая глава</button></div>' + html;
  }
  content.classList.remove('anim');
  content.innerHTML = html;
  R.blocks = [...content.querySelectorAll('p, h2, h3, h4, .gap, .img, .q, .ad')];
  for (const img of content.querySelectorAll('img')) if (!img.complete) img.addEventListener('load', () => relayout(), { once: true });
  measure();
  if (last) goPage(R.pages - 1, false);
  else if (block) goBlock(block);
  else if (frac && paged()) goPage(Math.floor(frac * R.pages), false);
  else if (frac) { view.scrollTop = frac * view.scrollHeight; update(); }
  else goPage(0, false);
}

function measure() {
  if (!paged()) { content.style.transform = ''; R.pages = 1; return; }
  R.W = view.getBoundingClientRect().width; // дробная ширина: иначе на длинных главах страницы «уползают»
  content.style.setProperty('--colw', Math.max(120, R.W - 2 * S.look.margin) + 'px');
  R.pages = Math.max(1, Math.ceil((content.scrollWidth - 1) / R.W));
}

function goPage(p, anim = true) {
  if (!paged()) { view.scrollTop = 0; return update(); }
  R.page = clamp(p, 0, R.pages - 1);
  content.classList.toggle('anim', anim);
  content.style.transform = `translateX(${-R.page * R.W}px)`;
  update();
}

function currentBlock() {
  if (!R.blocks.length) return 0;
  const r = view.getBoundingClientRect();
  const ok = paged() ? el => el.getBoundingClientRect().left >= r.left - 1 : el => el.getBoundingClientRect().bottom > r.top + 1;
  if (paged() && R.page === 0) return 0;
  let lo = 0, hi = R.blocks.length - 1;
  while (lo < hi) { const m = (lo + hi) >> 1; if (ok(R.blocks[m])) hi = m; else lo = m + 1; }
  return lo;
}

function goBlock(b) {
  const el = R.blocks[b];
  if (!el) return goPage(0, false);
  if (paged()) goPage(Math.floor((el.getBoundingClientRect().left - content.getBoundingClientRect().left + 1) / R.W), false);
  else { view.scrollTop += el.getBoundingClientRect().top - view.getBoundingClientRect().top - 8; update(); }
}

function relayout() {
  if (!R || current !== 'reader') return;
  const b = currentBlock();
  if ((view.dataset.built || 'paged') !== S.look.mode) { view.dataset.built = S.look.mode; return showChapter(R.ci, { block: b }); }
  measure(); goBlock(b);
}

function turn(dir) {
  if (!R) return;
  clearMark();
  $('#v-reader').classList.add('bare');
  if (!paged()) return view.scrollBy({ top: dir * view.clientHeight * 0.88, behavior: 'smooth' });
  const p = R.page + dir;
  if (p >= 0 && p < R.pages) return goPage(p);
  const ci = R.ci + dir;
  if (ci < 0 || ci >= R.ch.length) return;
  showChapter(ci, { last: dir < 0 });
}

function progress() {
  const lastCh = R.ci === R.ch.length - 1;
  let f;
  if (paged()) { if (lastCh && R.page === R.pages - 1) return 1; f = R.page / R.pages; }
  else {
    const max = view.scrollHeight - view.clientHeight;
    if (lastCh && view.scrollTop >= max - 2) return 1;
    f = max > 0 ? view.scrollTop / view.scrollHeight : 0;
  }
  return (R.pre[R.ci] + R.ch[R.ci].len * f) / R.total;
}

function update() {
  const p = progress();
  $('#r-chapter').textContent = R.ch[R.ci].title || '';
  $('#r-timer').textContent = tTimer ? L.clock(Math.max(0, tTimer.left)) : '';
  $('#r-timer').classList.toggle('low', !!tTimer && tTimer.left <= 300);
  $('#r-pos').textContent = (paged() ? `${R.page + 1} / ${R.pages} · ` : '') + Math.round(p * 100) + '%';
  $('#r-slider').value = Math.round(p * 1000);
  savePos();
}

const savePos = (() => {
  let t;
  const run = () => {
    clearTimeout(t); t = null;
    if (!R) return;
    R.meta.pos = { ch: R.ci, b: currentBlock() };
    R.meta.progress = progress(); R.meta.opened = Date.now();
    DB.put('books', R.meta); Y.touch();
  };
  const f = () => { clearTimeout(t); t = setTimeout(run, 600); };
  f.flush = () => { if (t) run(); };
  return f;
})();

// ---------- книга «Lesen B1»: ответы, проверка, таймер

let tTimer = null;
function makeTest(states) {
  const persist = debounce(() => { DB.put('kv', states, 'lesen'); Y.touch(); }, 300);
  return {
    states,
    st: vid => states[vid] ??= { ans: {}, used: 0 },
    timerVid: () => tTimer?.vid,
    save: vid => { if (tTimer?.vid === vid) states[vid].sec = spent(); states[vid].at = Date.now(); persist(); },
  };
}
// Потраченное время копится в состоянии варианта (sec): пауза, перезапуск таймера и закрытие приложения его не обнуляют.
const spent = () => Math.min(L.MINUTES * 60, tTimer.base + Math.round((Date.now() - tTimer.t0) / 1000));
function stopTimer() {
  if (!tTimer) return;
  const t = tTimer;
  clearInterval(t.tick); t.T.st(t.vid).sec = spent(); tTimer = null; t.T.save(t.vid);
  $('#r-timer').textContent = '';
}
document.addEventListener('visibilitychange', () => { if (document.hidden && tTimer) tTimer.T.save(tTimer.vid); });
function countHint() {
  if (!R?.test) return;
  const st = R.test.st(R.ch[R.ci].vid);
  if (!st.done) { st.used = (st.used || 0) + 1; R.test.save(R.ch[R.ci].vid); }
}
const chapterOf = (vid, kind) => R.ch.findIndex(c => c.vid === vid && c.kind === kind);

function finishVariant(vid, auto) {
  const T = R.test, st = T.st(vid), missing = L.TOTAL - Object.keys(st.ans).length;
  if (!auto && missing && !confirm(`Без ответа осталось заданий: ${missing}. Завершить и проверить?`)) return;
  st.done = true; st.score = L.score(L.variant(vid), st).ok; st.date = Date.now();
  if (tTimer?.vid === vid) stopTimer();
  T.save(vid);
  if (auto) toast('Время вышло — вариант проверен', 5000);
  if (current === 'reader') showChapter(chapterOf(vid, 'result'));
}

function testClick(e) {
  const ch = R.ch[R.ci], T = R.test, st = T.st(ch.vid);
  const opt = e.target.closest('.opt');
  if (opt) {
    if (st.done) return true;
    const q = opt.closest('.q'), n = +q.dataset.n, k = +opt.dataset.k;
    if (st.ans[n] === k) delete st.ans[n]; else st.ans[n] = k;
    for (const x of q.querySelectorAll('.opt')) x.classList.toggle('on', +x.dataset.k === st.ans[n]);
    T.save(ch.vid);
    return true;
  }
  const act = e.target.closest('[data-t]')?.dataset.t;
  if (!act) return false;
  const first = chapterOf(ch.vid, 'start');
  if (act === 'timer') {
    stopTimer();
    tTimer = { vid: ch.vid, T, base: st.sec || 0, t0: Date.now() };
    tTimer.left = L.MINUTES * 60 - tTimer.base;
    tTimer.tick = setInterval(() => {
      if (!tTimer || !R?.test) return stopTimer();
      tTimer.left = L.MINUTES * 60 - spent();
      if (tTimer.left <= 0) finishVariant(tTimer.vid, true);
      else if (current === 'reader') update();
    }, 1000);
    showChapter(first + 1);
  } else if (act === 'timer-off') { stopTimer(); showChapter(R.ci); }
  else if (act === 'finish') finishVariant(ch.vid, false);
  else if (act === 'review') showChapter(first + 1);
  else if (act === 'reset') {
    if (!confirm('Стереть ответы этого варианта и начать заново?')) return true;
    if (tTimer?.vid === ch.vid) stopTimer();
    T.states[ch.vid] = { ans: {}, used: 0 }; T.save(ch.vid);
    showChapter(first);
  }
  return true;
}

function closePanels() { $('#look').hidden = $('#toc').hidden = $('#scrim').hidden = true; }
function openPanel(id) { closeSheet(); closePanels(); $(id).hidden = false; $('#scrim').hidden = false; }

function renderToc() {
  const list = R.toc.length ? R.toc : R.ch.map((c, i) => ({ title: c.title, depth: 0, ch: i }));
  $('#toc').innerHTML = list.map(t => `<a data-ch="${t.ch}" class="${t.ch === R.ci ? 'on' : ''}" style="padding-left:${4 + t.depth * 16}px">${esc(t.title)}</a>`).join('');
}

// слово под пальцем
function wordAt(x, y) {
  let node, off;
  if (document.caretPositionFromPoint) { const p = document.caretPositionFromPoint(x, y); if (!p) return null; node = p.offsetNode; off = p.offset; }
  else { const r = document.caretRangeFromPoint?.(x, y); if (!r) return null; node = r.startContainer; off = r.startOffset; }
  if (!node || node.nodeType !== 3 || !content.contains(node)) return null;
  const t = node.nodeValue, L = /[A-Za-zÀ-ÖØ-öø-ÿẞ]/;
  let s = off, e = off;
  while (s > 0 && L.test(t[s - 1])) s--;
  while (e < t.length && L.test(t[e])) e++;
  if (s === e) return null;
  const range = document.createRange(); range.setStart(node, s); range.setEnd(node, e);
  const hit = [...range.getClientRects()].find(r => x >= r.left - 3 && x <= r.right + 3 && y >= r.top - 3 && y <= r.bottom + 3);
  if (!hit) return null;
  const block = node.parentElement.closest('p, h2, h3, h4') || node.parentElement;
  const pre = document.createRange(); pre.selectNodeContents(block); pre.setEnd(node, s);
  const text = block.textContent, at = pre.toString().length;
  const { from, to } = G.sentenceOf(text, at);
  const raw = text.slice(from, to), lead = raw.length - raw.trimStart().length;
  return { word: t.slice(s, e), range, rect: hit, sentence: raw.trim(), start: at - from - lead, block, from: from + lead, to: from + lead + raw.trim().length };
}

// диапазон по смещениям в тексте блока — чтобы подсветить предложение целиком
function rangeIn(block, from, to) {
  const w = document.createTreeWalker(block, NodeFilter.SHOW_TEXT), r = document.createRange();
  let pos = 0, n, started = false;
  while ((n = w.nextNode())) {
    const len = n.nodeValue.length;
    if (!started && from < pos + len) { r.setStart(n, from - pos); started = true; }
    if (started && to <= pos + len) { r.setEnd(n, to - pos); return r; }
    pos += len;
  }
  return null;
}
const sentenceRange = hit => (hit.to > hit.from && rangeIn(hit.block, hit.from, hit.to)) || hit.range;
const sameRange = (a, b) => a.startContainer === b.startContainer && a.startOffset === b.startOffset;
function span(a, b) {
  const r = document.createRange(), fwd = a.compareBoundaryPoints(Range.START_TO_START, b) <= 0, s = fwd ? a : b, e = fwd ? b : a;
  r.setStart(s.startContainer, s.startOffset); r.setEnd(e.endContainer, e.endOffset);
  return r;
}
function openPhrase(range) {
  const text = range.toString().trim().replace(/\s+/g, ' ');
  if (text.length < 2) return clearMark();
  if (text.length > 600) { clearMark(); return toast('Слишком длинный отрывок — выделите покороче'); }
  const el = n => (n.nodeType === 1 ? n : n.parentElement).closest('p, h2, h3, h4');
  const a = el(range.startContainer), b = el(range.endContainer);
  const ctxText = a && a === b ? a.textContent.trim() : text;
  const rect = range.getBoundingClientRect();
  countHint();
  openSheet({ kind: 'phrase', text, sentence: ctxText.length > 700 ? text : ctxText, rect }, range);
}

function mark(range) { if (window.Highlight) CSS.highlights.set('lookup', new Highlight(range)); }
function clearMark() { if (window.Highlight) CSS.highlights.delete('lookup'); }

function initReader() {
  $('#r-back').onclick = () => { history.length > 1 ? history.back() : show('library'); };
  $('#r-prev').onclick = () => turn(-1);
  $('#r-next').onclick = () => turn(1);
  $('#r-look').onclick = () => { renderLook(); openPanel('#look'); };
  $('#r-toc').onclick = () => { renderToc(); openPanel('#toc'); };
  $('#scrim').onclick = closePanels;
  $('#toc').addEventListener('click', e => { const a = e.target.closest('a'); if (a) { closePanels(); showChapter(+a.dataset.ch); } });
  $('#r-slider').addEventListener('change', e => {
    const target = e.target.value / 1000 * R.total;
    let i = R.pre.findLastIndex(v => v <= target); if (i < 0) i = 0;
    showChapter(i, { frac: clamp((target - R.pre[i]) / R.ch[i].len, 0, 0.999) });
  });

  // Своё выделение вместо системного: у системного — меню «копировать/поделиться» и помощники браузера поверх текста.
  // Двойное нажатие на слово — всё предложение; долгое нажатие и протяжка (мышью — просто протяжка) — фраза от слова до слова.
  let pick = null, press = 0, down = null, skipClick = 0, lastTap = null, touchy = false;
  const pickShow = () => mark(pick.b ? span(pick.a.range, pick.b.range) : sentenceRange(pick.a));
  const pickMove = (x, y) => { const h = wordAt(x, y); if (!h) return; pick.b = sameRange(h.range, pick.a.range) ? null : h; pickShow(); };
  const pickEnd = () => { const p = pick; pick = null; skipClick = Date.now(); openPhrase(p.b ? span(p.a.range, p.b.range) : sentenceRange(p.a)); };
  content.addEventListener('selectstart', e => e.preventDefault());
  if (/Android/.test(navigator.userAgent)) content.style.userSelect = 'none'; // в Chromium слово под пальцем находится и так; в Safari не проверено, там хватает selectstart
  view.addEventListener('contextmenu', e => { if (touchy) e.preventDefault(); });
  view.addEventListener('touchstart', e => {
    touchy = true; clearTimeout(press);
    if (e.touches.length !== 1 || e.target.closest('button, a')) return;
    const { clientX: x, clientY: y } = e.touches[0];
    down = { x, y };
    press = setTimeout(() => {
      const h = R && wordAt(x, y);
      if (!h) return;
      closeSheet(); pick = { a: h }; pickShow(); navigator.vibrate?.(12);
    }, 450);
  }, { passive: true });
  view.addEventListener('touchmove', e => {
    const t = e.touches[0];
    if (pick) { if (e.cancelable) e.preventDefault(); pickMove(t.clientX, t.clientY); }
    else if (down && Math.hypot(t.clientX - down.x, t.clientY - down.y) > 10) clearTimeout(press);
  }, { passive: false });
  view.addEventListener('touchend', e => { clearTimeout(press); if (pick) { if (e.cancelable) e.preventDefault(); pickEnd(); } }, { passive: false });
  view.addEventListener('touchcancel', () => { clearTimeout(press); if (pick) { pick = null; clearMark(); } });
  view.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' || e.button || e.target.closest('button, a')) return;
    touchy = false;
    const h = R && wordAt(e.clientX, e.clientY);
    down = h ? { a: h } : null;
  });
  view.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || !down?.a) return;
    if (!(e.buttons & 1)) { down = null; return; }
    if (pick) return pickMove(e.clientX, e.clientY);
    const h = wordAt(e.clientX, e.clientY);
    if (h && !sameRange(h.range, down.a.range)) { closeSheet(); pick = { a: down.a, b: h }; pickShow(); }
  });
  addEventListener('pointerup', e => { if (e.pointerType !== 'mouse') return; down = null; if (pick) pickEnd(); });

  view.addEventListener('click', e => {
    if (!R || Date.now() - skipClick < 400) return;
    const nav = e.target.closest('[data-nav]');
    if (nav) return showChapter(R.ci + +nav.dataset.nav);
    if (R.test && testClick(e)) return;
    if (!getSelection().isCollapsed) return;
    const note = e.target.closest('a.note');
    if (note) return openNote(note.dataset.note);
    const hit = wordAt(e.clientX, e.clientY);
    if (hit) {
      const dbl = lastTap && Date.now() - lastTap.t < 400 && Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 30;
      lastTap = dbl ? null : { t: Date.now(), x: e.clientX, y: e.clientY };
      if (dbl) return openPhrase(sentenceRange(hit));
      countHint(); return openWord(hit);
    }
    if (!$('#sheet').hidden) return closeSheet();
    const r = view.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
    if (paged() && x < 0.3) turn(-1);
    else if (paged() && x > 0.7) turn(1);
    else $('#v-reader').classList.toggle('bare');
  });

  // свайп
  let t0 = null;
  view.addEventListener('touchstart', e => { t0 = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() } : null; }, { passive: true });
  view.addEventListener('touchend', e => {
    if (!t0 || !paged() || pick || Date.now() - skipClick < 400) return;
    const dx = e.changedTouches[0].clientX - t0.x, dy = e.changedTouches[0].clientY - t0.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5 && Date.now() - t0.t < 700) { closeSheet(); turn(dx < 0 ? 1 : -1); }
    t0 = null;
  }, { passive: true });
  view.addEventListener('scroll', () => { if (R && !paged()) update(); }, { passive: true });
  let wheelAt = 0;
  view.addEventListener('wheel', e => {
    if (!paged() || Math.abs(e.deltaY) < 8 || Date.now() - wheelAt < 260) return;
    wheelAt = Date.now(); turn(e.deltaY > 0 ? 1 : -1);
  }, { passive: true });

  addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSheet(); closePanels(); return; }
    if (current !== 'reader' || /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); turn(1); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); turn(-1); }
  });
  addEventListener('resize', debounce(relayout, 150));

}

function openNote(id) {
  const html = R.notes[id];
  if (!html) return;
  cur = null; ai?.abort();
  $('#sheet').hidden = false; $('#sheet').classList.remove('up');
  $('#sh-tabs').hidden = $('#sh-save').hidden = true;
  $('#sh-body').innerHTML = `<div class="ai" lang="de">${html}</div>`;
}

// ---------- карточка слова или фразы

const POS = { n: 'сущ.', v: 'глагол', adj: 'прил.', adv: 'нареч.', prp: 'предлог', conj: 'союз', pron: 'мест.', art: 'артикль', num: 'числ.', part: 'частица' };
const ART = { m: 'der', f: 'die', n: 'das' };
let cur = null, tab = 'dict', ai = null, dictNames = {};

function openWord(hit) {
  mark(hit.range);
  openSheet({ kind: 'word', text: hit.word, sentence: hit.sentence, start: hit.start, rect: hit.rect });
}

async function openSheet(c, range) {
  ai?.abort(); cur = c;
  if (range) mark(range);
  const sh = $('#sheet');
  sh.classList.toggle('up', c.rect && (c.rect.top + c.rect.bottom) / 2 > innerHeight * 0.52);
  sh.hidden = false;
  $('#sh-tabs').hidden = $('#sh-save').hidden = false;
  $('#sh-body').innerHTML = '<p class="muted">…</p>';
  if (c.kind === 'word') c.res = await D.lookup(c.text, c.sentence, c.start);
  else {
    c.words = [];
    for (const w of G.wordsIn(c.text).slice(0, 14)) c.words.push({ w: w.w, res: await D.lookup(w.w, c.text, w.start) });
  }
  if (cur !== c) return;
  c.vid = 'w:' + headword(c).toLowerCase();
  c.saved = !!(await DB.get('vocab', c.vid));
  c.ai = await DB.get('kv', aiKey(c));
  if (cur !== c) return;
  $('#sh-save').textContent = c.saved ? '★' : '☆';
  $('#sh-save').classList.toggle('on', c.saved);
  // Фразе словарь даёт только пословный разбор, связный перевод — у ИИ: при наличии ключа открываем сразу его
  setTab((S.answer === 'ai' || c.kind === 'phrase') && S.key ? 'ai' : 'dict');
}

function closeSheet() { ai?.abort(); cur = null; $('#sheet').hidden = true; clearMark(); }

function setTab(t) {
  tab = t;
  for (const b of $('#sh-tabs').children) b.classList.toggle('on', b.dataset.tab === t);
  if (t === 'dict') renderDictTab(); else renderAiTab();
  $('#sh-body').scrollTop = 0;
}

const first = c => c.res?.items[0];
function headword(c) {
  if (c.kind === 'phrase') return c.text;
  const it = first(c);
  if (!it) return c.res?.sepGuess?.verb || c.text;
  return (it.e.pos === 'n' && ART[it.e.g] ? ART[it.e.g] + ' ' : '') + it.e.w;
}
const wordTr = c => first(c) ? shortTr(first(c)) : (c.res?.compound || []).map(p => shortTr({ e: p.entries[0] || {} })).filter(Boolean).join(' + ');
const shortTr = it => it ? (it.e.t?.length ? it.e.t.join('; ') : (it.e.x || '').split('\n')[0].slice(0, 120)) : '';

function entryHtml(it, word) {
  const e = it.e;
  let h = '<div class="entry"><div class="hw">';
  if (e.pos === 'n' && ART[e.g]) h += `<span class="g g-${e.g}">${ART[e.g]}</span> `;
  h += `<span class="lemma">${esc(e.w)}</span>${POS[e.pos] ? `<span class="pos">${POS[e.pos]}</span>` : ''}</div>`;
  if (e.pos === 'n' && e.pl) h += `<div class="gram">мн. ч.: ${e.pl === '-' ? 'нет или совпадает' : 'die ' + esc(e.pl)}</div>`;
  if (it.forms) h += `<div class="gram">${esc(it.forms.pr3)} · ${esc(it.forms.pt)} · ${it.forms.aux === 's' ? 'ist' : 'hat'} ${esc(it.forms.pp)}</div>`;
  const v = it.via;
  if (v?.sep && v.verb) h += `<div class="via">отделяемая приставка: <b>${esc(v.verb)} … ${esc(v.sep)}</b> → ${esc(e.w)}</div>`;
  else if (v?.sep) h += `<div class="via">отделяемая приставка: <b>${esc(word)} … ${esc(v.sep)}</b> → ${esc(e.w)}${v.tag ? ', ' + v.tag : ''}</div>`;
  else if (v?.tag) h += `<div class="via"><b>${esc(word)}</b> — ${esc(v.tag)}</div>`;
  if (e.t?.length) h += `<div class="tr">${esc(e.t.join('; '))}</div>`;
  if (e.x) h += `<div class="raw">${esc(e.x)}</div>${e.x.length > 280 ? '<button class="more">показать полностью</button>' : ''}`;
  if (it.missing) h += '<div class="tr muted">Перевода в словарях нет — откройте ИИ-разбор.</div>';
  if (e.d && e.d !== 'base' && dictNames[e.d]) h += `<div class="src">${esc(dictNames[e.d])}</div>`;
  return h + '</div>';
}

function renderDictTab() {
  const c = cur, body = $('#sh-body');
  if (!c) return;
  if (c.kind === 'phrase') {
    body.innerHTML = `<div class="phrase-q" lang="de">${esc(c.text)}</div>` + c.words.map(x => {
      const it = x.res.items[0];
      const lemma = it ? (ART[it.e.g] ? ART[it.e.g] + ' ' : '') + it.e.w : null;
      return `<div class="wline"><b>${esc(x.w)}</b>${lemma && lemma.toLowerCase() !== x.w.toLowerCase() ? ` <span class="muted">→ ${esc(lemma)}</span>` : ''} — ${it ? esc(shortTr(it)) : '<span class="muted">нет в словаре</span>'}</div>`;
    }).join('') + '<p class="hint">Это перевод по словам. Связный разбор фразы — на вкладке «ИИ-разбор».</p>';
    return;
  }
  const r = c.res;
  let h = '';
  if (r.sepGuess) {
    const g = r.sepGuess;
    h += `<div class="note-box">Похоже на глагол с отделяемой приставкой: <b>${esc(g.particle)}</b> + <b>${esc(g.base)}</b> = <b>${esc(g.verb)}</b>. В словаре его нет — посмотрите ИИ-разбор.</div>`;
  }
  h += r.items.slice(0, 8).map(it => entryHtml(it, c.text)).join('');
  if (r.compound) {
    h += `<div class="note-box">Составное слово: <b>${r.compound.map(p => esc(p.entries[0]?.w || p.k)).join(' + ')}</b></div>`;
    h += r.compound.map(p => p.entries[0] ? entryHtml({ e: p.entries[0] }, p.k) : '').join('');
  }
  if (!r.items.length && !r.compound && !r.sepGuess) {
    h += `<div class="entry"><div class="hw"><span class="lemma">${esc(c.text)}</span></div>
      <div class="tr muted">В подключённых словарях этого слова нет. Откройте ИИ-разбор или подключите словарь побольше в разделе «Словари».</div></div>`;
  }
  body.innerHTML = h;
}

let hash = s => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; };
const aiKey = c => `ai:${hash([c.kind, c.text, c.sentence, S.level].join('|'))}`;

function md(s) {
  let out = '', ul = false;
  for (const raw of s.split('\n')) {
    const li = raw.match(/^\s*[-•*]\s+(.*)/), hd = raw.match(/^#{1,4}\s+(.*)/);
    const t = esc(li ? li[1] : hd ? hd[1] : raw).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>').replace(/`(.+?)`/g, '<b>$1</b>');
    if (li) { if (!ul) { out += '<ul>'; ul = true; } out += `<li>${t}</li>`; continue; }
    if (ul) { out += '</ul>'; ul = false; }
    if (hd) out += `<h5>${t}</h5>`; else if (t.trim()) out += `<p>${t}</p>`;
  }
  return out + (ul ? '</ul>' : '');
}

async function renderAiTab() {
  const c = cur, body = $('#sh-body');
  if (!c) return;
  const head = c.kind === 'phrase' ? `<div class="phrase-q" lang="de">${esc(c.text)}</div>` : '';
  if (c.ai) return body.innerHTML = head + `<div class="ai">${md(c.ai)}</div>`;
  if (!S.key) {
    body.innerHTML = head + `<p>Для ИИ-разбора нужен ключ Google Gemini (бесплатный) или Claude. Он хранится только на этом устройстве.</p><button class="primary" data-go="settings">Открыть настройки</button>`;
    return;
  }
  if (c.loading) return;
  c.loading = true;
  body.innerHTML = head + '<p class="muted">Разбираю…</p>';
  ai = new AbortController();
  let acc = '';
  try {
    const text = await explain({
      key: S.key, model: S.model, level: S.level, kind: c.kind, text: c.text, sentence: c.sentence, signal: ai.signal,
      onText: d => { acc += d; if (cur === c && tab === 'ai') body.innerHTML = head + `<div class="ai">${md(acc)}</div>`; },
    });
    c.ai = text;
    await DB.put('kv', text, aiKey(c));
    if (c.saved) { const v = await DB.get('vocab', c.vid); if (v) { v.ai = text; await DB.put('vocab', v); } }
    if (cur === c && tab === 'ai') body.innerHTML = head + `<div class="ai">${md(text)}</div>`;
  } catch (err) {
    if (cur === c && tab === 'ai' && !ai.signal.aborted) body.innerHTML = head + `<div class="note-box">${esc(err.message || 'Не удалось получить ответ')}</div>`;
  } finally { c.loading = false; }
}

async function toggleSave() {
  const c = cur; if (!c) return;
  if (c.saved) { await DB.del('vocab', c.vid); await Y.forget(c.vid); }
  else {
    const it = c.kind === 'word' ? first(c) : null;
    await DB.put('vocab', {
      id: c.vid, lemma: headword(c), seen: c.text, pos: it?.e.pos || (c.kind === 'phrase' ? 'phrase' : ''),
      t: c.kind === 'word' ? wordTr(c) : '', ctx: c.sentence, book: R?.meta.title || '', ai: c.ai || '', added: Date.now(),
    });
  }
  c.saved = !c.saved; Y.touch();
  $('#sh-save').textContent = c.saved ? '★' : '☆';
  $('#sh-save').classList.toggle('on', c.saved);
  toast(c.saved ? 'Сохранено в «Мои слова»' : 'Убрано из «Моих слов»', 1400);
}

function initSheet() {
  $('#sh-tabs').addEventListener('click', e => { const b = e.target.closest('button'); if (b && cur) setTab(b.dataset.tab); });
  $('#sh-close').onclick = closeSheet;
  $('#sh-save').onclick = toggleSave;
  $('#sh-body').addEventListener('click', e => {
    if (e.target.classList.contains('more')) { e.target.previousElementSibling.classList.add('open'); e.target.remove(); }
  });
}

// ---------- мои слова

async function vocabRows() { return (await DB.all('vocab')).sort((a, b) => b.added - a.added); }
async function renderVocab() {
  const q = $('#vocab-q').value.trim().toLowerCase();
  const rows = (await vocabRows()).filter(v => !q || (v.lemma + ' ' + v.t).toLowerCase().includes(q));
  $('#vocab-list').innerHTML = rows.map(v => `
    <div class="item" data-id="${esc(v.id)}"><div class="main">
      <div class="w" lang="de">${esc(v.lemma)}</div>
      <div>${esc(v.t) || (v.ai ? '<span class="muted">есть ИИ-разбор</span>' : '')}</div>
      ${v.ctx ? `<div class="ctx" lang="de">${esc(v.ctx)}</div>` : ''}
    </div><div class="acts"><button data-act="del" aria-label="Удалить">×</button></div></div>`).join('')
    || '<div class="empty">Слов пока нет. Нажмите на слово в книге и отметьте его звёздочкой.</div>';
}
function initVocab() {
  $('#vocab-q').addEventListener('input', debounce(renderVocab, 150));
  $('#vocab-list').addEventListener('click', async e => {
    const b = e.target.closest('[data-act=del]'); if (!b) return;
    const id = b.closest('.item').dataset.id;
    await DB.del('vocab', id); await Y.forget(id); Y.touch(); renderVocab();
  });
  const csv = s => `"${String(s || '').replace(/"/g, '""')}"`;
  const flat = s => String(s || '').replace(/[\t\n\r]+/g, ' ');
  $('#vx-anki').onclick = async () => {
    const rows = await vocabRows();
    if (!rows.length) return toast('Нечего экспортировать');
    download('buecherleser-anki.txt', '#separator:tab\n#html:true\n' + rows.map(v =>
      `${flat(v.lemma)}\t${flat(esc(v.t))}${v.ctx ? `<br><i>${flat(esc(v.ctx))}</i>` : ''}`).join('\n'));
  };
  $('#vx-csv').onclick = async () => {
    const rows = await vocabRows();
    if (!rows.length) return toast('Нечего экспортировать');
    download('buecherleser-slova.csv', '﻿' + ['Слово;Перевод;Контекст;Книга', ...rows.map(v => [v.lemma, v.t, v.ctx, v.book].map(csv).join(';'))].join('\r\n'), 'text/csv');
  };
  $('#vx-json').onclick = async () => download('buecherleser-slova.json', JSON.stringify({ format: 'buecherleser-vocab-1', words: await vocabRows() }, null, 1), 'application/json');
  $('#vx-import').onclick = () => $('#vocab-file').click();
  $('#vocab-file').onchange = async e => {
    const f = e.target.files[0]; e.target.value = '';
    if (!f) return;
    try {
      const j = JSON.parse(await f.text()), words = Array.isArray(j) ? j : j.words;
      let n = 0;
      for (const v of words) if (v?.id && v.lemma) { await DB.put('vocab', v); n++; }
      toast(`Импортировано слов: ${n}`); Y.touch(); renderVocab();
    } catch { toast('Не удалось прочитать файл'); }
  };
}

// ---------- словари

async function renderDicts() {
  const list = await D.listDicts();
  dictNames = Object.fromEntries(list.map(d => [d.id, d.name]));
  $('#dict-list').innerHTML = list.map(d => `
    <div class="item" data-id="${d.id}"><div class="main">
      <div class="w">${esc(d.name)}</div>
      <div class="muted">${d.count.toLocaleString('ru')} статей${d.builtin ? ' · встроенный' : ''}</div>
    </div><div class="acts">
      <label><input type="checkbox" data-act="on" ${d.enabled !== false ? 'checked' : ''}> вкл.</label>
      <button data-act="export">Экспорт</button>
      ${d.builtin ? '' : '<button data-act="del">Удалить</button>'}
    </div></div>`).join('');
}
function initDicts() {
  $('#dict-add').onclick = () => $('#dict-file').click();
  $('#dict-file').onchange = async e => {
    const files = [...e.target.files]; e.target.value = '';
    if (!files.length) return;
    toast('Импортирую словарь…', 60000);
    try {
      const done = await D.importFiles(files);
      toast(done.map(d => `«${d.name}»: ${d.count.toLocaleString('ru')} статей`).join('; '));
    } catch (err) { toast(err.message, 6000); }
    renderDicts();
  };
  $('#dict-list').addEventListener('click', async e => {
    const el = e.target.closest('[data-act]'); if (!el) return;
    const id = el.closest('.item').dataset.id;
    if (el.dataset.act === 'on') return D.setEnabled(id, el.checked);
    if (el.dataset.act === 'export') { const x = await D.exportDict(id); return download(x.name + '.json', x.json, 'application/json'); }
    if (el.dataset.act === 'del' && confirm('Удалить этот словарь?')) { toast('Удаляю…', 60000); await D.removeDict(id); toast('Словарь удалён'); renderDicts(); }
  });
}

// ---------- настройки

function renderSettings() {
  for (const r of $$('input[name=answer]')) r.checked = r.value === S.answer;
  $('#set-key').value = S.key;
  $('#set-model').innerHTML = modelsFor(S.key).map(([id, n]) => `<option value="${id}" ${id === S.model ? 'selected' : ''}>${n}</option>`).join('');
  $('#set-level').value = S.level;
  renderCloud(); renderInstall(); Y.warmUp();
}

// Синхронизация и копия файлом
const ago = t => { const m = Math.round((Date.now() - t) / 60000); return m < 1 ? 'только что' : m < 60 ? m + ' мин назад' : new Date(t).toLocaleString('ru'); };
function renderCloud() {
  const u = Y.cloud.user, el = $('#cloud-status');
  el.textContent = !Y.cloud.configured ? 'Облако не настроено.'
    : !u ? 'Вход не выполнен: прогресс хранится только на этом устройстве.'
    : Y.cloud.error ? `${u.email}. ${Y.cloud.error}`
    : `${u.email}. ${Y.cloud.last ? 'Синхронизировано ' + ago(Y.cloud.last) : 'Синхронизация…'}`;
  $('#cloud-in').hidden = !!u || !Y.cloud.configured;
  $('#cloud-sync').hidden = $('#cloud-out').hidden = !u;
}
function initCloud() {
  Y.setHooks({
    settings: s => { S = { ...DEF, ...s, look: { ...DEF.look, ...s.look } }; applyLook(); if (current === 'settings') renderSettings(); },
    lesen: states => { if (R?.test) { const t = R.test.states; for (const k of Object.keys(t)) delete t[k]; Object.assign(t, states); } },
    changed: () => { if (current === 'library') renderLibrary(); else if (current === 'vocab') renderVocab(); },
    status: renderCloud,
  });
  $('#cloud-in').onclick = async () => {
    try { await Y.signIn(); if (Y.cloud.user) toast(Y.cloud.error || 'Вход выполнен, прогресс синхронизирован'); }
    catch (err) { toast(err.message, 7000); }
  };
  $('#cloud-sync').onclick = async () => { toast('Синхронизация…', 20000); toast(await Y.sync() ? 'Синхронизировано' : Y.cloud.error, 4000); };
  $('#cloud-out').onclick = async () => { await Y.signOut(); toast('Вы вышли. Данные на устройстве остались'); };
  $('#bk-save').onclick = async () => download(`buecherleser-${new Date().toISOString().slice(0, 10)}.json`, await Y.backupText(), 'application/json');
  $('#bk-load').onclick = () => $('#bk-file').click();
  $('#bk-file').onchange = async e => {
    const f = e.target.files[0]; e.target.value = '';
    if (!f) return;
    try { const r = await Y.restore(await f.text()); toast(`Восстановлено: книг с закладкой — ${r.books}, слов — ${r.words}`, 5000); }
    catch (err) { toast(err instanceof SyntaxError ? 'Не удалось прочитать файл' : err.message, 5000); }
  };
}

// Установка на главный экран и полный экран
let installEvt = null;
let swReg = null;
async function checkUpdate() {
  if (!swReg) return toast('Обновление доступно, когда приложение открыто с сайта');
  toast('Проверяю…', 20000);
  try { await swReg.update(); } catch { return toast('Нет связи с сайтом'); }
  toast(swReg.installing || swReg.waiting ? 'Загружаю обновление — приложение перезапустится само' : 'Установлена последняя версия', 6000);
}
const standalone = () => matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches || navigator.standalone === true;
function renderInstall() {
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
  $('#inst-status').textContent = standalone() ? 'Приложение установлено и открыто в своём окне, без адресной строки.'
    : installEvt ? 'Установленное приложение открывается с главного экрана на весь экран и работает без сети.'
    : ios ? 'На iPhone: кнопка «Поделиться» → «На экран „Домой“». После этого читалка открывается на весь экран.'
    : 'Чтобы открывать на весь экран с главного экрана: меню браузера → «Установить приложение» или «Добавить на главный экран».';
  $('#inst-btn').hidden = !installEvt || standalone();
  window.caches?.keys().then(ks => {
    const v = Math.max(0, ...ks.filter(k => k.startsWith('buecherleser-v')).map(k => +k.slice(14)));
    $('#ver').textContent = v ? `Версия ${v}. Обновления приходят сами при открытии приложения.` : '';
  });
  $('#fs-btn').hidden = standalone() || !document.documentElement.requestFullscreen;
  $('#fs-btn').textContent = document.fullscreenElement ? 'Выйти из полного экрана' : 'На весь экран';
}
function initInstall() {
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; renderInstall(); });
  addEventListener('appinstalled', () => { installEvt = null; renderInstall(); toast('Приложение установлено'); });
  document.addEventListener('fullscreenchange', renderInstall);
  $('#inst-btn').onclick = async () => { if (!installEvt) return; installEvt.prompt(); await installEvt.userChoice; installEvt = null; renderInstall(); };
  $('#upd-btn').onclick = checkUpdate;
  $('#fs-btn').onclick = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => toast('Браузер не разрешил полный экран'));
}

// Встроенные книги для чтения: ставятся один раз; удалённая книга сама не возвращается
const BUILTIN = ['strom-verstehen', 'der-neue-kollege', 'hausnummer-12', 'kleine-geschichten'];
async function installBuiltin() {
  const have = (await DB.get('kv', 'builtin')) || [];
  let added = 0;
  for (const name of BUILTIN) {
    if (have.includes(name)) continue;
    try {
      const r = await fetch(`books/${name}.fb2`);
      if (!r.ok) continue;
      await storeBook(parseFb2Text(await r.text(), name));
      have.push(name); added++;
    } catch { /* нет сети — попробуем при следующем запуске */ }
  }
  if (added) { await DB.put('kv', have, 'builtin'); if (current === 'library') renderLibrary(); }
}
function initSettings() {
  $('#set-models').addEventListener('click', async e => {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      const n = await refreshModels($('#set-key').value.trim());
      if (!modelsFor(S.key).some(m => m[0] === S.model)) { S.model = 'auto'; saveSettings(); }
      renderSettings();
      toast(`Список обновлён: моделей — ${n}`);
    } catch (err) { toast(err.message); }
    btn.disabled = false;
  });
  $('#v-settings').addEventListener('change', e => {
    if (e.target.type === 'file') return;
    S.answer = $('input[name=answer]:checked')?.value || 'dict';
    const key = $('#set-key').value.trim(), swap = modelsFor(key) !== modelsFor(S.key);
    S.key = key; S.model = swap ? modelsFor(key)[0][0] : $('#set-model').value; S.level = $('#set-level').value;
    if (swap) renderSettings();
    saveSettings();
  });
}

// ---------- запуск

async function start() {
  const s = await DB.get('kv', 'settings');
  S = { ...DEF, ...s, look: { ...DEF.look, ...s?.look } };
  userFonts = (await DB.get('kv', 'fonts')) || [];
  for (const f of userFonts) addFont(f).catch(() => {});
  applyLook(false);
  initLook(); initLibrary(); initReader(); initSheet(); initVocab(); initDicts(); initSettings(); initCloud(); initInstall();
  history.replaceState({ v: 'library' }, '');

  if (!(await DB.get('kv', 'demo'))) {
    await DB.put('kv', 1, 'demo');
    if (!(await DB.all('books')).length) await storeBook(parseFb2Text(DEMO_FB2));
  }
  for (const b of L.BOOKS) {
    const old = await DB.get('books', b.id);
    await DB.put('books', { ...L.bookMeta(b), ...(old && { added: old.added, opened: old.opened, pos: old.pos, progress: old.progress }) });
  }
  await renderLibrary();
  installBuiltin();
  Y.resume();
  const installed = await D.ensureBase(p => toast(`Устанавливаю словарь… ${Math.round(p * 100)}%`, 120000));
  if (installed) toast('Словарь установлен', 2000);
  dictNames = Object.fromEntries((await D.listDicts()).map(d => [d.id, d.name]));
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    // Установленное приложение подолгу живёт в фоне и само не перезагружается: проверяем обновление при каждом возврате
    // и перезагружаемся, как только новая версия взяла управление.
    const sw = navigator.serviceWorker, had = !!sw.controller;
    sw.register('sw.js').then(reg => { swReg = reg; }).catch(() => {});
    sw.addEventListener('controllerchange', () => {
      if (!had) return;
      if (tTimer) return toast('Обновление загружено — заработает после перезапуска приложения', 6000);
      savePos.flush(); location.reload();
    });
    let checked = Date.now();
    document.addEventListener('visibilitychange', () => {
      if (document.hidden || Date.now() - checked < 60000) return;
      checked = Date.now(); swReg?.update().catch(() => {});
    });
  }
}
start().catch(err => { console.error(err); toast('Ошибка запуска: ' + err.message, 8000); });
