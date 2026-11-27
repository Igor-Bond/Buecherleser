// Офлайн-режим приложения Sprechen B1: сначала сеть (обновления приходят сразу), при её отсутствии — кеш.
// Имя кеша своё: кеши с началом «buecherleser-» стирает sw.js соседнего Bücherleser.
const PREFIX = 'sprechen-b1-';
const CACHE = PREFIX + 'v1';
// Список собирает и сверяет tools/check-precache.mjs: свои файлы и общие с Bücherleser модули из ../js
const SHELL = ['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png', '../js/db.js', '../js/speak.js', '../js/voicein.js', '../js/llm.js', '../js/hoeren.js', '../js/sprechen.js', '../js/trainer.js', '../js/sprechen/index.js', '../js/sprechen/phrases.js', '../js/sprechen/s01.js', '../js/sprechen/s02.js', '../js/sprechen/s03.js', '../js/sprechen/s04.js', '../js/sprechen/s05.js', '../js/sprechen/s06.js', '../js/sprechen/s07.js', '../js/sprechen/s08.js', '../js/sprechen/scenes.js', '../assets/sprechen/arbeit.jpg', '../assets/sprechen/arzt.jpg', '../assets/sprechen/bus.jpg', '../assets/sprechen/essen.jpg', '../assets/sprechen/kasse.jpg', '../assets/sprechen/kurs.jpg', '../assets/sprechen/spielplatz.jpg', '../assets/sprechen/umzug.jpg'];

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
