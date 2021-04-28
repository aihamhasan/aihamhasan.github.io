'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "caf4ce2972f88bcc17a69a4bafefb46d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "318d42e0d0cfdb755025db1c62c303b4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9fbc257ea35d8939c21886f3b0f1077b",
".git/logs/refs/heads/main": "8e694255c0df90fbb2a123ad69555ca6",
".git/logs/refs/remotes/origin/main": "33c16af216f0c9afd3f83813d4b3871f",
".git/objects/06/ae14008c0fd6577996a298d3dc2594ddd8c85d": "2b1aff02be7eaa1c1a212ed0d7fa79f2",
".git/objects/08/d1fc8744df9b9c3ac1506d848164df4b24fe05": "cc39f510862468aaa8301e4d53e89c07",
".git/objects/0d/179dbcfa2795ad27da72e215734c99a5f36fb6": "b9ef1beaf4e45b8145c9fdde99fa9920",
".git/objects/20/465b529d2266cbac02702ad5fe620d009c889f": "a17c8f6e2821d702b808f863715ce5fb",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2d/468e07c2c86479f583b9c7e621c4afcf1ba71c": "111a94e56bfb53c35f23227c82c4c0bd",
".git/objects/33/310de7dfa0ea099c843cd5b33b8980d6acc668": "1c8872e6ffd2a20a981bd50e8afb5a1b",
".git/objects/3d/7bec1d1dbeccc1cf95a6f39d673e5ce6857706": "794186e784b915f370bd590044e8e8ff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/8ad3e2eb66fbf3ee1dabec45426552cdb32bac": "d1f1d926e33c14c9fa22f54f13d4f220",
".git/objects/79/24bc8dce9e073828a44b686e26eed3572aa01e": "d3838e332c175926bde6888952194781",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/29f1e16432fb4490ad3c086cf05febececfc50": "e37fd9172b845bb207b88aa42448f4da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/7c0e5352be1df00317d9a579593fa809d3e1f2": "15d515684b51da453ea74c7759cc1b83",
".git/objects/93/170cacdfd759b96865787d93522a27f8043573": "068bab5dcaf120c4aede66ec6d5df8eb",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/99/35f67dc2268c9a33b42436c88518b243819c7b": "16a9048a7898ba3e884320ed1f163253",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/bb813a590ae9ce3bf335c3f9ac0c3bf92a2e36": "70ee4bd441ba07ae31427decedb1198d",
".git/objects/a6/722967a290b716e893aa6e94474ae84b182cf0": "baf2e5a863d93ac96f0212a0c3576033",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/0beab3f358de88b1f3404a006747a903ee0151": "d8545e6cf52bddb76fe0a56c15438774",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/b245ec0f8f7eb7606dd8bd0251b25c3864bfe6": "d89647ac09a12119a3777537e4443448",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c3/2cd87b62e2e7ea666a58486545707941cefe1a": "bd970c953b902a1fe31b38b90405b406",
".git/objects/d4/347bf5d1cceb9920c212f908dfdc5f4dfafef4": "f0429ac5f648f114b41d86e240f3b69c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/4ac6433798c96a1fc81f4227d7f358a44fdbb9": "027a8a026f11157873966e9f36677695",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/main": "c5c2bd247c3802e410f0d024c29c93a0",
".git/refs/remotes/origin/main": "c5c2bd247c3802e410f0d024c29c93a0",
"assets/AssetManifest.json": "de88820677b0854feae66c53a3c77c28",
"assets/assets/1.png": "8e461c743be9594a643e7f5c7db8a617",
"assets/assets/2.png": "c15fc29deed06b7f23b4cd1971a00838",
"assets/assets/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/img1.png": "cdd4d16949cc21bfc63f8088858c30c7",
"assets/assets/img2.png": "4b5f6fe00047ba529487596ff5e2c735",
"assets/assets/linkedin.png": "6e3b7f958ab1e8a00d400948c1f5d2b0",
"assets/assets/portfolio.png": "0785755b57205fc47c70d0be8c210d04",
"assets/assets/stack.png": "1a1cb3bee487df287cb52477043e97fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "411a966e3996f5cdec69225a08983459",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "abeffc5734f97ee67af29d4c31c26d3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "741038aa57ccb06ba1cdb2bf04460516",
"/": "741038aa57ccb06ba1cdb2bf04460516",
"main.dart.js": "c49229118dca7527350d75a016b50976",
"manifest.json": "c9d1bb3062dbd7146c6b739f684d7cdb",
"version.json": "082a1a8d9f3b2cd6ec9e24024c66ed7c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
