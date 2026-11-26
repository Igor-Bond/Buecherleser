// Микрофон для Sprechen: запись ответа, чтобы послушать себя, и распознавание речи в текст для разбора.
// Запись живёт только в памяти страницы. Распознавание в Chrome идёт через серверы Google и требует интернета.
const Rec = () => globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;
export const canRecord = !!(globalThis.navigator?.mediaDevices?.getUserMedia && globalThis.MediaRecorder);
export const canDictate = !!Rec();

let active = null; // { kind: 'rec' | 'dict', stop() }
export const busy = () => active?.kind || '';
export function stopAll() { const a = active; active = null; a?.stop(); }

const micError = err => new Error(err?.name === 'NotAllowedError' || err?.name === 'SecurityError' ? 'Нет доступа к микрофону: разрешите его для этого сайта в настройках браузера'
  : err?.name === 'NotFoundError' ? 'Микрофон не найден' : 'Не удалось включить микрофон');

// Запись: onStop(blob | null) вызывается, когда запись остановлена (кнопкой, сменой страницы или по лимиту maxSec)
export async function record({ onStop, maxSec = 300 }) {
  stopAll();
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (err) { throw micError(err); }
  const chunks = [], mr = new MediaRecorder(stream);
  const me = { kind: 'rec', stop: () => { if (mr.state !== 'inactive') mr.stop(); } };
  const limit = setTimeout(() => me.stop(), maxSec * 1000);
  mr.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
  mr.onstop = () => {
    clearTimeout(limit);
    for (const t of stream.getTracks()) t.stop();
    if (active === me) active = null;
    onStop(chunks.length ? new Blob(chunks, { type: mr.mimeType || 'audio/webm' }) : null);
  };
  active = me;
  mr.start();
}

// Диктовка: onText(текст целиком) при каждом новом куске, onEnd(ошибка | null) в конце.
// На Android распознавание само замолкает после паузы — пока диктовку не остановили, оно запускается заново, и текст копится.
// once: одна фраза — после первой паузы распознавание заканчивается само (так работает тренажёр фраз).
export function dictate({ onText, onEnd, once = false }) {
  stopAll();
  const android = /Android/i.test(navigator.userAgent);
  let done = '', on = true, fail = null, r;
  const me = { kind: 'dict', stop: () => { on = false; try { r.stop(); } catch { /* уже остановлено */ } } };
  const start = () => {
    r = new (Rec())();
    r.lang = 'de-DE'; r.interimResults = true; r.continuous = !android && !once;
    let fin = '';
    r.onresult = e => {
      let interim = ''; fin = '';
      for (const res of e.results) (res.isFinal ? (fin += res[0].transcript.trim() + ' ') : (interim += res[0].transcript));
      onText((done + fin + interim).replace(/\s+/g, ' ').trim());
    };
    r.onerror = e => {
      if (e.error === 'no-speech' || e.error === 'aborted') return;
      on = false;
      fail = new Error(e.error === 'not-allowed' || e.error === 'service-not-allowed' ? 'Нет доступа к микрофону или распознаванию речи: разрешите микрофон для этого сайта'
        : e.error === 'network' ? 'Распознаванию речи нужен интернет' : e.error === 'language-not-supported' ? 'Распознавание немецкой речи на этом устройстве недоступно'
        : 'Распознавание речи не сработало (' + e.error + ')');
    };
    r.onend = () => {
      done = (done + fin).replace(/\s+/g, ' '); fin = '';
      if (on && !once && active === me) { try { start(); return; } catch { /* не запустилось — заканчиваем */ } }
      if (active === me) active = null;
      onEnd(fail);
    };
    r.start();
  };
  active = me;
  try { start(); } catch { active = null; onEnd(new Error('Распознавание речи не запустилось')); }
}
