importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

//custom adjustments
workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);


// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.

  workbox.routing.registerRoute(
    new RegExp('https://fonts.googleapis.com/css?family=Ubuntu+Condensed&display=swap'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );
  
  workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "2e1b57b16e25d797c43ea09bc5d09a11"
  },
  {
    "url": "index.html",
    "revision": "75d33bc56da5227b0b8399bffb5852f1"
  },
  {
    "url": "js/app.js",
    "revision": "3206dc272c88fe59181fba8abd1da9cd"
  }
]);