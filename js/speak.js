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

// Каждому говорящему — свой голос, пока голосов хватает (сначала подходящие по полу, потом любые свободные).
// Когда голоса кончились, берётся уже занятый, а различие даёт высота тона.
function cast(codes) {
  const all = germanVoices().sort((a, b) => (b.localService ? 1 : 0) - (a.localService ? 1 : 0) || (/de[-_]DE/i.test(b.lang) ? 1 : 0) - (/de[-_]DE/i.test(a.lang) ? 1 : 0));
  const free = [...all], roles = {}, perSex = { f: 0, m: 0 };
  for (const c of codes) {
    const sex = c[0] === 'm' ? 'm' : 'f', nth = perSex[sex]++;
    let i = free.findIndex(v => sexOf(v) === sex);
    if (i < 0) i = free.findIndex(v => !sexOf(v));
    if (i >= 0) {
      const v = free.splice(i, 1)[0], known = sexOf(v) === sex;
      roles[c] = { voice: v, pitch: known ? 1 : sex === 'm' ? 0.8 : 1.15 };
    } else {
      const same = Object.values(roles).find(r => r.voice && sexOf(r.voice) === sex);
      roles[c] = { voice: same?.voice || all[0] || null, pitch: clampPitch(sex === 'm' ? 0.75 - 0.15 * nth : 1.2 + 0.2 * nth) };
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
export function speak(lines, { rate = 1 } = {}) {
  stop(); silent = false;
  if (!supported || status() === 'none') return Promise.resolve(false);
  const my = ++run, roles = cast([...new Set(lines.map(l => l[0]))]);
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
