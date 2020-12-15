var CacheName = 'moodo-cache-1608010540677',
    CacheNameCommon = 'moodo-cache-data';

function notifyClient(text)
{
    self.clients.matchAll({ includeUncontrolled: true }).then(function (all)
    {
        all.map(function (client)
        {
            client.postMessage('ServiceWorker_' + text);
        });
    });
}

self.addEventListener('install', function (e)
{
    console.log('Installing new Service Worker');

    self.skipWaiting();
    e.waitUntil(
        caches.open(CacheName).then(function (cache)
        {
            return cache.addAll([
                '/web/',
                '/web/index-1608010540677.html',
                '/web/js/vendor-1608010540677.js',
                '/web/js/delayedUI-1608010540677.js',
                '/web/js/codeBlock-1608010540677.js',
                '/web/js/dimport-1608010540677.js',
                '/web/js/textEncoding-1608010540677.js',
                '/web/js/braintree-1608010540677.js',
                '/web/js/app-1608010540677.js',
                '/web/js/preload-1608010540677.js',
                '/web/js/preload.worker-1608010540677.js',
                '/web/css/app-min-1608010540677.css',
                '/web/css/fonticons-1608010540677.css',
                '/web/css/fonts/fonticons-1608010540677.woff',
                '/web/css/fonts/fonticons-1608010540677.ttf'
            ]);
        }).then(caches.open(CacheNameCommon).then(function (cacheCommon)
        {
            return cacheCommon.addAll([
                '/favicon.ico',
                '/js/rollbar-min.js',
                '/img/stripe.png',
                '/img/apple-touch-icon.png',
                '/img/logoForBlack600.png',
                '/img/logoForWhite600.png',
                '/img/plugin-gdocs.png',
                '/img/plugin-gsheets.png',
                '/img/plugin-gslides.png',
                '/img/plugin-image.png',
                '/img/plugin-gcal.png',
                '/img/plugin-mailbird.png',
                '/img/plugin-gdrive.png',
                '/img/plugin-gmail.png',
                '/img/plugin-bear.png'
            ]);
        })).then(function ()
        {
            notifyClient('Installed');

            return self.skipWaiting();
        })
    );
});

var pathname = '/web/';

self.addEventListener('fetch', function (event)
{
    const urlObj = new URL(event.request.url);
    var url = event.request.url;

    if (urlObj.origin === location.origin && urlObj.href.indexOf(urlObj.origin + pathname) === 0)
    {
        if (urlObj.pathname === pathname)
        {
            url = url.replace(pathname, pathname + 'index-1608010540677.html');
        }

        event.respondWith(
            caches.match(url).then(function (response)
            {
                return response || fetch(event.request);
            }).catch(function () { })
        );
    }
});

self.addEventListener('activate', function (event)
{
    console.log('Activating new Service Worker');

    event.waitUntil(
        caches.keys().then(function (cacheNames)
        {
            return Promise.all(
                cacheNames.filter(function (cacheName)
                {
                    return cacheName !== CacheName && cacheName !== CacheNameCommon;
                }).map(function (cacheName)
                {
                    return caches.delete(cacheName);
                })
            );
        })
    );

    notifyClient('Activated');
});