const VERSION = 'senior-v13-auto';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
});
self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request, {cache: 'no-store'}).catch(()=>caches.match(e.request)));
});