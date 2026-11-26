// ИИ-разбор слова или фразы через Google Gemini или Claude. Ключ хранится только на этом устройстве.
// Чей ключ, видно по нему самому: ключи Google начинаются с «AIza», ключи Claude — с «sk-ant-».
let Anthropic;

const CLAUDE = [
  ['claude-opus-5-5', 'Claude Opus 5.5 — самый точный разбор'],
  ['claude-sonnet-5-5', 'Claude Sonnet 5.5 — быстрее и дешевле'],
  ['claude-haiku-5-5', 'Claude Haiku 5.5 — самый быстрый и дешёвый'],
];
// Модели с бесплатным лимитом (список сверен с aistudio.google.com/docs/models 23.11.2026).
// Если выбранная перегружена, исчерпала лимит или снята, запрос сам уходит к следующей по списку.
const GEMINI = [
  ['auto', 'Автоматически — лучшая из доступных ключу'],
  ['gemini-3.8-flash', 'Gemini 3.8 Flash — быстрый и точный'],
  ['gemini-3.5-flash-lite', 'Gemini 3.5 Flash-Lite — самый быстрый'],
  ['gemini-3.6-flash', 'Gemini 3.6 Flash — запасной'],
  ['gemini-4-hydrogen', 'Gemini 4 Hydrogen — новое поколение'],
];
export const MODELS = CLAUDE;
const isGoogle = key => !/^sk-ant-/.test(key || '');
export const modelsFor = key => isGoogle(key) ? GEMINI : CLAUDE;
const modelOf = (key, model) => modelsFor(key).some(m => m[0] === model) ? model : modelsFor(key)[0][0];

const system = level => `Ты — преподаватель немецкого языка для русскоязычного читателя уровня ${level}. \
Читатель читает немецкую книгу и просит объяснить слово или фразу. Отвечай по-русски, по существу, без вступлений и без прощаний. \
Немецкие слова и примеры выделяй **жирным**. Используй короткие абзацы и маркированные списки, без таблиц и заголовков.`;

function prompt({ kind, text, sentence }) {
  if (kind === 'word') return `Слово: «${text}»
Предложение из книги: «${sentence}»

Объясни слово именно в этом предложении:
- перевод в этом контексте и начальная форма;
- грамматика: для существительного — род и множественное число; для глагола — три основные формы, вспомогательный глагол и управление; для составного слова — из чего оно состоит;
- какая это форма в предложении (падеж, время, отделяемая приставка) и почему;
- один-два коротких примера с переводом;
- если есть — другие частые значения, одной строкой.`;
  return `Фраза: «${text}»
Контекст из книги: «${sentence}»

Разбери фразу:
- естественный перевод на русский;
- как она устроена грамматически: порядок слов, падежи, времена, отделяемые приставки;
- устойчивые выражения и идиомы, если они здесь есть;
- что из этого стоит запомнить.`;
}

// Как в wordschatz: спрашиваем у Google, какие модели доступны именно этому ключу, и ставим вперёд свежие flash-модели.
// Список живёт до перезагрузки страницы; занятые модели запоминаем на пару минут, чтобы не стучаться в них снова.
const G = { key: '', ranked: null, good: '', busy: new Map() };
const SKIP = /embedding|aqa|vision|image|imagen|tts|audio|veo|live|omni|genie|robotics|computer|gemma|learnlm/i;
function rank(name) {
  if (!/^gemini/i.test(name) || SKIP.test(name)) return -1;
  let s = 50;
  if (/flash/i.test(name)) s += 100;
  if (/lite/i.test(name)) s -= 30;
  if (/pro/i.test(name)) s -= 20;            // обычно без бесплатного лимита
  if (/preview|exp/i.test(name)) s -= 40;    // нестабильны и чаще перегружены
  if (/latest/i.test(name)) s -= 10;
  const v = name.match(/gemini-(\d+(?:\.\d+)?)/);
  if (v) s += parseFloat(v[1]) * 10;
  return s;
}
async function ranked(key, signal) {
  if (G.key !== key) Object.assign(G, { key, ranked: null, good: '', busy: new Map() });
  if (G.ranked) return G.ranked;
  try { await fetchList(key, signal); } catch (err) { if (signal?.aborted) throw err; }
  return G.ranked || GEMINI.map(m => m[0]).filter(m => m !== 'auto');
}
async function fetchList(key, signal) {
  let r;
  try {
    r = await fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200', { signal, headers: { 'x-goog-api-key': key } });
  } catch (err) {
    if (signal?.aborted) throw err;
    throw new Error('Не удалось связаться с Google. Проверьте интернет.');
  }
  const data = await r.json().catch(() => null);
  if (!r.ok || !data) throw new Error([400, 401, 403].includes(r.status) ? 'Ключ Google не принят. Проверьте его.' : `Google не отдал список моделей (${r.status}).`);
  const list = (data.models || [])
    .filter(m => (m.supportedGenerationMethods || []).includes('generateContent'))
    .map(m => { const id = m.name.replace(/^models\//, ''); return [id, m.displayName || '', rank(id)]; })
    .filter(m => m[2] > 0).sort((a, b) => b[2] - a[2]);
  if (!list.length) throw new Error('Для этого ключа нет подходящих моделей Gemini.');
  G.ranked = list.map(m => m[0]);
  setList(list.slice(0, 12).map(m => [m[0], m[1] && m[1] !== m[0] ? `${m[1]} (${m[0]})` : m[0]]));
  return list.length;
}
// Список в настройках: тот же массив (его сравнивают по ссылке), содержимое меняется на месте и помнится на устройстве
function setList(items, save = true) {
  GEMINI.splice(1, GEMINI.length, ...items);
  if (save) try { localStorage.setItem('bl-gemini-models', JSON.stringify(items)); } catch {}
}
try { const saved = JSON.parse(localStorage.getItem('bl-gemini-models')); if (Array.isArray(saved) && saved.length) setList(saved, false); } catch {}
/** Кнопка «Обновить список моделей»: заново спрашивает у Google, что доступно ключу. Возвращает число моделей. */
export async function refreshModels(key) {
  if (!key || !isGoogle(key)) throw new Error('Сначала вставьте ключ Google Gemini.');
  if (G.key !== key) Object.assign(G, { key, ranked: null, good: '', busy: new Map() });
  G.busy.clear();
  return fetchList(key);
}

// Gemini: потоковый ответ через REST, без SDK
async function gemini({ key, model, level, kind, text, sentence, sys, user, onText, signal }) {
  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: sys ?? system(level) }] },
    contents: [{ role: 'user', parts: [{ text: user ?? prompt({ kind, text, sentence }) }] }],
  });
  // Сначала выбранная модель, затем остальные: перегрузка (503), лимит (429) и снятая модель (404) — повод попробовать следующую
  const all = await ranked(key, signal);
  const now = Date.now();
  let queue = [...new Set([model, G.good, ...all])].filter(m => m && m !== 'auto');
  const free = queue.filter(m => !(G.busy.get(m) > now));
  queue = (free.length ? free : queue).slice(0, 6);
  let r, last = 0, msg = '';
  for (const m of queue) {
    try {
      r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:streamGenerateContent?alt=sse`, {
        method: 'POST', signal, body,
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      });
    } catch (err) {
      if (signal?.aborted) throw err;
      throw new Error('Не удалось связаться с Google. Проверьте интернет.');
    }
    if (r.ok) { G.good = m; break; }
    last = r.status;
    msg = (await r.json().catch(() => null))?.error?.message || '';
    if (![404, 429, 500, 503].includes(last)) break;
    G.busy.set(m, Date.now() + 120000);
    if (G.good === m) G.good = '';
  }
  if (!r.ok) {
    if (last === 400 && /API key/i.test(msg) || last === 401 || last === 403) throw new Error('Ключ Google не принят. Проверьте его в настройках.');
    if (last === 429) throw new Error('Исчерпан лимит запросов Gemini на всех моделях. Попробуйте позже.');
    if (last === 404) throw new Error('Модели Gemini недоступны для вашего ключа.');
    if (last === 503 || last === 500) throw new Error('Все модели Gemini сейчас перегружены. Попробуйте через минуту.');
    throw new Error(`Ошибка Gemini (${last}): ${msg}`);
  }
  const reader = r.body.pipeThrough(new TextDecoderStream()).getReader();
  let buf = '', out = '', blocked = '';
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += value;
    const lines = buf.split(/\r?\n/); buf = lines.pop();
    for (const line of lines) {
      if (!line.startsWith('data:')) continue;
      let j; try { j = JSON.parse(line.slice(5)); } catch { continue; }
      blocked ||= j.promptFeedback?.blockReason || '';
      const part = (j.candidates?.[0]?.content?.parts || []).filter(p => !p.thought).map(p => p.text || '').join('');
      if (part) { out += part; onText(part); }
    }
  }
  if (!out) throw new Error(blocked ? 'Gemini отказался отвечать на этот запрос.' : 'Gemini вернул пустой ответ. Попробуйте ещё раз.');
  return out;
}

// sys и user — свой системный текст и свой запрос вместо разбора слова (так спрашивает раздел Sprechen)
export async function explain({ key, model, level, kind, text, sentence, sys, user, onText, signal }) {
  model = modelOf(key, model);
  if (isGoogle(key)) return gemini({ key, model, level, kind, text, sentence, sys, user, onText, signal });
  try {
    Anthropic ??= (await import('https://esm.sh/@anthropic-ai/sdk')).default;
  } catch {
    throw new Error('Нет соединения с интернетом — ИИ-разбор недоступен. Словарь работает офлайн.');
  }
  const client = new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true });
  try {
    const stream = client.messages.stream({
      model,
      max_tokens: 8000,
      system: sys ?? system(level),
      output_config: { effort: 'low' },
      messages: [{ role: 'user', content: user ?? prompt({ kind, text, sentence }) }],
    }, { signal });
    stream.on('text', onText);
    const msg = await stream.finalMessage();
    if (msg.stop_reason === 'refusal') throw new Error('Модель отказалась отвечать на этот запрос.');
    return msg.content.filter(b => b.type === 'text').map(b => b.text).join('');
  } catch (err) {
    if (signal?.aborted) throw err;
    if (err instanceof Anthropic.AuthenticationError) throw new Error('Ключ API не принят. Проверьте его в настройках.');
    if (err instanceof Anthropic.RateLimitError) throw new Error('Превышен лимит запросов. Попробуйте чуть позже.');
    if (err instanceof Anthropic.APIConnectionError) throw new Error('Не удалось связаться с сервером. Проверьте интернет.');
    if (err instanceof Anthropic.APIError) throw new Error(`Ошибка API (${err.status}): ${err.message}`);
    throw err;
  }
}
