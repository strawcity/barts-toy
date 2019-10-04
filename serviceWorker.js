const staticAssets = [
    './',
    './index.js',
    './style.css',
    './sounds/go_to_hell.mp3',
    './sounds/kiss_my_butt.mp3',
    './sounds/shut_up.mp3',
]

self.addEventListener('install', async event=> {
    const cache = await caches.open('static-cache');
    cache.addAll(staticAssets);
})

self.addEventListener('fetch', event=>{
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.url) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = cache.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('dynamic-cache');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}