'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "971b1c3eb87a721ca1278e50ff90be72",
"assets/AssetManifest.bin.json": "32276225b9af1c2818a97302592da340",
"assets/AssetManifest.json": "c396f440aed83bcff21c88975a4e2d88",
"assets/assets/images/badass_link.png": "89bb9a3f6d1c03819d770a5e7aee9313",
"assets/assets/images/booktrailer.png": "b5c3f0ca51fc3569b6cdd4ad0e1142f3",
"assets/assets/images/cov_booktrailer.png": "fb9b4b74d280f973fa3e5765adaafcc7",
"assets/assets/images/cov_mimis.png": "233c90b2bbd26147e237f8c24a1ae348",
"assets/assets/images/cov_prada.png": "178d7ce5b2b3be83025717358d859073",
"assets/assets/images/cov_restagraf.jpg": "6ee97d5d389db196143feef961735108",
"assets/assets/images/cov_top_gear.jpg": "ef7acf1efdf63800e77b7d8589fd89f6",
"assets/assets/images/la_proie_du_diable.mp4": "0f6b8de6b89ed9caa01a364269674f3e",
"assets/assets/images/leorio.jpg": "d0d7da0b003d2020c2cb76c262507bdb",
"assets/assets/images/megamind.jpg": "d55a75e63f3575a04ca44a894c07afbe",
"assets/assets/images/mimis_1.png": "4dd02855644cff28b1006188ba1326b7",
"assets/assets/images/mimis_2.png": "e252cd84e35b342bb5187c6cbef86db4",
"assets/assets/images/mimis_3.png": "00cf874fd8c66470d1373de96b30e44f",
"assets/assets/images/mimis_4.png": "8c29d49a9af9fbf6167eaace94e0cd4f",
"assets/assets/images/prada.png": "2f86e4a12a59b13088ac3c4e5e83d1b1",
"assets/assets/images/proj_mimis.png": "5fb06d0f6ddd9523c9f375443a13517b",
"assets/assets/images/proj_top_gear.png": "3e079110462a45620805421247a3da16",
"assets/assets/images/restagraf.jpg": "144ae172974d4f1538882edc834e9675",
"assets/assets/Site_portfolio/BOOK_TRAILER/1.png": "b5c3f0ca51fc3569b6cdd4ad0e1142f3",
"assets/assets/Site_portfolio/BOOK_TRAILER/2.png": "3408e5d2457c0431903a6c050f616eee",
"assets/assets/Site_portfolio/BOOK_TRAILER/booktrailer.txt": "ab1491e3b2e3e4f2760433737f7ca1de",
"assets/assets/Site_portfolio/BOOK_TRAILER/couverture_booktrailer.png": "c3dcb22b2baa79e4ef1621ec97ef28db",
"assets/assets/Site_portfolio/BOOK_TRAILER/COUV_2.png": "fb9b4b74d280f973fa3e5765adaafcc7",
"assets/assets/Site_portfolio/GRILLZ_PRADA/1.png": "2f86e4a12a59b13088ac3c4e5e83d1b1",
"assets/assets/Site_portfolio/GRILLZ_PRADA/2.png": "ac6b287a520bfbc33a9ca7f44006a88e",
"assets/assets/Site_portfolio/GRILLZ_PRADA/couverture_prada.png": "178d7ce5b2b3be83025717358d859073",
"assets/assets/Site_portfolio/GRILLZ_PRADA/Texte%2520prada%2520(1).txt": "8fd65c943d56ace10df861188ee3bf2b",
"assets/assets/Site_portfolio/MIMI_S/1.png": "5fb06d0f6ddd9523c9f375443a13517b",
"assets/assets/Site_portfolio/MIMI_S/2.png": "8c29d49a9af9fbf6167eaace94e0cd4f",
"assets/assets/Site_portfolio/MIMI_S/3.png": "00cf874fd8c66470d1373de96b30e44f",
"assets/assets/Site_portfolio/MIMI_S/4.png": "e252cd84e35b342bb5187c6cbef86db4",
"assets/assets/Site_portfolio/MIMI_S/5.png": "4dd02855644cff28b1006188ba1326b7",
"assets/assets/Site_portfolio/MIMI_S/couverture_mimis.png": "233c90b2bbd26147e237f8c24a1ae348",
"assets/assets/Site_portfolio/MIMI_S/mimi's.txt": "ab1115a758960301c5e0a1f606ccf9d0",
"assets/assets/Site_portfolio/RESTAMOBILE/1.jpg": "6ee97d5d389db196143feef961735108",
"assets/assets/Site_portfolio/RESTAMOBILE/2.jpg": "144ae172974d4f1538882edc834e9675",
"assets/assets/Site_portfolio/RESTAMOBILE/couverture_camionette.png": "7723d20acc21a9749a38b132c478283e",
"assets/assets/Site_portfolio/RESTAMOBILE/restamobile.txt": "11765392f9ecd85de26e61a4c50ca2c3",
"assets/assets/Site_portfolio/TOP_GEAR/1.png": "3e079110462a45620805421247a3da16",
"assets/assets/Site_portfolio/TOP_GEAR/2.jpg": "609ed4119565b92bc0eeab780493b19c",
"assets/assets/Site_portfolio/TOP_GEAR/couverture_top_gear.jpg": "ef7acf1efdf63800e77b7d8589fd89f6",
"assets/assets/Site_portfolio/TOP_GEAR/top_gear.txt": "c35395fc85ab9678c7717795c9d1fe6b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "594fc0c513fb86a9b75317fb10f5125f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1bdda7d91ba80caa8977f90387b640b",
"/": "e1bdda7d91ba80caa8977f90387b640b",
"main.dart.js": "24eccba4e8e2dc490fdfe1e2b590c091",
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
