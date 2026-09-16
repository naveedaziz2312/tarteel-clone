const CACHE = "snake-v4-playstore";
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./","./index.html","./manifest.json"])));
});
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)).catch(()=>caches.match("./index.html")));
});
