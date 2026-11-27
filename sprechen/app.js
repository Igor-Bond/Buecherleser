// Приложение «Sprechen B1» — тренировка устной части DTZ. Отдельная страница со своей установкой на телефон,
// но данные общие с Bücherleser (тот же сайт, та же база): ключ ИИ, выбранные голоса, скорость речи и прогресс.
// Разметку экранов дают js/sprechen.js и js/trainer.js, здесь — их показ, микрофон, голос и сохранение.
import * as DB from '../js/db.js';
import * as Sp from '../js/speak.js';
import * as V from '../js/voicein.js';
import * as SPR from '../js/sprechen.js';
import * as TR from '../js/trainer.js';
import { explain } from '../js/llm.js';
import { TEST_LINES, nowText, speechBox } from '../js/hoeren.js';

const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const clock = sec => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
function toast(msg, ms = 3200) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, ms);
}
// Ответ ИИ приходит в разметке Markdown: абзацы, списки, жирный
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

// ---------- общие с Bücherleser данные. Обе страницы могут быть открыты сразу, поэтому в базу пишется только то, что изменилось здесь:
// запись читается заново, в ней заменяются свои поля — чужие (ответы Lesen и Hören, оформление) остаются как были.
let S = { key: '', model: '', level: 'A2', rate: 1 };
const setPending = {};
const flushSettings = debounce(async () => {
  const cur = (await DB.get('kv', 'settings')) || {};
  Object.assign(cur, setPending, { at: Date.now() });
  for (const k of Object.keys(setPending)) delete setPending[k];
  await DB.put('kv', cur, 'settings');
}, 250);
function saveSettings(patch = { rate: S.rate }) { Object.assign(S, patch); Object.assign(setPending, patch); flushSettings(); }

let LES = {}; // прогресс: запись «lesen» целиком, свои ключи — sp00 (тренажёр фраз) и s01…s08 (наборы заданий)
const dirty = new Set();
const persist = debounce(async () => {
  const cur = (await DB.get('kv', 'lesen')) || {};
  for (const v of dirty) cur[v] = LES[v];
  dirty.clear();
  await DB.put('kv', cur, 'lesen');
}, 300);
let voicePrefs = {};
const T = {
  get states() { return LES; },
  st: vid => LES[vid] ??= { ans: {}, used: 0 },
  rate: () => S.rate || 1, voices: () => voicePrefs,
  save: vid => { LES[vid].at = Date.now(); dirty.add(vid); persist(); },
};

// Скорость речи и проверка голосов
function voiceAct(act, root) {
  if (act === 'rate-' || act === 'rate+') {
    saveSettings({ rate: +clamp((S.rate || 1) + (act === 'rate+' ? 0.1 : -0.1), 0.6, 1.3).toFixed(1) });
    const out = root.querySelector('.rate'); if (out) out.textContent = S.rate.toFixed(1).replace('.', ',') + '×';
  } else if (act === 'voice-test') {
    if (Sp.status() === 'none' || Sp.status() === 'off') toast('Немецкого голоса на устройстве нет — как его установить, написано выше', 6000);
    else Sp.speak(TEST_LINES, { rate: S.rate || 1 }).then(ok => { if (!ok && Sp.wasSilent()) toast('Голос не начал говорить: проверьте звук и установлен ли немецкий голос', 7000); });
  }
}
// Какой голос считать женским и какой мужским — выбор пользователя; хранится только на этом устройстве
function voicePick(e) {
  const sel = e.target.closest('select[data-voice]');
  if (!sel) return;
  voicePrefs = { ...voicePrefs, [sel.dataset.voice]: sel.value || undefined };
  Sp.setPrefs(voicePrefs); DB.put('kv', voicePrefs, 'voices');
}

// ---------- Экраны. Середина прокручивается, кнопки стоят в нижней полосе.
// Каждый экран — запись в истории браузера, поэтому кнопка «назад» телефона возвращает на предыдущий экран, а не закрывает приложение.
const recBlobs = new Map(); // записи ответов живут, пока открыта страница приложения
const sxBody = $('#sx-body'), sxBar = $('#sx-bar');
let X = null; // { T, scr, set, part, sess, cur, ui, ex } — scr: hub | home | card | done | me | sets | task | exsel | exam | exdone | voice
let recTick = 0, exTick = 0, spAi = null, sxPlaying = false;
const sxCtx = () => ({ st: X.T.st, day: TR.today(), md, hasKey: () => !!S.key, blob: (id, part) => recBlobs.get(id + part) || '', speechBox: () => speechBox(X.T), set: () => ({ key: S.key || '', level: S.level || 'A2' }) });
const trEnv = () => ({ canDictate: V.canDictate, st: trSt() });
const trSt = () => X.T.st('sp00');
function trSave() { const st = trSt(); delete st.dr; X.T.save('sp00'); } // st.dr — счёт прежнего тренажёра, он больше не нужен
function sxDraw(keep = false) {
  const st = trSt(), day = TR.today(), c = sxCtx(), set = X.set && SPR.setOf(X.set);
  if (X.scr === 'card') { X.cur = X.sess ? TR.current(X.sess, st, st.me) : null; if (!X.cur) X.scr = X.sess ? 'done' : 'home'; }
  if (X.scr === 'done' && !X.sess) X.scr = 'home';
  if ((X.scr === 'task' || X.scr === 'exam' || X.scr === 'exdone') && !set || X.scr === 'exam' && !X.ex) X.scr = 'hub';
  const v = ({
    hub: () => SPR.hubView(c), ref: () => SPR.refView(), sets: () => SPR.setsView(c), task: () => SPR.taskView(set, X.part, c), voice: () => SPR.voiceView(c),
    exsel: () => SPR.exselView(c), exam: () => SPR.examView(set, X.ex), exdone: () => SPR.exdoneView(set, c),
    home: () => ({ title: 'Phrasentrainer', ...TR.homeView(st, day, trEnv()) }), card: () => ({ title: 'Phrasentrainer', ...TR.cardView(X.cur, X.ui, X.sess, trEnv()) }),
    done: () => ({ title: 'Phrasentrainer', ...TR.doneView(X.sess, st, day) }), me: () => ({ title: 'Meine Daten', ...TR.meView(st.me) }),
  })[X.scr]();
  const top = sxBody.scrollTop;
  $('#sx-title').textContent = v.title; sxBody.innerHTML = v.body; sxBar.innerHTML = v.bar; $('#sx-pos').textContent = v.pos;
  sxBar.hidden = !v.bar;
  sxBody.scrollTop = keep ? top : 0;
  $('#v-sprechen').dataset.scr = X.scr;
  $('#sx-back').hidden = X.scr === 'hub';
}
// Уходим с экрана: микрофон и голос замолкают, таймеры останавливаются. Разбор ИИ не прерывается — он допишется в состояние набора.
function sxLeave() {
  V.stopAll(); Sp.stop(); sxPlaying = false;
  clearInterval(recTick); clearInterval(exTick);
}
// mode: push — новый экран в истории, replace — вместо текущего, none — тот же экран (следующая карточка)
function sxGo(scr, p = {}, mode = 'push') {
  sxLeave();
  Object.assign(X, p, { scr });
  // карточку и прогон из истории не восстановить: «вперёд» вернёт на их список
  const state = { v: 'sprechen', x: { scr: scr === 'card' || scr === 'done' ? 'home' : scr === 'exam' ? 'exsel' : scr, set: X.set, part: X.part } };
  if (mode === 'push') history.pushState(state, ''); else if (mode === 'replace') history.replaceState(state, '');
  sxDraw();
  if (scr === 'voice' && Sp.status() !== 'ok') Sp.ready().then(() => { if (X.scr === 'voice') sxDraw(true); });
}
// --- тренажёр фраз
// Голос: фразу читает один голос, реплику собеседника — другой. Молчание при автозапуске не считается ошибкой.
function trSpeak(lines, byUser) {
  V.stopAll();
  if (Sp.status() === 'none' || Sp.status() === 'off') { if (byUser) toast('На устройстве нет немецкого голоса. Как его установить — в разделе «Stimme»', 7000); return; }
  Sp.speak(lines, { rate: S.rate || 1 }).then(ok => { if (!ok && byUser && Sp.wasSilent()) toast('Голос не начал говорить: проверьте звук и немецкий голос', 6000); });
}
function trCard(mode = 'none') {
  X.ui = { phase: 'ask' };
  sxGo('card', {}, mode);
  if (X.scr !== 'card') return;
  const { p, step } = X.cur;
  if (step === 'rep') trSpeak([['f1', p.de]]); else if (step === 'talk') trSpeak([['m1', p.q]]);
}
// Микрофон слушает, пока не нажали «Готово», не наступила тишина после слов или фраза не совпала с одной из принятых
function trListen() {
  const p = X.cur.p, prev = X.ui.phase === 'res' ? X.ui.res : null; // prev — это повтор после ошибки: в счёт он не идёт
  let heard = '', hit = 0;
  Sp.stop();
  X.ui = { phase: 'listen', live: '', prev };
  sxDraw(true);
  V.dictate({
    wait: 12000, silence: 3500,
    onText: t => {
      heard = t;
      const out = sxBody.querySelector('.tr-live'); if (out) out.textContent = t || '…';
      if (!hit && TR.judge(p, t).ok) hit = setTimeout(() => { if (V.busy() === 'dict') V.stopAll(); }, 700);
    },
    onEnd: err => {
      clearTimeout(hit);
      if (X.scr !== 'card' || X.cur?.p.key !== p.key || X.ui.phase !== 'listen') return;
      if (err) toast(err.message, 7000);
      const r = TR.judge(p, heard);
      X.ui = { phase: 'res', res: prev ? { ...prev, heard: r.heard || prev.heard, text: r.heard ? r.text : prev.text, marks: r.heard ? r.marks : prev.marks, retry: r.ok } : r };
      sxDraw();
      if (!r.ok && !prev) trSpeak([['f1', p.de]]);
    },
  });
}
function trNext(ok) {
  TR.answer(X.sess, trSt(), ok); trSave();
  trCard();
}
function trClick(el) {
  const act = el.dataset.tr, st = trSt(), day = TR.today();
  if (act === 'start' || act === 'block' || act === 'more') {
    const s = TR.startSession(st, day, act === 'block' ? el.dataset.id : act === 'more' ? X.sess.block || undefined : undefined);
    if (!s) return toast('Здесь пока нечего повторять');
    X.sess = s; trCard(act === 'more' ? 'replace' : 'push');
  } else if (act === 'home') history.back();
  else if (act === 'me') sxGo('me');
  else if (act === 'reset') {
    if (!confirm('Стереть расписание и ступени всех фраз? «Мои данные» останутся.')) return;
    delete st.tr; trSave(); sxDraw();
  } else if (act === 'say') trListen();
  else if (act === 'stop') V.stopAll();
  else if (act === 'hear') trSpeak([['f1', X.cur.p.de]], true);
  else if (act === 'skip') {
    const p = X.cur.p;
    X.ui = { phase: 'res', res: { ok: false, heard: '', text: p.de, marks: [], skip: true, ask: !V.canDictate } };
    sxDraw(); trSpeak([['f1', p.de]]);
  } else if (act === 'yes') { if (X.ui.res.ask) trNext(true); else { Object.assign(X.ui.res, { ok: true, self: true }); sxDraw(true); } }
  else if (act === 'no') trNext(false);
  else if (act === 'next') trNext(X.ui.res.ok);
}
// «Мои данные»: поле сохраняется сразу, список фраз под формой обновляется на месте
const trMe = e => {
  const el = e.target.closest?.('[data-me]');
  if (!el || !X || X.scr !== 'me') return;
  const st = trSt(), k = el.dataset.me, me = st.me = { ...TR.PROFILE.def, ...(st.me || {}) };
  me[k] = k === 'hobby' ? +el.value : el.value;
  if (k === 'land') {
    const lang = TR.PROFILE.lands.find(l => l[0] === el.value)?.[5];
    const d = TR.PROFILE.def, auto = [d.weitere, 'ein bisschen Englisch'];
    if (lang) { me.sprache = lang; if (auto.includes(me.weitere)) me.weitere = auto[lang === 'Russisch' ? 1 : 0]; } // «Russisch, außerdem Russisch» не предлагать
    trSave(); return sxDraw(true);
  }
  sxBody.querySelector('.tr-prev').innerHTML = TR.mePreview(me);
  trSave();
};
sxBody.addEventListener('change', trMe);
sxBody.addEventListener('input', debounce(trMe, 400));

// --- экран задания: запись, диктовка, самопроверка, разбор ИИ, образец
// Подвести блок под верх экрана. scrollIntoView здесь нельзя: он сдвигает и сам экран, и нижние кнопки уезжают за край.
function sxShow(el) { sxBody.scrollTo({ top: sxBody.scrollTop + el.getBoundingClientRect().top - sxBody.getBoundingClientRect().top - 44, behavior: 'smooth' }); }
function spClick(el) {
  const T = X.T, vid = X.set, part = X.part, st = T.st(vid), box = sxBody.querySelector('.sp'), set = SPR.setOf(vid);
  if (el.dataset.chk) {
    const k = el.dataset.chk;
    st.chk ||= {};
    if (st.chk[k]) delete st.chk[k]; else st.chk[k] = true;
    el.classList.toggle('on', !!st.chk[k]);
    box.querySelector('.sp-n').textContent = SPR.countText(st, part);
    return T.save(vid);
  }
  const act = el.dataset.sp;
  if (act === 'sample') {
    (st.show ||= {})[part] = true; T.save(vid);
    box.querySelector('.sp-sample').innerHTML = SPR.sampleHtml(set, part);
  } else if (act === 'play') {
    const now = box.querySelector('.sx-now'), paint = on => { sxPlaying = on; if (el.isConnected) { el.textContent = on ? '■ Остановить' : '▶ Прослушать'; el.classList.toggle('on', on); } if (!on && now) now.textContent = ''; };
    if (sxPlaying) return Sp.stop();
    if (Sp.status() === 'none' || Sp.status() === 'off') return toast('На устройстве нет немецкого голоса. Как его установить — в разделе «Stimme»', 7000);
    V.stopAll(); paint(true);
    Sp.speak(set[part].sample, { rate: S.rate || 1, onLine: code => { if (now) now.textContent = nowText(code); } }).then(ok => { paint(false); if (!ok && Sp.wasSilent()) toast('Голос не начал говорить: проверьте звук и немецкий голос', 6000); });
  } else if (act === 'rec') {
    if (V.busy() === 'rec') return V.stopAll();
    Sp.stop();
    const off = () => { clearInterval(recTick); if (el.isConnected) { el.textContent = '● Записать ответ'; el.classList.remove('on'); } };
    V.record({
      onStop: blob => {
        off();
        if (!blob) return;
        const old = recBlobs.get(vid + part); if (old) URL.revokeObjectURL(old);
        const url = URL.createObjectURL(blob); recBlobs.set(vid + part, url);
        const p = box.querySelector('.sp-audio');
        if (p?.isConnected) { p.querySelector('audio').src = url; p.classList.add('has'); sxShow(p); }
      },
    }).then(() => {
      const t0 = Date.now(), tick = () => { el.textContent = `■ Остановить запись · ${clock(Math.round((Date.now() - t0) / 1000))}`; };
      el.classList.add('on'); tick();
      clearInterval(recTick); recTick = setInterval(tick, 500);
    }).catch(err => { off(); toast(err.message, 6000); });
  } else if (act === 'dict') {
    if (V.busy() === 'dict') return V.stopAll();
    Sp.stop();
    const ta = box.querySelector('.sp-text'), base = ta.value.trim();
    el.textContent = '■ Закончить'; el.classList.add('on');
    sxShow(ta);
    V.dictate({
      onText: t => { ta.value = (base ? base + ' ' : '') + t; ta.scrollTop = ta.scrollHeight; },
      onEnd: err => {
        if (el.isConnected) { el.textContent = '● Продиктовать'; el.classList.remove('on'); }
        (st.txt ||= {})[part] = ta.value.trim(); T.save(vid);
        if (err) toast(err.message, 7000);
      },
    });
  } else if (act === 'ai') spAnalyse(vid, part, box);
}
async function spAnalyse(vid, part, box) {
  const T = X.T, st = T.st(vid), text = box.querySelector('.sp-text').value.trim(), out = box.querySelector('.sp-ai');
  if (text.split(/\s+/).length < 8) return toast('Сначала продиктуйте или напечатайте ответ — хотя бы пару предложений', 5000);
  if (!S.key) return toast('Для разбора нужен ключ ИИ: Настройки → ИИ-разбор', 6000);
  V.stopAll(); spAi?.abort();
  const ctl = spAi = new AbortController();
  let acc = '';
  out.innerHTML = '<p class="muted">Разбираю ответ…</p>';
  sxShow(out);
  try {
    const res = await explain({
      key: S.key, model: S.model, sys: SPR.AI_SYSTEM(S.level), user: SPR.aiPrompt(SPR.setOf(vid), part, text), signal: ctl.signal, fast: true,
      onText: d => { acc += d; if (out.isConnected) out.innerHTML = md(acc); },
    });
    (st.ai ||= {})[part] = res; (st.txt ||= {})[part] = text; T.save(vid);
    if (out.isConnected) out.innerHTML = md(res);
  } catch (err) {
    if (ctl.signal.aborted) return;
    if (out.isConnected) out.innerHTML = st.ai?.[part] ? md(st.ai[part]) : '';
    toast(err.message, 7000);
  }
}
// напечатанный ответ сохраняется сам
sxBody.addEventListener('input', debounce(e => {
  const ta = e.target.closest?.('.sp-text');
  if (!ta || !X || X.scr !== 'task') return;
  (X.T.st(X.set).txt ||= {})[X.part] = ta.value.trim(); X.T.save(X.set);
}, 600));

// --- Prüfung: голос задаёт вопрос, после него включается распознавание; «Weiter» переходит к следующему вопросу
const exKeep = ex => { ex.buf = `${ex.buf} ${ex.heard}`.trim(); ex.heard = ''; };
function exAsk(fresh = true) {
  const ex = X.ex, tok = ++ex.tok, [, say] = SPR.examSteps(SPR.setOf(X.set))[ex.i];
  V.stopAll();
  if (fresh) ex.buf = '';
  ex.heard = ''; ex.phase = 'ask'; ex.live = ex.buf;
  sxDraw(!fresh);
  const listen = () => {
    if (X.ex !== ex || X.scr !== 'exam' || ex.tok !== tok) return;
    ex.phase = 'answer';
    const hint = sxBody.querySelector('.tr-hint'), last = ex.i === SPR.examSteps(SPR.setOf(X.set)).length - 1;
    if (hint) hint.textContent = `Говорите. Закончили — нажмите «${last ? 'Закончить' : 'Weiter'}».`;
    if (!V.canDictate) return;
    V.dictate({
      onText: t => { ex.heard = t; const out = sxBody.querySelector('.tr-live'); if (out) out.textContent = `${ex.buf} ${t}`.trim() || '…'; },
      onEnd: err => { if (err && X?.ex === ex && ex.tok === tok) toast(err.message, 7000); },
    });
  };
  if (Sp.status() === 'none' || Sp.status() === 'off') listen(); else Sp.speak([['f1', say]], { rate: S.rate || 1 }).then(listen);
}
function exStart(setId) {
  X.ex = { i: 0, tok: 0, phase: 'ask', buf: '', heard: '', sec: 0, t0: Date.now(), txt: { t1: '', t2: '', t3: '' } };
  sxGo('exam', { set: setId });
  const ex = X.ex;
  exTick = setInterval(() => { ex.sec = Math.round((Date.now() - ex.t0) / 1000); if (X.ex === ex && X.scr === 'exam') $('#sx-pos').textContent = clock(ex.sec); }, 1000);
  exAsk();
}
function exNext() {
  const ex = X.ex, steps = SPR.examSteps(SPR.setOf(X.set)), part = steps[ex.i][0];
  V.stopAll(); Sp.stop(); exKeep(ex);
  ex.txt[part] = `${ex.txt[part]} ${ex.buf}`.trim();
  if (ex.i < steps.length - 1) { ex.i++; return exAsk(); }
  // конец прогона: тексты ответов ложатся в задания набора (старый разбор к новому тексту не относится)
  const st = X.T.st(X.set);
  ex.tok++; ex.sec = Math.round((Date.now() - ex.t0) / 1000);
  for (const p of SPR.ORDER) if (ex.txt[p]) { (st.txt ||= {})[p] = ex.txt[p]; if (st.ai) delete st.ai[p]; }
  st.exam = { at: Date.now(), sec: ex.sec }; X.T.save(X.set);
  X.ex = null;
  sxGo('exdone', {}, 'replace');
}

function sxClick(el) {
  const act = el.dataset.sx;
  if (act === 'go') sxGo(el.dataset.scr);
  else if (act === 'hub') history.back();
  else if (act === 'task') sxGo('task', { set: el.dataset.set, part: el.dataset.part }, X.scr === 'task' ? 'replace' : 'push');
  else if (act === 'exam') exStart(el.dataset.set);
  else if (act === 'exnext') exNext();
  else if (act === 'exsay') { exKeep(X.ex); exAsk(false); }
  else if (act === 'reset') {
    if (!confirm('Стереть отметки, текст ответов и разбор всех трёх заданий этого набора?')) return;
    const keep = X.T.states[X.set]?.exam;
    X.T.states[X.set] = { ans: {}, used: 0, ...(keep ? { exam: keep } : {}) }; X.T.save(X.set);
    sxDraw();
  }
}
$('#v-sprechen').addEventListener('click', e => {
  if (!X) return;
  const q = s => e.target.closest(s);
  let b;
  if ((b = q('[data-tr]'))) trClick(b);
  else if ((b = q('[data-sx]'))) sxClick(b);
  else if ((b = q('[data-sp], [data-chk]'))) spClick(b);
  else if ((b = q('[data-t]'))) voiceAct(b.dataset.t, sxBody);
});
$('#sx-back').onclick = () => history.back();
sxBody.addEventListener('change', e => voicePick(e));
// ключ ИИ и уровень
sxBody.addEventListener('input', debounce(e => {
  const el = e.target.closest?.('[data-set]');
  if (el) saveSettings({ [el.dataset.set]: el.value.trim() });
}, 400));

// ---------- запуск
function applyLook(look) {
  if (!look?.bg || !look?.fg) return; // оформление — то же, что выбрано в Bücherleser
  const st = document.documentElement.style, n = parseInt(look.bg.slice(1), 16);
  st.setProperty('--bg', look.bg); st.setProperty('--fg', look.fg);
  document.documentElement.dataset.dark = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255 < 0.4 ? '1' : '0';
  $('meta[name=theme-color]').content = look.bg;
}
async function load() {
  const saved = (await DB.get('kv', 'settings')) || {};
  S = { ...S, ...saved, ...setPending };
  applyLook(saved.look);
  if (!dirty.size) LES = (await DB.get('kv', 'lesen')) || {};
}
addEventListener('popstate', e => {
  if (!X) return;
  sxLeave();
  Object.assign(X, e.state?.x || { scr: 'hub' });
  sxDraw();
});
// Вернулись в приложение: в Bücherleser могли поменять ключ или прийти данные с другого устройства
document.addEventListener('visibilitychange', async () => {
  if (document.hidden || !X || ['card', 'exam', 'task', 'me'].includes(X.scr)) return;
  await load(); sxDraw(true);
});
(async () => {
  await load();
  voicePrefs = (await DB.get('kv', 'voices')) || {}; Sp.setPrefs(voicePrefs);
  X = { T, scr: 'hub' };
  history.replaceState({ v: 'sprechen', x: { scr: 'hub' } }, '');
  sxDraw();
  Sp.ready();
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
