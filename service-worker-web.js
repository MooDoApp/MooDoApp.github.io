var CacheName = 'moodo-cache-1583543074835',
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
                '/web/index-1583543074835.html',
                '/web/js/vendor-1583543074835.js',
                '/web/js/delayedUI-1583543074835.js',
                '/web/js/dimport-1583543074835.js',
                '/web/js/app-1583543074835.js',
                '/web/js/preload-1583543074835.js',
                '/web/js/preload.worker-1583543074835.js',
                '/web/css/app-min-1583543074835.css',
                '/web/css/fonticons-1583543074835.css',
                '/web/css/fonts/fonticons-1583543074835.woff',
                '/web/css/fonts/fonticons-1583543074835.ttf'
            ]);
        }).then(caches.open(CacheNameCommon).then(function (cacheCommon)
        {
            return cacheCommon.addAll([
                '/favicon.ico',
                '/js/rollbar-min.js',
                '/img/stripe.png',
                '/img/apple-touch-icon.png',
                '/img/logoForWhite600.png',
                '/img/btn_google_signin_dark_normal_web@2x.png',
                '/img/btn_google_signin_dark_focus_web@2x.png',
                '/img/btn_google_signin_dark_pressed_web@2x.png',
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
            url = url.replace(pathname, pathname + 'index-1583543074835.html');
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