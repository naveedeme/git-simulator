const CACHE = 'gitsim-v3';
const BASE  = '/git-simulator';

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([
      BASE + '/index.html',
      BASE + '/manifest.json',
      BASE + '/icons/icon-192x192.png',
      BASE + '/icons/icon-192x192-maskable.png',
      BASE + '/icons/icon-512x512.png',
      BASE + '/icons/icon-512x512-maskable.png',
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
