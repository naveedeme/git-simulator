const CACHE = 'gitsim-v5';
const BASE  = new URL('./', self.location).pathname.replace(/\/$/, '');

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([
      BASE + '/index.html',
      BASE + '/manifest.json',
      BASE + '/favicon.ico',
      BASE + '/icon-72x72.png',
      BASE + '/icon-96x96.png',
      BASE + '/icon-128x128.png',
      BASE + '/icon-144x144.png',
      BASE + '/icon-152x152.png',
      BASE + '/icon-192x192.png',
      BASE + '/icon-384x384.png',
      BASE + '/icon-512x512.png',
    ]))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks =>
      Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const requestUrl = new URL(e.request.url);
  if (requestUrl.origin !== self.location.origin || !requestUrl.pathname.startsWith(BASE || '/')) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match(BASE + '/index.html')))
  );
});
