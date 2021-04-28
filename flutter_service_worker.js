'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
<<<<<<< HEAD
  "assets/AssetManifest.json": "de88820677b0854feae66c53a3c77c28",
=======
  ".git/COMMIT_EDITMSG": "19c3ad5d3ffac324de6bde1fd508dd83",
".git/config": "caf4ce2972f88bcc17a69a4bafefb46d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0aeaef4727dd9104ee8395d86771067a",
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
".git/index": "b43ab4979510ca8d960f06e5b36214b2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "76af8df07a11891bba789ca75928a658",
".git/logs/refs/heads/main": "76af8df07a11891bba789ca75928a658",
".git/logs/refs/remotes/origin/HEAD": "004a33937f358da453006e758aa5059c",
".git/logs/refs/remotes/origin/main": "741363e3e558e29c80dc6f1cdb71c6c3",
".git/objects/03/8f41174827de5db7b6717177129b1cd6846eb0": "5527d3d65f66839239ffe0be9e1f4fa1",
".git/objects/0d/179dbcfa2795ad27da72e215734c99a5f36fb6": "b9ef1beaf4e45b8145c9fdde99fa9920",
".git/objects/15/970a1adc4ffa08913947125667d748dea51874": "73a193ab8fc19342c3968ec8ba3cbb5e",
".git/objects/17/e2f30a85251ebee79254c80e9751b7fa666990": "bfa5d21ddf5e8cb19a16822a7e04e6c7",
".git/objects/1c/7cd2990e7ad5f51f0fcff2c53c0c4e68de6234": "30ef709e3600e7234d6ae9e812ef25c1",
".git/objects/1d/0712a222bf9c970401610e97540a29ae72d01b": "df756080001cc81e91e74c6e72c07d2c",
".git/objects/20/465b529d2266cbac02702ad5fe620d009c889f": "a17c8f6e2821d702b808f863715ce5fb",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/37/2acb08f827c0948bcd1e860f05ac9f5f602949": "36e7e769eb016c6011b4c3349e1dbc08",
".git/objects/38/0a277377e484f560c7f04a8e10a041d4715cb9": "d53550c3a61205eb9f3f74cb6349cae4",
".git/objects/39/69c9fbbe48cef01a98428dc8f58535a70be94c": "66fd06724d24df3531ef872205472815",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/45/498974c3d478b63f8461711d28160fc89e4a67": "f4432d7a03f7cff46fc0aebd658bb91c",
".git/objects/46/3ed51a370b8fd6922556348478426f53a468b4": "aa6df817854a2949d552bd31f3777c92",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/3bcad6ba0bcf9d2ddf44c556d8359b66943705": "fe2098ca769e285fa5072da9f3fa6333",
".git/objects/58/ce77faaea98a8cf7b9472e2dd885b80820c9b1": "130ff50c357432c1e6420613d3a5f291",
".git/objects/6c/507182633612f19e34c16d28512193026bc285": "3c3cb4991e05609512f7b7f614139e65",
".git/objects/6f/57b4adcec2d5d507ab0d8a71ed3c5ee0393394": "4b5cb3fecfb6970ecf31524a7a9bc819",
".git/objects/79/24bc8dce9e073828a44b686e26eed3572aa01e": "d3838e332c175926bde6888952194781",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/23384a5f4d10f1f275489e8dbdd32185ad6997": "93e68f9a779d8752b27981e0bb9245b5",
".git/objects/84/f7c86b49e6f35d54bb506facc6b143b01e72d6": "58e1c618706330d9d3d7713878b1ae53",
".git/objects/88/9e3ea105d88365fdbd69b6e1ba2f76ca5bf8cd": "156045cf690363aafa217c4861826777",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e360a7652daa5e78b2fc424c8f1c934847010a": "2b8c26f5558d14515ac8d924f4813de5",
".git/objects/8f/f9775e9bd39c35affd6fab401ed6fa993e5310": "2de025ea80b04b106054328b8a876157",
".git/objects/93/170cacdfd759b96865787d93522a27f8043573": "068bab5dcaf120c4aede66ec6d5df8eb",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/99/cdd08598a0946eb47b496ebfb7c40aaa871d77": "a27dd1c14ab306dc3d36b78eba443d53",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a9a48bad22ec977a643edf63c43b792f293c17": "907dfa45468a89b7224a875b8ecdbfd7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/89be7e42ce8e62189f12a8164f1b7ee8059611": "9dc2f4cefd815896ceaa105581c51d0a",
".git/objects/c2/9000df36ee12b3e34a0cc8f4f4c12010e59fb5": "c86679cf129f30b9c2ff558e0b57994d",
".git/objects/c6/35ad733093038786bb81813bdb4c507f7963b0": "5b810bd68b18dd5903bd70bfd98762f7",
".git/objects/c8/cb166155c0d7b4bb5a302c4f03d5f20c9d5bd2": "0e69325f2a9580e5f02319c78c852688",
".git/objects/cc/44eb03b163a642aab2c4002b1c0e05eae89eb9": "a4c0f43ac63343bc7b216c08d81716bb",
".git/objects/cc/575dd4f2d2574ab76c56f69948563525ab1246": "f2ff17be60dcedcba87f4e8c5d005845",
".git/objects/cf/557c6f5bc5945bd49e1549aa8310843f6505bc": "9ecdae92b9fdbaf650def35b49ac570d",
".git/objects/d0/e04e169314f8f81716d0261df34c5b8599e511": "245e56d398298a193e71a506064e3076",
".git/objects/de/2d689b33b70ad2cea90d9dd7c3fb0777fa1dc7": "aaaaa96c6a253ae2c20f8ba7fc3d8160",
".git/objects/e5/12e83cf6aaf30df35d503d53474d996dfe8488": "f4d75f6dddf9ef48e918efe53d1cecb8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fa/61d00fde62e8a05e1b177500615fe1aec66455": "90ccc80af6dbfda474977e97cafc54eb",
".git/packed-refs": "e222806d1c2802418dddf040ac381122",
".git/refs/heads/main": "ec57e9c01f669df493b9b13d1834f33b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ec57e9c01f669df493b9b13d1834f33b",
"aihamhasan.github.io/.git/config": "caf4ce2972f88bcc17a69a4bafefb46d",
"aihamhasan.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"aihamhasan.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"aihamhasan.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"aihamhasan.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"aihamhasan.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"aihamhasan.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"aihamhasan.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"aihamhasan.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"aihamhasan.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"aihamhasan.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"aihamhasan.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"aihamhasan.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"aihamhasan.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"aihamhasan.github.io/.git/index": "877c5680181352fc1f0c3b6e6915caa0",
"aihamhasan.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"aihamhasan.github.io/.git/logs/HEAD": "004a33937f358da453006e758aa5059c",
"aihamhasan.github.io/.git/logs/refs/heads/main": "004a33937f358da453006e758aa5059c",
"aihamhasan.github.io/.git/logs/refs/remotes/origin/HEAD": "004a33937f358da453006e758aa5059c",
"aihamhasan.github.io/.git/objects/03/8f41174827de5db7b6717177129b1cd6846eb0": "5527d3d65f66839239ffe0be9e1f4fa1",
"aihamhasan.github.io/.git/objects/15/970a1adc4ffa08913947125667d748dea51874": "73a193ab8fc19342c3968ec8ba3cbb5e",
"aihamhasan.github.io/.git/objects/1c/7cd2990e7ad5f51f0fcff2c53c0c4e68de6234": "30ef709e3600e7234d6ae9e812ef25c1",
"aihamhasan.github.io/.git/objects/37/2acb08f827c0948bcd1e860f05ac9f5f602949": "36e7e769eb016c6011b4c3349e1dbc08",
"aihamhasan.github.io/.git/objects/38/0a277377e484f560c7f04a8e10a041d4715cb9": "d53550c3a61205eb9f3f74cb6349cae4",
"aihamhasan.github.io/.git/objects/45/498974c3d478b63f8461711d28160fc89e4a67": "f4432d7a03f7cff46fc0aebd658bb91c",
"aihamhasan.github.io/.git/objects/46/3ed51a370b8fd6922556348478426f53a468b4": "aa6df817854a2949d552bd31f3777c92",
"aihamhasan.github.io/.git/objects/49/3bcad6ba0bcf9d2ddf44c556d8359b66943705": "fe2098ca769e285fa5072da9f3fa6333",
"aihamhasan.github.io/.git/objects/6c/507182633612f19e34c16d28512193026bc285": "3c3cb4991e05609512f7b7f614139e65",
"aihamhasan.github.io/.git/objects/79/24bc8dce9e073828a44b686e26eed3572aa01e": "d3838e332c175926bde6888952194781",
"aihamhasan.github.io/.git/objects/7d/23384a5f4d10f1f275489e8dbdd32185ad6997": "93e68f9a779d8752b27981e0bb9245b5",
"aihamhasan.github.io/.git/objects/88/9e3ea105d88365fdbd69b6e1ba2f76ca5bf8cd": "156045cf690363aafa217c4861826777",
"aihamhasan.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"aihamhasan.github.io/.git/objects/8a/e360a7652daa5e78b2fc424c8f1c934847010a": "2b8c26f5558d14515ac8d924f4813de5",
"aihamhasan.github.io/.git/objects/99/cdd08598a0946eb47b496ebfb7c40aaa871d77": "a27dd1c14ab306dc3d36b78eba443d53",
"aihamhasan.github.io/.git/objects/c6/35ad733093038786bb81813bdb4c507f7963b0": "5b810bd68b18dd5903bd70bfd98762f7",
"aihamhasan.github.io/.git/objects/cc/44eb03b163a642aab2c4002b1c0e05eae89eb9": "a4c0f43ac63343bc7b216c08d81716bb",
"aihamhasan.github.io/.git/objects/cf/557c6f5bc5945bd49e1549aa8310843f6505bc": "9ecdae92b9fdbaf650def35b49ac570d",
"aihamhasan.github.io/.git/objects/d0/e04e169314f8f81716d0261df34c5b8599e511": "245e56d398298a193e71a506064e3076",
"aihamhasan.github.io/.git/packed-refs": "e222806d1c2802418dddf040ac381122",
"aihamhasan.github.io/.git/refs/heads/main": "560b0f16f5f53a771c51e16fd9118acb",
"aihamhasan.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"aihamhasan.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"aihamhasan.github.io/index.html": "f580cb0c1da0e9d00953cb89191e04f6",
"/": "741038aa57ccb06ba1cdb2bf04460516",
"aihamhasan.github.io/LICENSE": "b07563ee9029b5cfeba971b546e71784",
"aihamhasan.github.io/main.dart.js": "ee9755b6e0eb3635c9227156e5243f7a",
"aihamhasan.github.io/manifest.json": "c9d1bb3062dbd7146c6b739f684d7cdb",
"aihamhasan.github.io/pianoapp.png": "d8c06951d1e0ce2e76c1a466c054bc78",
"aihamhasan.github.io/README.md": "e02c3887cf2ee3c29f9389e493b7aeb8",
"aihamhasan.github.io/version.json": "082a1a8d9f3b2cd6ec9e24024c66ed7c",
"assets/AssetManifest.json": "de88820677b0854feae66c53a3c77c28",
>>>>>>> e82b8a4312089996f374b34141848aa87ce18880
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
<<<<<<< HEAD
"/": "741038aa57ccb06ba1cdb2bf04460516",
"main.dart.js": "c49229118dca7527350d75a016b50976",
=======
"main.dart.js": "7c59c6088857b3d11a7b7b9e8a9d08b5",
>>>>>>> e82b8a4312089996f374b34141848aa87ce18880
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
