"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"IByond"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"6a47bd1e0f898277f6e9276560098b49",url:"./404.html"},{revision:"5a3ef46333329b18383a20aeab800cdd",url:"./about/index.html"},{revision:"01773bafcb934c3529e38424a922a330",url:"./archives/2020/09/index.html"},{revision:"b3d36dd59d3e71189d8a1a23759ff0e1",url:"./archives/2020/10/index.html"},{revision:"0687f8f78e5f8949263000bfb147b15d",url:"./archives/2020/11/index.html"},{revision:"b197a623ab5e69e8bf9370f318d05f94",url:"./archives/2020/index.html"},{revision:"20d7404daf1d3f801e62bb72f3cf8168",url:"./archives/index.html"},{revision:"264404c62004e8fa93b9fdc7f3883214",url:"./artitalk/index.html"},{revision:"bd1ca1cc1e08a5b680b49aae2e18fc17",url:"./books/index.html"},{revision:"ba222bc71271adc810ec5a4718cff6b9",url:"./categories/Docker/index.html"},{revision:"fede70e04c3ff2896171316dddf19b14",url:"./categories/index.html"},{revision:"7843dd09b36802cbbf95582ce0231a9b",url:"./categories/Laravel/index.html"},{revision:"7293a56004f27d4f4d0598a09805c1c1",url:"./categories/Nodejs/index.html"},{revision:"2e1aabe6470cf4a0a0d81a996d2bebdc",url:"./categories/PHP/index.html"},{revision:"1af5b2d1b39fe3e233f5ab387a4e147d",url:"./categories/工具/index.html"},{revision:"91aca4c7772ca35d7632dd64196db7b5",url:"./comments/index.html"},{revision:"cb66f448d347bae1e4cf3c5264c75048",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"71bb3d57cbd65e1e12328fa224bc9381",url:"./games/index.html"},{revision:"b2fd152769b98cd1a1a9a7fc1c0d0f89",url:"./index.html"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"6c46c04cb675d8335c936817f300286e",url:"./link/index.html"},{revision:"fd9831a58351f5a0f95b37196e3ba594",url:"./manifest.json"},{revision:"48783aa56d9d253bf5c9c88b61ddc91d",url:"./messageboard/index.html"},{revision:"9a279520db5282f4d00d4bb3929d5f41",url:"./movies/index.html"},{revision:"188511203a39a2a6750fabc5ea714f56",url:"./music/index.html"},{revision:"ebf4bb698e7dd766e6dc7ca942e2a88a",url:"./photos/index.html"},{revision:"28d2511aedbee7165e491ad6cdce5473",url:"./photos/wallpaper/index.html"},{revision:"ac4b4838d37f0fda4b63ce07c00cbbe7",url:"./posts/56609aa6/index.html"},{revision:"0d08feeaceeb344fda794a9a78f046f9",url:"./posts/6399d57/index.html"},{revision:"fd71eb2a49db0450a38baf43b5813a27",url:"./posts/a5f28b7b/index.html"},{revision:"0fe1ec6e1c615c7d561838c088aa9be0",url:"./posts/e403258e/index.html"},{revision:"e35962cc68f0ab628c758ea7581acec7",url:"./posts/e55fe323/index.html"},{revision:"2f48e11f2f3c9132afb2446e7943d3e8",url:"./tags/Composer/index.html"},{revision:"70051f77c9e49966c79d168be0ddcbbd",url:"./tags/Docker/index.html"},{revision:"218f8b7da79609da2a63930ec5c68353",url:"./tags/index.html"},{revision:"342f6ca51b0a7ef2b5be568ba049563b",url:"./tags/iTerm2/index.html"},{revision:"df4e99d3684546375430aa94fe3024b9",url:"./tags/Laradock/index.html"},{revision:"3c7891139d3965ac84d5ab6e407119b4",url:"./tags/Larave/index.html"},{revision:"6a9130de6a8fec3cda5a52ceb7f460cb",url:"./tags/npm/index.html"},{revision:"dd270b4dcdd43bf62743f97372bb623d",url:"./tags/PHP/index.html"},{revision:"b680bea365e2b3d815b5d96e3a2345a3",url:"./tags/ubuntu/index.html"},{revision:"9499b9bbcf5936b2557cafbe27e2bd6b",url:"./tags/Yarn/index.html"},{revision:"862907a4c90f92d8c8af74582155d529",url:"./tags/zsh/index.html"},{revision:"4ecce233bf3dea70be17b23d46b0934b",url:"./tags/去水印/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();