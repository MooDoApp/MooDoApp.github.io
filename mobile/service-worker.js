var CacheName = 'moodo-cache-1612885985590';
var CacheNameCommon = 'moodo-cache-data';

function notifyClient (text)
{
    return self.clients.matchAll({ includeUncontrolled: true }).then(function (all)
    {
        return Promise.all(all.map(function (client)
        {
            return client.postMessage('ServiceWorker_' + text);
        }));
    });
}

self.addEventListener('install', function (e)
{
    console.log('Service Worker: Installing');

    e.waitUntil(
        caches.open(CacheName).then(function (cache)
        {
            return cache.addAll([
                '/mobile/',
                '/mobile/index-1612885985590.html',
                '/mobile/js/vendor-1612885985590.js',
                '/mobile/js/codeBlock-1612885985590.js',
                '/mobile/js/textEncoding-1612885985590.js',
                '/mobile/js/app-1612885985590.js',
                '/mobile/js/preload-1612885985590.js',
                '/mobile/js/preload.worker-1612885985590.js',
                '/mobile/css/app-min-1612885985590.css',
                '/mobile/css/fonticons-1612885985590.css',
                '/mobile/css/fonts/fonticons-1612885985590.woff',
                '/mobile/css/fonts/fonticons-1612885985590.ttf'
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
        })).then(caches.keys().then(function (cacheNames)
        {
            // TODO: This is to support old versions of the code that didn't support not skipping waiting.
            // Can remove this when migrating to Legend.
            var supportsWaiting = true;
            for (var i = 0; supportsWaiting && i < cacheNames.length; i++)
            {
                var c = cacheNames[i];
                if (c.indexOf('data') < 0)
                {
                    var ver = c.replace('moodo-cache-', '');
                    console.log('ver', ver);
                    if (ver && +ver < 1612170007615)
                    {
                        console.log('Service Worker: Skipping Waiting');
                        supportsWaiting = false;
                    }
                }
            }

            notifyClient('Installed');

            if (!supportsWaiting)
            {
                return self.skipWaiting();
            }
        }))
    );
});

var pathname = '/mobile/';

self.addEventListener('fetch', function (event)
{
    var urlObj = new URL(event.request.url);
    var url = event.request.url;

    if (urlObj.origin === location.origin && urlObj.href.indexOf(urlObj.origin + pathname) === 0)
    {
        if (urlObj.pathname === pathname)
        {
            url = url.replace(pathname, pathname + 'index-1612885985590.html');
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
    console.log('Service Worker: Activating');

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

self.addEventListener('message', function (event)
{
    if (event.data === 'skipWaiting')
    {
        console.log('ServiceWorker: Skipping waiting');
        return self.skipWaiting();
    }
});