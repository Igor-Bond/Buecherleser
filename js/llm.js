// ИИ-разбор слова или фразы через Claude API. Ключ хранится только на этом устройстве.
let Anthropic;

export const MODELS = [
  ['claude-opus-5-5', 'Claude Opus 5.5 — самый точный разбор'],
  ['claude-sonnet-5-5', 'Claude Sonnet 5.5 — быстрее и дешевле'],
  ['claude-haiku-5-5', 'Claude Haiku 5.5 — самый быстрый и дешёвый'],
];

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

export async function explain({ key, model, level, kind, text, sentence, onText, signal }) {
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
