// Офлайн-режим: сначала сеть (чтобы обновления приходили сразу), при её отсутствии — кеш.
// На igor-bond.github.io по одному адресу живут несколько приложений, и хранилище кешей у них общее:
// стирать можно только свои старые кеши, иначе соседи останутся без офлайна.
const PREFIX = 'buecherleser-';
const CACHE = PREFIX + 'v16';
const SHELL = ['./', 'index.html', 'css/app.css', 'js/app.js', 'js/db.js', 'js/dict.js', 'js/german.js', 'js/fb2.js', 'js/epub.js',
  'js/llm.js', 'js/demo.js', 'js/sync.js', 'js/firebase.config.js', 'js/lesen.js', 'js/tests-lesen-b1.js', 'js/tests/index.js',
  'js/tests/v03.js', 'js/tests/v04.js', 'js/tests/v05.js', 'js/tests/v06.js', 'js/tests/v07.js', 'js/tests/v08.js', 'js/tests/v09.js', 'js/tests/v10.js', 'js/tests/v11.js', 'js/tests/v12.js', 'js/tests/v13.js', 'js/tests/v14.js', 'js/tests/v15.js', 'js/tests/v16.js', 'js/tests/v17.js', 'js/tests/v18.js', 'js/tests/v19.js', 'js/tests/v20.js',
  'js/tests/v21.js', 'js/tests/v22.js', 'js/tests/v23.js', 'js/tests/v24.js', 'js/tests/v25.js', 'js/tests/v26.js', 'js/tests/v27.js', 'js/tests/v28.js',
  'js/tests/v31.js', 'js/tests/v32.js', 'js/tests/v33.js', 'js/tests/v34.js', 'js/tests/v35.js', 'js/tests/v36.js', 'js/tests/v37.js', 'js/tests/v38.js',
  'books/strom-verstehen.fb2', 'books/der-neue-kollege.fb2', 'books/hausnummer-12.fb2', 'books/kleine-geschichten.fb2',
  'data/base-de-ru.txt', 'manifest.webmanifest', 'icon.svg', 'assets/icon-192.png', 'assets/icon-512.png'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
