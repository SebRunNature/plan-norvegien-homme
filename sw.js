const CACHE = 'srn-plan-homme-v8';
const FILES = [
  '/plan-norvegien-homme/',
  '/plan-norvegien-homme/index.html',
  '/plan-norvegien-homme/manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(FILES);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
