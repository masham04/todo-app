
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/sw.js',
  'index.html',
  'index.js',
  'App.js',
  'App.css',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/static/js/bundle.js',
  

];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });