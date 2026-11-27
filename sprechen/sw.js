// Офлайн-режим: сначала сеть (обновления приходят сразу), при её отсутствии — кеш.
const PREFIX = 'sprechen-b1-';
const CACHE = PREFIX + 'v3';
// Список сверяет tools/check-precache.mjs: в нём должны быть все файлы приложения
const SHELL = ['./', 'app.css', 'app.js', 'assets/arbeit.jpg', 'assets/arzt.jpg', 'assets/bus.jpg', 'assets/essen.jpg', 'assets/kasse.jpg', 'assets/kurs.jpg', 'assets/spielplatz.jpg', 'assets/umzug.jpg', 'icon-192.png', 'icon-512.png', 'icon.svg', 'index.html', 'js/data/index.js', 'js/data/phrases.js', 'js/data/s01.js', 'js/data/s02.js', 'js/data/s03.js', 'js/data/s04.js', 'js/data/s05.js', 'js/data/s06.js', 'js/data/s07.js', 'js/data/s08.js', 'js/data/scenes.js', 'js/db.js', 'js/llm.js', 'js/speak.js', 'js/trainer.js', 'js/views.js', 'js/voice.js', 'js/voicein.js', 'manifest.webmanifest'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'no-cache' })))).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(fetch(e.request.url, { cache: 'no-cache' }).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
