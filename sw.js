"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"IByond"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"38605c3cbba6a623540d7bc751b075fc",url:"./404.html"},{revision:"80eed207c0103ee171c58c932d5ef967",url:"./about/index.html"},{revision:"524cca1c8e7ec9c879460552269a4758",url:"./archives/2020/09/index.html"},{revision:"932b09b3420fd9f4767c1c354d1e1335",url:"./archives/2020/10/index.html"},{revision:"12edaa3fa0c053a44cfd0db4a98b4ad7",url:"./archives/2020/11/index.html"},{revision:"445b3dd89b11152f7c4405fde5a57816",url:"./archives/2020/index.html"},{revision:"46cf2e171059126cae7d883a0af9fa1b",url:"./archives/2021/07/index.html"},{revision:"79ed8cf0b2cf940d9193ceb76e380039",url:"./archives/2021/index.html"},{revision:"e64230a1b8e08806932b99ec972dce5c",url:"./archives/index.html"},{revision:"f43a602a1000b51084d546b1e090a971",url:"./artitalk/index.html"},{revision:"781f1b86bd567407504f0d69a2c356a5",url:"./books/index.html"},{revision:"5386bd94f3073565bd465dee1adcb60a",url:"./categories/Docker/index.html"},{revision:"b61e8b3b6cab45091f711a8f5c691e9d",url:"./categories/index.html"},{revision:"08899d62e80f783fcc17a79820f21ca4",url:"./categories/Laravel/index.html"},{revision:"fb43bf8714124cdce25ea578bbca9bab",url:"./categories/Nodejs/index.html"},{revision:"7e54a08398cbde308881527deee7602a",url:"./categories/PHP/index.html"},{revision:"0e444c998a8c55596c447c80c3371f92",url:"./categories/Redis/index.html"},{revision:"32befbe50d2a64c36adc2e6b00165d1b",url:"./categories/工具/index.html"},{revision:"b015c8ca45f2d3555b45f5b8d6b1692f",url:"./comments/index.html"},{revision:"cb66f448d347bae1e4cf3c5264c75048",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"8bbd5115e2c18e79310fb9c2abf5fbcd",url:"./games/index.html"},{revision:"97ed7c829f988f78cfacd956962f31f2",url:"./index.html"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"713be16e07a0294954a74351cd99d635",url:"./link/index.html"},{revision:"fd9831a58351f5a0f95b37196e3ba594",url:"./manifest.json"},{revision:"465b47fa7ec998f4ed67b48932e2440a",url:"./messageboard/index.html"},{revision:"94c2ea0c3b912803b12d32efeecc1944",url:"./movies/index.html"},{revision:"1c03567a85e881619ff6135db877279e",url:"./music/index.html"},{revision:"07c8b46d0592b5951ccf2ab7afc1bb31",url:"./photos/index.html"},{revision:"896cab8ddb6165c16f7e8c1bb5fba95b",url:"./photos/wallpaper/index.html"},{revision:"970abf72a91be0a2063ac74c497196d6",url:"./posts/16107/index.html"},{revision:"00b6a259acfa573654259b10dfaac96f",url:"./posts/56609aa6/index.html"},{revision:"92b3b7972dadb591e09c498f42133d29",url:"./posts/6399d57/index.html"},{revision:"6f9c97b251f3d6579ea12c0b29fde562",url:"./posts/78b568c7/index.html"},{revision:"4a9f806d4c1ed6155b353c200756adef",url:"./posts/a5f28b7b/index.html"},{revision:"474fef561acce8fa434616dce160d5bd",url:"./posts/e403258e/index.html"},{revision:"d233818774157a809c990999dae65fdf",url:"./posts/e55fe323/index.html"},{revision:"63553067599a6d2c9cdfe41c3435089b",url:"./tags/Composer/index.html"},{revision:"7e20e72eed9dc74b4d7b2d528326212e",url:"./tags/Docker/index.html"},{revision:"0ef2d46f0435919b3b29805afd02c95c",url:"./tags/index.html"},{revision:"0d3dcdbf8780dfcbfc870c0da6605558",url:"./tags/iTerm2/index.html"},{revision:"1b09d8fa4e94e3297bba5acad294b220",url:"./tags/Laradock/index.html"},{revision:"170de149c76f87927995a2e938496360",url:"./tags/Larave/index.html"},{revision:"d5aed8f4950eaf3e8f5e633e5a24862d",url:"./tags/npm/index.html"},{revision:"5628a074531efe0d73b49dded41d019e",url:"./tags/PHP/index.html"},{revision:"1d6b915b7bdfe754cee700e2f1723ff2",url:"./tags/Redis/index.html"},{revision:"89fc919b1807b6fa6aea184297df9377",url:"./tags/ubuntu/index.html"},{revision:"880cb285e300aa3c120fedd801175a98",url:"./tags/Yarn/index.html"},{revision:"793d95358633280e89e7fb49a43ce541",url:"./tags/zsh/index.html"},{revision:"6b7f799c3bb611a9198f70b85bf02333",url:"./tags/去水印/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();