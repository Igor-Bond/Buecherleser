// Настройка озвучки: какой голос читает образцы и вопросы, с какой скоростью, и как установить немецкий голос, если его нет.
import * as Sp from './speak.js';

const ANDROID = 'На Android: Настройки → Система → Язык и ввод → Синтез речи (на Samsung: Общие настройки → Преобразование текста в речь) → шестерёнка рядом с «Синтезатор речи Google» → «Установить голосовые данные» → Deutsch (Deutschland) → скачать. Если синтезатора Google нет, установите из Google Play «Speech Recognition &amp; Synthesis». Затем закройте приложение полностью и откройте снова.';
const OTHER = 'На Windows: Параметры → Время и язык → Речь → «Добавить голоса» → Немецкий. На iPhone: Настройки → Универсальный доступ → Устный контент → Голоса → Немецкий.';

// ctx: { rate(), voices() }
export function speechBox(ctx) {
  const s = Sp.status(), rate = ctx.rate();
  let h = '<div class="tbox speech" lang="ru"><p><b>Озвучка.</b> ';
  if (s === 'off') return h + 'Этот браузер не умеет озвучивать текст — откройте приложение в Chrome, Edge или Safari.</p></div>';
  if (s === 'ok') h += `Образцы, вопросы экзаменатора и реплики партнёра читает голос устройства. Немецких голосов — ${Sp.voicesInfo()}. Женские и мужские реплики читаются разными голосами.`;
  else if (s === 'none') h += `<span class="warn">На этом устройстве нет немецкого голоса, поэтому тексты прозвучать не могут.</span> ${ANDROID} ${OTHER}`;
  else h += `Браузер не сообщил список голосов (на Android так бывает). Нажмите «Проверить голоса»: должна прозвучать немецкая фраза. Если тишина или читают не по-немецки — ${ANDROID[0].toLowerCase() + ANDROID.slice(1)}`;
  h += `</p><p>Скорость речи: <button data-t="rate-" aria-label="Медленнее">−</button><output class="rate">${rate.toFixed(1).replace('.', ',')}×</output><button data-t="rate+" aria-label="Быстрее">+</button>`;
  h += '<button data-t="voice-test">Проверить голоса</button></p>';
  const list = Sp.voiceList();
  if (list.length) {
    const p = ctx.voices(), mark = { f: ' (жен.)', m: ' (муж.)', '': '' };
    const sel = sex => `<select data-voice="${sex}"><option value="">авто</option>${list.map(v => `<option value="${v.id.replace(/"/g, '&quot;')}"${p[sex] === v.id ? ' selected' : ''}>${v.name}${mark[v.sex]}</option>`).join('')}</select>`;
    const lo = +p.low || Sp.LOW_DEFAULT;
    h += `<p>Тон мужских реплик: <button data-t="low-" aria-label="Ниже">−</button><output class="low">${lo.toFixed(2).replace('.', ',')}</output><button data-t="low+" aria-label="Выше">+</button> <span class="muted">ниже — заметнее разница с женским голосом, но звук глуше; 1,00 — без изменения</span></p>`;
    h += `<p class="vsel"><label>Женский голос ${sel('f')}</label><label>Мужской голос ${sel('m')}</label></p>`;
    h += list.length > 1 ? '<p class="muted">Если мужчина и женщина звучат одинаково — выберите голоса сами и нажмите «Проверить голоса»: сначала говорит женщина, потом мужчина.</p>'
      : '<p class="muted">Немецкий голос на устройстве один, поэтому мужские реплики читаются им же, но низким тоном. ' + (/Android/i.test(globalThis.navigator?.userAgent || '') ? 'Отдельный мужской голос: настройки телефона → Синтез речи → шестерёнка у синтезатора Google → «Установить голосовые данные» → Deutsch — там несколько голосов; после установки закройте и откройте приложение.' : 'Отдельный мужской голос можно добавить в настройках речи устройства.') + '</p>';
  }
  return h + '</div>';
}

export const TEST_LINES = [['f1', 'Guten Tag! So klingt die Frauenstimme auf diesem Gerät.'], ['m1', 'Und so klingt die Männerstimme. Viel Erfolg in der Prüfung!']];
// Кто сейчас говорит: подпись рядом с кнопкой, пока образец звучит
export const nowText = code => !code ? '' : (code[0] === 'm' ? '♂ говорит мужчина' : '♀ говорит женщина') + (+code.slice(1) > 1 ? ' ' + code.slice(1) : '');
