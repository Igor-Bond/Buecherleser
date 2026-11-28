// Sprechen B1 переехал на собственный адрес (/Sprechen/). Этот файл заменяет прежний обработчик офлайн-кеша:
// он ничего не перехватывает, снимает сам себя и перезагружает открытые страницы — они получат index.html с переходом.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  self.registration.unregister()
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then(cs => Promise.all(cs.map(c => c.navigate(c.url).catch(() => {}))))));
