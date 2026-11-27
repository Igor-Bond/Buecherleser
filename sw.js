// Офлайн-режим: сначала сеть (чтобы обновления приходили сразу), при её отсутствии — кеш.
// На igor-bond.github.io по одному адресу живут несколько приложений, и хранилище кешей у них общее:
// стирать можно только свои старые кеши, иначе соседи останутся без офлайна.
const PREFIX = 'buecherleser-';
const CACHE = PREFIX + 'v32';
const SHELL = ['./', 'index.html', 'css/app.css', 'js/app.js', 'js/db.js', 'js/dict.js', 'js/german.js', 'js/fb2.js', 'js/epub.js',
  'js/llm.js', 'js/cover.js', 'js/demo.js', 'js/sync.js', 'js/firebase.config.js', 'js/lesen.js', 'js/hoeren.js', 'js/speak.js', 'js/tests-lesen-b1.js', 'js/tests/index.js',
  'js/tests/v03.js', 'js/tests/v04.js', 'js/tests/v05.js', 'js/tests/v06.js', 'js/tests/v07.js', 'js/tests/v08.js', 'js/tests/v09.js', 'js/tests/v10.js', 'js/tests/v11.js', 'js/tests/v12.js', 'js/tests/v13.js', 'js/tests/v14.js', 'js/tests/v15.js', 'js/tests/v16.js', 'js/tests/v17.js', 'js/tests/v18.js', 'js/tests/v19.js', 'js/tests/v20.js',
  'js/tests/v21.js', 'js/tests/v22.js', 'js/tests/v23.js', 'js/tests/v24.js', 'js/tests/v25.js', 'js/tests/v26.js', 'js/tests/v27.js', 'js/tests/v28.js',
  'js/tests/v31.js', 'js/tests/v32.js', 'js/tests/v33.js', 'js/tests/v34.js', 'js/tests/v35.js', 'js/tests/v36.js', 'js/tests/v37.js', 'js/tests/v38.js',
  'js/hoeren/fmt.js', 'js/hoeren/index.js', 'js/hoeren/h01.js', 'js/hoeren/h02.js', 'js/hoeren/h03.js', 'js/hoeren/h04.js', 'js/hoeren/h05.js', 'js/hoeren/h06.js', 'js/hoeren/h07.js', 'js/hoeren/h08.js',
  'js/hoeren/h11.js', 'js/hoeren/h12.js', 'js/hoeren/h13.js', 'js/hoeren/h14.js', 'js/hoeren/h15.js', 'js/hoeren/h16.js', 'js/hoeren/h17.js', 'js/hoeren/h18.js',
  'books/strom-verstehen.fb2', 'books/der-neue-kollege.fb2', 'books/hausnummer-12.fb2', 'books/kleine-geschichten.fb2',
  'data/base-de-ru.txt', 'manifest.webmanifest', 'icon.svg', 'assets/icon-192.png', 'assets/icon-512.png'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'no-cache' })))).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  // no-cache: сверяемся с сайтом при каждой загрузке, иначе браузер ещё 10 минут отдаёт старые файлы из своего кеша
  e.respondWith(fetch(e.request.url, { cache: 'no-cache' }).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
