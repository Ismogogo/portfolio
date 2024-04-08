'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6d8f4f278a5884c5297f63dccc876bda",
"assets/AssetManifest.bin.json": "c228b275e0e5df839a0874b0ce6c1dbb",
"assets/AssetManifest.json": "5fcbba06cb0ded690938c10b02b1336c",
"assets/assets/Site_portfolio/AF1/AF1.png": "155c0c5331d67841fc85304026b71ef0",
"assets/assets/Site_portfolio/AF1/gif_air_force.gif": "59b5aac72d8e264c767870648eec6934",
"assets/assets/Site_portfolio/BOOK_TRAILER/1.png": "b5c3f0ca51fc3569b6cdd4ad0e1142f3",
"assets/assets/Site_portfolio/BOOK_TRAILER/2.png": "3408e5d2457c0431903a6c050f616eee",
"assets/assets/Site_portfolio/BOOK_TRAILER/booktrailer.txt": "ab1491e3b2e3e4f2760433737f7ca1de",
"assets/assets/Site_portfolio/BOOK_TRAILER/couverture_booktrailer.png": "c3dcb22b2baa79e4ef1621ec97ef28db",
"assets/assets/Site_portfolio/BOOK_TRAILER/COUV_2.png": "fb9b4b74d280f973fa3e5765adaafcc7",
"assets/assets/Site_portfolio/BOOK_TRAILER/gif_booktrailer.gif": "9733d1330890babf46d5e25dcfc99ab9",
"assets/assets/Site_portfolio/gif_showreel.gif": "5138fcde85bf85cf9299dd17c18c790a",
"assets/assets/Site_portfolio/GRILLZ_PRADA/1.png": "2f86e4a12a59b13088ac3c4e5e83d1b1",
"assets/assets/Site_portfolio/GRILLZ_PRADA/2.png": "ac6b287a520bfbc33a9ca7f44006a88e",
"assets/assets/Site_portfolio/GRILLZ_PRADA/couverture_prada.png": "178d7ce5b2b3be83025717358d859073",
"assets/assets/Site_portfolio/GRILLZ_PRADA/gif_prada.gif": "da2e4f518389c823f51a0da46728a1be",
"assets/assets/Site_portfolio/GRILLZ_PRADA/Texte%2520prada%2520(1).txt": "8fd65c943d56ace10df861188ee3bf2b",
"assets/assets/Site_portfolio/MIMI_S/1.png": "5fb06d0f6ddd9523c9f375443a13517b",
"assets/assets/Site_portfolio/MIMI_S/2.png": "8c29d49a9af9fbf6167eaace94e0cd4f",
"assets/assets/Site_portfolio/MIMI_S/3.png": "00cf874fd8c66470d1373de96b30e44f",
"assets/assets/Site_portfolio/MIMI_S/4.png": "e252cd84e35b342bb5187c6cbef86db4",
"assets/assets/Site_portfolio/MIMI_S/5.png": "4dd02855644cff28b1006188ba1326b7",
"assets/assets/Site_portfolio/MIMI_S/couverture_mimis.png": "233c90b2bbd26147e237f8c24a1ae348",
"assets/assets/Site_portfolio/MIMI_S/gif_mimis.gif": "87d7b71f4f992607bf17db2ce4305655",
"assets/assets/Site_portfolio/MIMI_S/mimi's.txt": "ab1115a758960301c5e0a1f606ccf9d0",
"assets/assets/Site_portfolio/NOPE/cov_nope.png": "a0a06a5beb226767706dee63a2dc2b4e",
"assets/assets/Site_portfolio/NOPE/gif_nope.gif": "8305675cb55c675e2a56c3f7a22b0559",
"assets/assets/Site_portfolio/RESTAMOBILE/1.jpg": "6ee97d5d389db196143feef961735108",
"assets/assets/Site_portfolio/RESTAMOBILE/2.jpg": "144ae172974d4f1538882edc834e9675",
"assets/assets/Site_portfolio/RESTAMOBILE/couverture_camionette.png": "7723d20acc21a9749a38b132c478283e",
"assets/assets/Site_portfolio/RESTAMOBILE/restamobile.txt": "11765392f9ecd85de26e61a4c50ca2c3",
"assets/assets/Site_portfolio/RTECH/gif_rtech.gif": "125bf199acd4a2d4e5afbffe9b03fef2",
"assets/assets/Site_portfolio/RTECH/rtech.png": "cd93064db991a513ed6f96ad86ea6a24",
"assets/assets/Site_portfolio/Showreel.mp4": "5fea7a0cb4605c20244add18a13a6cc0",
"assets/assets/Site_portfolio/TOP_GEAR/1.png": "3e079110462a45620805421247a3da16",
"assets/assets/Site_portfolio/TOP_GEAR/2.jpg": "609ed4119565b92bc0eeab780493b19c",
"assets/assets/Site_portfolio/TOP_GEAR/couverture_top_gear.jpg": "ef7acf1efdf63800e77b7d8589fd89f6",
"assets/assets/Site_portfolio/TOP_GEAR/gif_top_gear.gif": "db8bed23dceacf36e9b9c4be2afe81bc",
"assets/assets/Site_portfolio/TOP_GEAR/top_gear.txt": "c35395fc85ab9678c7717795c9d1fe6b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4ce81e1e518f05eebe3de55d796e16a3",
"assets/NOTICES": "3eff2bc48ace5081004b3fff13040337",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon_portfolio.png": "2226dc29529aa89f9a1de5a8fdc0ad7b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-192x192.png": "dcd5ec871a860e272215b2a0b5a1b0d2",
"icons/favicon-16x16.png": "7fc87245968ff58a9a9fb68a7006ef63",
"icons/favicon-256x256.png": "5289090413698a5e988198e6589242ab",
"icons/favicon-32x32.png": "2226dc29529aa89f9a1de5a8fdc0ad7b",
"icons/favicon-96x96.png": "a257e7a37aaa6d3115b89833e9034a89",
"icons/favicon.ico": "6f7bb8f2e62c76a389372ccc5e3fb45f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "0d80e989f4d667137dee69271a5c42f3",
"index.html": "c8dafeacfad99816788746549e5e1c55",
"/": "c8dafeacfad99816788746549e5e1c55",
"main.dart.js": "f09e872f2bd52d2bdbe5f3537da15ed7",
"manifest.json": "ded87d4f20a4076a47d8141e9e0240fa",
"version.json": "43e03f2dde43aec009302109f360b236"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
