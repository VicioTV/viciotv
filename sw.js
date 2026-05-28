const CACHE_VERSION = "v2";
const CACHE_NAME = `viciotv-cache-${CACHE_VERSION}`;

const SHELL_FILES = [
  "index.html",
  "manifest.json",
  "icon.png"
];

// ── INSTALL: cachear el shell
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: limpiar caches viejas
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => clients.claim())
  );
});

// ── FETCH
self.addEventListener("fetch", (e) => {
  // Ignorar métodos que no sean GET
  if (e.request.method !== "GET") return;

  const url = new URL(e.request.url);

  // APIs externas (TMDB, providers, DiceBear) → solo red, sin cachear
  if (url.origin !== self.location.origin) {
    e.respondWith(
      fetch(e.request).catch(() => new Response(JSON.stringify({ error: "offline" }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      }))
    );
    return;
  }

  // Archivos propios → cache first, red como fallback + actualizar cache
  e.respondWith(
    caches.match(e.request).then(cached => {
      const networkFetch = fetch(e.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => cached); // si falla la red y hay cache, usar cache

      // Si hay cache la devolvemos ya, y actualizamos en segundo plano
      return cached || networkFetch;
    })
  );
});

// ── MENSAJE desde la app para forzar actualización
self.addEventListener("message", (e) => {
  if (e.data === "skipWaiting") self.skipWaiting();
});
