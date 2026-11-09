/* Horadric Odds offline support: the page is fetched fresh when you're online (so updates show straight away)
   and served from this cache when you're not. Nothing else is stored. */
const CACHE = 'horadric-odds-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
const page0 = (req, url) => /\.json$/.test(url.pathname) && req.mode !== 'navigate' ? caches.match(req) : caches.match('./index.html').then((r) => r || caches.match('./'));
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameSite = url.origin === self.location.origin;
  const fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameSite && !fonts) return;
  if (req.mode === 'navigate' || (sameSite && /\/(index\.html)?$/.test(url.pathname)) || (sameSite && /\/i18n\/[a-z]+\.json$/.test(url.pathname))) {
    /* the page and its translations: network first, cached copy when offline */
    e.respondWith(fetch(req).then((res) => {
      const page = req.mode === 'navigate' || !/\.json$/.test(url.pathname);
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(page ? './index.html' : req, copy)); }
      return res;
    }).catch(() => page0(req, url)));
    return;
  }
  /* icons, manifest and fonts: cached copy first, refreshed in the background */
  e.respondWith(caches.match(req).then((hit) => {
    const net = fetch(req).then((res) => { if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
