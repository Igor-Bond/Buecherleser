// Локальное хранилище приложения (IndexedDB): одна таблица «ключ → значение».
// Ключи: settings — настройки (ключ ИИ, уровень, скорость речи, тема), state — прогресс (sp00 — тренажёр фраз, s01… — наборы заданий),
// voices — выбранные голоса, migrated — отметка о переносе данных из прежней общей базы.
const NAME = 'sprechen-b1', STORE = 'kv';
let opening;
function open() {
  return opening ??= new Promise((res, rej) => {
    const r = indexedDB.open(NAME, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function tx(mode, fn) {
  const d = await open();
  return new Promise((res, rej) => {
    const t = d.transaction(STORE, mode);
    let out;
    t.oncomplete = () => res(out?.result);
    t.onerror = t.onabort = () => rej(t.error);
    out = fn(t.objectStore(STORE));
  });
}
export const get = k => tx('readonly', s => s.get(k));
export const put = (v, k) => tx('readwrite', s => s.put(v, k));

// Раньше Sprechen был частью приложения для чтения книг и хранил всё в его базе. Забираем оттуда ключ ИИ, голоса и прогресс — один раз.
export async function importOld() {
  try {
    if (!indexedDB.databases || !(await indexedDB.databases()).some(d => d.name === 'buecherleser')) return null;
    const old = await new Promise((res, rej) => { const r = indexedDB.open('buecherleser'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); r.onupgradeneeded = () => r.transaction.abort(); });
    if (!old.objectStoreNames.contains('kv')) { old.close(); return null; }
    const g = k => new Promise(res => { const q = old.transaction('kv').objectStore('kv').get(k); q.onsuccess = () => res(q.result); q.onerror = () => res(null); });
    const [settings, lesen, voices] = await Promise.all([g('settings'), g('lesen'), g('voices')]);
    old.close();
    return { settings, state: lesen, voices };
  } catch { return null; }
}
