// Offline support for Dusk Runner when it is served over http(s) (e.g. GitHub Pages or a local server).
// Bump CACHE whenever game files change so players pick up the new version.
const CACHE = 'dusk-runner-v1';
const SHELL = ['./', 'index.html', 'raptor-run.html', 'manifest.webmanifest', 'icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  // records are never cached: they must always be the live file
  if (url.pathname.endsWith('/records.json')) return;
  // stale-while-revalidate: play instantly from cache, refresh it in the background
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(res => { if (res.ok) cache.put(e.request, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
