const cacheName = 'tutoria'

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // handler simples que apenas passa para a rede
  event.respondWith(fetch(event.request));
});