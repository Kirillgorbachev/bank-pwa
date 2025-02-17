import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { ExpirationPlugin } from 'workbox-expiration';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { CacheFirst, NetworkFirst, NetworkOnly } from 'workbox-strategies';

const URL = 'https://surf-frontend-bootcamp-back.surfstudio.ru';

cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);

precacheAndRoute([
    { url: '/assets/stories-1-BmFuhfHQ.png', revision: null },
    { url: '/assets/stories-2-CcOZIvle.png', revision: null },
    { url: '/assets/stories-3-De0RP_MB.png', revision: null },
    { url: '/assets/manual-image-1-eNqnulPJ.png', revision: null },
    { url: '/assets/manual-image-2-Hm1xF1qf.png', revision: null },
]);

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            await cleanupOutdatedCaches();

            if (self?.clients?.claim) await self.clients.claim();

            const clients = await self.clients.matchAll({
                type: 'window',
            });

            clients.forEach((client) => client.navigate(client.url));
        })(),
    );
});

const imageRoute = new Route(
    ({ request, sameOrigin }) => sameOrigin && request.destination === 'image',
    new CacheFirst({
        cacheName: 'images',
    }),
);
registerRoute(imageRoute);

const navigationRoute = new Route(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({
        cacheName: 'navigation',
    }),
);
registerRoute(navigationRoute);

const apiRoutes = [
    { url: `${URL}/cards`, cacheName: 'api/cards' },
    { url: `${URL}/goals`, cacheName: 'api/goals' },
    { url: `${URL}/paymentSystems`, cacheName: 'api/paymentSystems' },
    { url: `${URL}/contacts`, cacheName: 'api/contacts' },
    { url: `${URL}/users`, cacheName: 'api/users' },
    { url: `${URL}/documents`, cacheName: 'api/documents' },
    { url: `${URL}/messages`, cacheName: 'api/messages' },
];

apiRoutes.forEach(({ url, cacheName }) => {
    registerRoute(
        ({ request }) => request.url === url,
        new NetworkFirst({
            cacheName,
        }),
    );
});

const bgSyncPlugin = new BackgroundSyncPlugin('backgroundSyncQueue', {
    maxRetentionTime: 24 * 60,
});

const postRoutes = [
    { url: `${URL}/messages`, method: 'POST' },
    { url: `${URL}/cards`, method: 'POST' },
    { url: `${URL}/users`, method: 'PATCH' },
];

postRoutes.forEach(({ url, method }) => {
    registerRoute(
        ({ request }) => request.url === url,
        new NetworkOnly({
            plugins: [bgSyncPlugin],
        }),
        method,
    );
});

const userFilesRoute = new Route(
    ({ url }) => url.pathname.startsWith('/user-files/'),
    new CacheFirst({
        cacheName: 'user-files-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
            }),
        ],
    }),
);
registerRoute(userFilesRoute);

self.addEventListener('push', (event) => {
    const data = event.data?.json();
    const title = data?.title || 'Новое уведомление';
    const options = {
        body: data?.body || 'Текст уведомления',
        icon: '/icon-192x192.png',
        badge: '/icon-192x192.png',
    };

    event.waitUntil(self.registration.showNotification(title, options));
});
