const cacheName = 'tutoria-v2'

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function (cache){
            cache.addAll([
                './',
                './manifest.webmanifest',
                './login.js',
                './styles.css',
                './login.html',
                './history.html',
                './math.html',
                './portuguese.html',
                './history.js',
                './math.js',
                './portuguese.js',
                './img/97b479d1-7a48-4124-a408-76570c6ebab2.png',
            ])
        })
    )
    return self.skipWaiting()
})

self.addEventListener('activate', e =>{
    self.clients.claim()
})

self.addEventListener('fetch', async e =>{
    const req = e.request
    const url = new URL(req.url)

    if(url.origin === location.origin){
        e.respondWith(cacheFirst(req))
    } else{
        e.respondWith(networkAndCache(req))
    }
})

async function cacheFirst(req){
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

async function networkAndCache(req){
    const cache = await caches.open(cacheName);
    try{
        const refresh = await fetch(req)
        await cache.put(req, fresh.clone())
        return refresh
    } catch(e){
        const cached = await cache.match(req);
        return cached
    }
}