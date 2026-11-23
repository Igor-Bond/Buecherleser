// ИИ-разбор слова или фразы через Google Gemini или Claude. Ключ хранится только на этом устройстве.
// Чей ключ, видно по нему самому: ключи Google начинаются с «AIza», ключи Claude — с «sk-ant-».
let Anthropic;

const CLAUDE = [
  ['claude-opus-5-5', 'Claude Opus 5.5 — самый точный разбор'],
  ['claude-sonnet-5-5', 'Claude Sonnet 5.5 — быстрее и дешевле'],
  ['claude-haiku-5-5', 'Claude Haiku 5.5 — самый быстрый и дешёвый'],
];
// Имена с «latest» Google сам переводит на текущую версию модели — список не устаревает
const GEMINI = [
  ['gemini-flash-latest', 'Gemini Flash — быстрый, хватает бесплатного лимита'],
  ['gemini-flash-lite-latest', 'Gemini Flash-Lite — самый быстрый'],
  ['gemini-pro-latest', 'Gemini Pro — самый точный разбор'],
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

// Gemini: потоковый ответ через REST, без SDK
async function gemini({ key, model, level, kind, text, sentence, onText, signal }) {
  let r;
  try {
    r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse`, {
      method: 'POST', signal,
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system(level) }] },
        contents: [{ role: 'user', parts: [{ text: prompt({ kind, text, sentence }) }] }],
      }),
    });
  } catch (err) {
    if (signal?.aborted) throw err;
    throw new Error('Не удалось связаться с Google. Проверьте интернет.');
  }
  if (!r.ok) {
    const msg = (await r.json().catch(() => null))?.error?.message || '';
    if (r.status === 400 && /API key/i.test(msg) || r.status === 401 || r.status === 403) throw new Error('Ключ Google не принят. Проверьте его в настройках.');
    if (r.status === 429) throw new Error('Исчерпан лимит запросов Gemini. Попробуйте позже или выберите другую модель.');
    if (r.status === 404) throw new Error('Эта модель Gemini недоступна для вашего ключа. Выберите другую в настройках.');
    if (r.status === 503) throw new Error('Модель Gemini сейчас перегружена. Попробуйте ещё раз или выберите другую.');
    throw new Error(`Ошибка Gemini (${r.status}): ${msg}`);
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

export async function explain({ key, model, level, kind, text, sentence, onText, signal }) {
  model = modelOf(key, model);
  if (isGoogle(key)) return gemini({ key, model, level, kind, text, sentence, onText, signal });
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
      system: system(level),
      output_config: { effort: 'low' },
      messages: [{ role: 'user', content: prompt({ kind, text, sentence }) }],
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
