// Локальное хранилище (IndexedDB): книги, словари, личный словарь, настройки.
const NAME = 'buecherleser', VERSION = 1;
let opening;

export function open() {
  return opening ??= new Promise((res, rej) => {
    const r = indexedDB.open(NAME, VERSION);
    r.onupgradeneeded = () => {
      const d = r.result;
      d.createObjectStore('books', { keyPath: 'id' });     // карточки книг
      d.createObjectStore('content', { keyPath: 'id' });   // текст книг
      d.createObjectStore('dicts', { keyPath: 'id' });     // список словарей
      const e = d.createObjectStore('entries', { autoIncrement: true }); // словарные статьи
      e.createIndex('k', 'k');                              // заглавное слово (в нижнем регистре)
      e.createIndex('f', 'f', { multiEntry: true });        // словоформы
      e.createIndex('d', 'd');                              // словарь
      d.createObjectStore('vocab', { keyPath: 'id' });     // личный словарь
      d.createObjectStore('kv');                            // настройки, кеш ИИ, шрифты
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}

export const req = r => new Promise((res, rej) => {
  r.onsuccess = () => res(r.result);
  r.onerror = () => rej(r.error);
});

// Выполняет fn(store, tx) в одной транзакции и ждёт её завершения.
export async function tx(store, mode, fn) {
  const d = await open();
  return new Promise((res, rej) => {
    const t = d.transaction(store, mode);
    let out;
    t.oncomplete = () => res(out);
    t.onerror = t.onabort = () => rej(t.error);
    out = fn(t.objectStore(store), t);
  });
}

export const get = (s, k) => tx(s, 'readonly', st => req(st.get(k)));
export const all = s => tx(s, 'readonly', st => req(st.getAll()));
export const put = (s, v, k) => tx(s, 'readwrite', st => { st.put(v, k); });
export const del = (s, k) => tx(s, 'readwrite', st => { st.delete(k); });
