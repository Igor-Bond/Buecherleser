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
  if (s === 'ok') h += `Тексты читает голос устройства, записи диктора нет. Немецких голосов — ${Sp.voicesInfo()}. В разговорах реплики читаются разными голосами, а если голос один — меняется высота тона.`;
  else if (s === 'none') h += `<span class="warn">На этом устройстве нет немецкого голоса, поэтому тексты прозвучать не могут.</span> ${ANDROID} ${OTHER}`;
  else h += `Браузер не сообщил список голосов (на Android так бывает). Нажмите «Проверить голос»: должна прозвучать немецкая фраза. Если тишина или читают не по-немецки — ${ANDROID[0].toLowerCase() + ANDROID.slice(1)}`;
  h += `</p><p>Скорость речи: <button data-t="rate-" aria-label="Медленнее">−</button><output class="rate">${rate.toFixed(1).replace('.', ',')}×</output><button data-t="rate+" aria-label="Быстрее">+</button>`;
  return h + '<button data-t="voice-test">Проверить голос</button></p></div>';
}

export const TEST_LINES = [['f1', 'Guten Tag! So klingt die deutsche Stimme auf diesem Gerät.'], ['m1', 'Und so klingt die zweite Stimme. Viel Erfolg beim Hören!']];
