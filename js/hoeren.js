// Книга «Hören B1»: то же устройство, что у Lesen (варианты как главы, ответы, проверка, итог), но тексты не видны —
// их читает синтез речи. Расшифровка появляется после проверки варианта.
import * as Sp from './speak.js';

export const EXAM_PLAYS = 1; // на экзамене DTZ каждый текст звучит один раз

const ANDROID = 'На Android: Настройки → Система → Язык и ввод → Синтез речи (на Samsung: Общие настройки → Преобразование текста в речь) → шестерёнка рядом с «Синтезатор речи Google» → «Установить голосовые данные» → Deutsch (Deutschland) → скачать. Если синтезатора Google нет, установите из Google Play «Speech Recognition &amp; Synthesis». Затем закройте приложение полностью и откройте снова.';
const OTHER = 'На Windows: Параметры → Время и язык → Речь → «Добавить голоса» → Немецкий. На iPhone: Настройки → Универсальный доступ → Устный контент → Голоса → Немецкий.';

export const playsText = (n, done) => done ? (n ? `прослушано до проверки: ${n}` : '')
  : `прослушано: ${n} · на экзамене — ${EXAM_PLAYS} раз`;
export const audioOf = (v, key) => { const [pi, gi] = key.split('.'); return v.parts[pi]?.groups[gi]?.audio; };

// Подписи говорящих в расшифровке: из who, иначе Frau/Mann (с номером, если их несколько одного пола)
function names(g) {
  const codes = [...new Set(g.audio.map(l => l[0]))];
  if (codes.length < 2) return {};
  const many = s => codes.filter(c => c[0] === s).length > 1;
  return Object.fromEntries(codes.map(c => [c, g.who?.[c] || (c[0] === 'm' ? 'Mann' : 'Frau') + (many(c[0]) ? ' ' + c.slice(1) : '')]));
}
function scriptHtml(g) {
  const who = names(g);
  return `<div class="tx script">${g.audio.map(([c, t]) => `<p>${who[c] ? `<b class="sp">${who[c]}:</b> ` : ''}${t}</p>`).join('')}</div>`;
}

export function groupHead(p, pi, g, gi, st) {
  const key = `${pi}.${gi}`, n = st.plays?.[key] || 0, isEx = g.ex != null;
  const label = isEx ? 'Beispiel' : `${p.label} ${gi + (p.groups[0].ex != null ? 0 : 1)}`;
  let h = `<div class="hear"><b class="hear-l">${label}</b><button class="play" data-play="${key}">▶ Прослушать</button>`;
  if (new Set(g.audio.map(l => l[0])).size > 1) h += '<span class="now" lang="ru"></span>';
  h += `<span class="plays${!st.done && n > EXAM_PLAYS ? ' over' : ''}" lang="ru">${playsText(n, st.done)}</span></div>`;
  if (isEx) h += `<p class="ex-sol">Lösung: <b>${'abcdef'[g.ex]}</b></p>`;
  if (st.done) h += scriptHtml(g);
  return h;
}

// Утверждения a–f в Teil 4: видны всегда, как на экзаменационном листе
export const stmtsHtml = p => !p.stmts ? '' : `${p.topic ? `<p class="topic">${p.topic}</p>` : ''}<div class="tx ads">${p.stmts.map((s, k) =>
  `<div class="ad"><b class="ad-k">${'abcdef'[k]}</b>${s}</div>`).join('')}</div>`;

export function speechBox(ctx) {
  const s = Sp.status(), rate = ctx.rate();
  let h = '<div class="tbox speech" lang="ru"><p><b>Озвучка.</b> ';
  if (s === 'off') return h + 'Этот браузер не умеет озвучивать текст — откройте приложение в Chrome, Edge или Safari.</p></div>';
  if (s === 'ok') h += `Тексты читает голос устройства, записи диктора нет. Немецких голосов — ${Sp.voicesInfo()}. В разговорах женские и мужские реплики читаются разными голосами; пока разговор звучит, рядом с кнопкой видно, кто говорит.`;
  else if (s === 'none') h += `<span class="warn">На этом устройстве нет немецкого голоса, поэтому тексты прозвучать не могут.</span> ${ANDROID} ${OTHER}`;
  else h += `Браузер не сообщил список голосов (на Android так бывает). Нажмите «Проверить голос»: должна прозвучать немецкая фраза. Если тишина или читают не по-немецки — ${ANDROID[0].toLowerCase() + ANDROID.slice(1)}`;
  h += `</p><p>Скорость речи: <button data-t="rate-" aria-label="Медленнее">−</button><output class="rate">${rate.toFixed(1).replace('.', ',')}×</output><button data-t="rate+" aria-label="Быстрее">+</button>`;
  h += '<button data-t="voice-test">Проверить голоса</button></p>';
  const list = Sp.voiceList();
  if (list.length) {
    const p = ctx.voices(), mark = { f: ' (жен.)', m: ' (муж.)', '': '' };
    const sel = sex => `<select data-voice="${sex}"><option value="">авто</option>${list.map(v => `<option value="${v.id.replace(/"/g, '&quot;')}"${p[sex] === v.id ? ' selected' : ''}>${v.name}${mark[v.sex]}</option>`).join('')}</select>`;
    const lo = +p.low || Sp.LOW_DEFAULT;
    h += `<p>Тон мужских реплик: <button data-t="low-" aria-label="Ниже">−</button><output class="low">${lo.toFixed(2).replace('.', ',')}</output><button data-t="low+" aria-label="Выше">+</button> <span class="muted">ниже — заметнее разница с женским голосом, но звук глуше; 1,00 — без изменения</span></p>`;
    h += `<p class="vsel"><label>Женский голос ${sel('f')}</label><label>Мужской голос ${sel('m')}</label></p>`;
    h += list.length > 1 ? '<p class="muted">Если в разговоре мужчина и женщина звучат одинаково — выберите голоса сами и нажмите «Проверить голоса»: сначала говорит женщина, потом мужчина.</p>'
      : '<p class="muted">Немецкий голос на устройстве один, поэтому мужские реплики читаются им же, но низким тоном. ' + (/Android/i.test(globalThis.navigator?.userAgent || '') ? 'Отдельный мужской голос: настройки телефона → Синтез речи → шестерёнка у синтезатора Google → «Установить голосовые данные» → Deutsch — там несколько голосов; после установки закройте и откройте приложение.' : 'Отдельный мужской голос можно добавить в настройках речи устройства.') + '</p>';
  }
  return h + '</div>';
}

export const TEST_LINES = [['f1', 'Guten Tag! So klingt die Frauenstimme auf diesem Gerät.'], ['m1', 'Und so klingt die Männerstimme. Viel Erfolg beim Hören!']];
// Кто сейчас говорит: подпись рядом с кнопкой, пока разговор звучит
export const nowText = code => !code ? '' : (code[0] === 'm' ? '♂ говорит мужчина' : '♀ говорит женщина') + (+code.slice(1) > 1 ? ' ' + code.slice(1) : '');
