// Озвучка текстов Hören встроенным синтезом речи браузера. Аудиофайлов нет: читает голос устройства.
// Текст — список реплик [[код говорящего, текст], …]; код начинается с f (женский) или m (мужской): f1, m1, f2…
const synth = globalThis.speechSynthesis;
export const supported = !!synth && typeof SpeechSynthesisUtterance === 'function';

const isDe = v => /^de([-_]|$)/i.test(v.lang || '');
let cache = [];
const load = () => { if (supported) cache = synth.getVoices(); return cache; };
if (supported) { load(); synth.addEventListener?.('voiceschanged', load); }

// Список голосов приходит не сразу (в Chrome — после события voiceschanged), на Android иногда не приходит вовсе.
export function ready(ms = 1500) {
  if (!supported || load().length) return Promise.resolve(cache);
  return new Promise(res => {
    const t0 = Date.now();
    const tick = setInterval(() => { if (load().length || Date.now() - t0 > ms) { clearInterval(tick); res(cache); } }, 100);
  });
}
export const germanVoices = () => load().filter(isDe);
// 'ok' — немецкий голос есть; 'none' — голоса есть, немецкого нет; 'unknown' — список пуст (бывает на Android: читать всё равно пробуем); 'off' — синтеза нет
export const status = () => !supported ? 'off' : germanVoices().length ? 'ok' : load().length ? 'none' : 'unknown';

const FEMALE = /katja|hedda|amala|seraphina|elke|gisela|klarissa|louisa|maja|tanja|ingrid|leni|vicki|marlene|anna|petra|helena|sandy|shelley|flo|female|weiblich|frau/i;
const MALE = /stefan|conrad|killian|florian|bernd|christoph|kasper|klaus|ralf|jonas|jan\b|yannick|markus|martin|hans|daniel|viktor|eddy|reed|rocko|grandpa|male|männlich/i;
const sexOf = v => MALE.test(v.name) && !/female/i.test(v.name) ? 'm' : FEMALE.test(v.name) ? 'f' : '';

// Пол голоса по имени узнаётся не всегда (на Android голоса зовутся просто «Deutsch Deutschland»), поэтому женский и мужской
// голос можно назначить вручную: prefs = { f: id, m: id }. Хранится на устройстве — у каждого устройства свои голоса.
let prefs = {};
export const setPrefs = p => { prefs = p || {}; };
const idOf = v => v.voiceURI || v.name;
export function voiceList() {
  const vs = germanVoices(), seen = {};
  return vs.map(v => {
    const n = (seen[v.name] = (seen[v.name] || 0) + 1), dup = vs.filter(x => x.name === v.name).length > 1;
    return { id: idOf(v) + (dup ? '#' + n : ''), name: v.name.replace(/^Microsoft | - German.*$/g, '') + (dup ? ' ' + n : ''), sex: sexOf(v), voice: v };
  });
}
const LOW = 0.82; // сильнее опускать нельзя: голос Android на тоне 0.6 звучит глухо и неразборчиво
// тон мужской реплики, когда читать её приходится женским или неизвестным голосом

// Каждому говорящему — свой голос, пока голосов хватает: сначала назначенный вручную, потом подходящий по полу, потом любой свободный.
// Когда голоса кончились, берётся уже занятый, а различие даёт высота тона.
function cast(codes) {
  const all = germanVoices().sort((a, b) => (b.localService ? 1 : 0) - (a.localService ? 1 : 0) || (/de[-_]DE/i.test(b.lang) ? 1 : 0) - (/de[-_]DE/i.test(a.lang) ? 1 : 0));
  const free = [...all], roles = {}, perSex = { f: 0, m: 0 };
  const list = voiceList(), pick = { f: list.find(v => v.id === prefs.f)?.voice, m: list.find(v => v.id === prefs.m)?.voice };
  for (const c of codes) {
    const sex = c[0] === 'm' ? 'm' : 'f', nth = perSex[sex]++;
    if (!nth && pick[sex]) {
      // один и тот же голос назначен обоим — мужчину отличает низкий тон
      roles[c] = { voice: pick[sex], pitch: sex === 'm' && pick.f === pick.m ? LOW : 1 };
      const k = free.indexOf(pick[sex]); if (k >= 0) free.splice(k, 1);
      continue;
    }
    let i = free.findIndex(v => sexOf(v) === sex && v !== pick.f && v !== pick.m);
    if (i < 0) i = free.findIndex(v => !sexOf(v) && v !== pick.f && v !== pick.m);
    if (i >= 0) {
      const v = free.splice(i, 1)[0], known = sexOf(v) === sex;
      roles[c] = { voice: v, pitch: known ? 1 : sex === 'm' ? LOW : 1 };
    } else {
      const first = roles[codes.find(x => x[0] === c[0] && roles[x])];
      roles[c] = { voice: first?.voice || free.shift() || all[0] || null, pitch: clampPitch(sex === 'm' ? LOW - 0.1 * nth : 1.12 + 0.12 * nth) };
    }
  }
  return roles;
}
const clampPitch = p => Math.min(1.6, Math.max(0.5, +p.toFixed(2)));

// Длинные реплики режутся на предложения: сетевые голоса Chrome обрывают фразу длиннее ~15 секунд,
// а обходной приём с pause/resume подвешивает локальные голоса Windows.
const sentences = t => t.match(/[^.!?…]+[.!?…]+["“”»]?\s*|[^.!?…]+$/g)?.map(s => s.trim()).filter(Boolean) || [t];

let run = 0, keep = null, silent = false;
// true — последняя попытка не прозвучала: синтезатор принял текст, но за 8 секунд так и не начал говорить
export const wasSilent = () => silent;
export const speaking = () => !!keep;
export function stop() {
  run++;
  const k = keep; keep = null; clearTimeout(k?.guard);
  if (supported) synth.cancel();
  k?.done(false);
}

// lines: [[код, текст], …]; rate — скорость. Возвращает обещание: true — дочитано до конца, false — остановлено или не получилось.
// onLine(код) вызывается, когда слово переходит к другому участнику
export function speak(lines, { rate = 1, onLine } = {}) {
  stop(); silent = false;
  if (!supported || status() === 'none') return Promise.resolve(false);
  const codes = [...new Set(lines.map(l => l[0]))];
  const my = ++run, roles = cast(codes);
  // тон меняется только затем, чтобы различать собеседников; один говорящий читается естественным голосом
  if (codes.length === 1 && roles[codes[0]]) roles[codes[0]].pitch = 1;
  const queue = lines.flatMap(([c, t]) => sentences(t).map(s => [c, s]));
  return new Promise(resolve => {
    let i = 0, settled = false, started = false;
    const done = ok => { if (settled) return; settled = true; if (keep?.done === done) keep = null; resolve(ok); };
    keep = { done };
    const next = () => {
      if (my !== run) return done(false);
      if (i >= queue.length) return done(started);
      const [c, text] = queue[i++], r = roles[c] || {};
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE'; u.rate = rate; u.pitch = r.pitch || 1;
      if (r.voice) try { u.voice = r.voice; u.lang = r.voice.lang.replace('_', '-'); } catch { /* голос исчез из списка — читаем голосом по умолчанию для de-DE */ }
      u.onstart = () => { started = true; clearTimeout(keep?.guard); };
      onLine?.(c);
      u.onend = () => { started = true; clearTimeout(keep?.guard); if (my === run) setTimeout(next, queue[i]?.[0] !== c ? 380 : 120); };
      u.onerror = e => { if (my !== run) return; if (e.error === 'interrupted' || e.error === 'canceled') done(false); else next(); };
      keep.u = u; // без ссылки Chrome иногда теряет событие end
      if (!started) { clearTimeout(keep.guard); keep.guard = setTimeout(() => { if (my === run && !started) { silent = true; stop(); } }, 8000); }
      synth.speak(u);
    };
    next();
  });
}

// Короткая строка для экрана: сколько немецких голосов и какие
export function voicesInfo() {
  const v = germanVoices();
  return v.length ? `${v.length}: ${v.slice(0, 4).map(x => x.name.replace(/^Microsoft | Online \(Natural\)| - German.*$|\s*\(.*\)$/g, '')).join(', ')}${v.length > 4 ? '…' : ''}` : '';
}
