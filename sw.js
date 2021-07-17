"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"IByond"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"e8a1032ad79f651fa406f25c6509e091",url:"./404.html"},{revision:"3eaa222fd8e5d07fc2e1e2c4625121b9",url:"./about/index.html"},{revision:"e20e4b4fb79d0a5f11e8fb460a7d10ff",url:"./archives/2020/09/index.html"},{revision:"278daae522121bec68f7e89e92bca469",url:"./archives/2020/10/index.html"},{revision:"824b6bd6f19125ebd8e0d1c26f5d8040",url:"./archives/2020/11/index.html"},{revision:"d88d2cee7c26c77a3eb38f612f04116f",url:"./archives/2020/index.html"},{revision:"8ca483e45a23000d46b771350aebfff8",url:"./archives/index.html"},{revision:"946959a51680735d4fbd68166900c6ed",url:"./artitalk/index.html"},{revision:"6a5530b3de8f279b09e517879db50e6e",url:"./books/index.html"},{revision:"ac7d20b54bed37c2c33cf9442c6a91ff",url:"./categories/Docker/index.html"},{revision:"6c417673a0c3b8066f6399e9021ca2f6",url:"./categories/index.html"},{revision:"235d1f1eb999bbe35f120155f03353c9",url:"./categories/Laravel/index.html"},{revision:"d8749a12adfba020b273596bd700ac44",url:"./categories/Nodejs/index.html"},{revision:"09df5bca6b024f1c3a0035b462328096",url:"./categories/PHP/index.html"},{revision:"202256f7962963f383552404829dedb0",url:"./categories/Redis/index.html"},{revision:"5505498993cda2f533ac7f311b0399f3",url:"./categories/工具/index.html"},{revision:"fba39258b421eedfb500e201d3ced681",url:"./comments/index.html"},{revision:"cb66f448d347bae1e4cf3c5264c75048",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"8237d8f5025cc44b158b754cfc31e71b",url:"./games/index.html"},{revision:"535c6b45054b865b1676d2bbc607bf7a",url:"./index.html"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"a78bf86fc9bfb5b92aaf0322e57856e5",url:"./link/index.html"},{revision:"fd9831a58351f5a0f95b37196e3ba594",url:"./manifest.json"},{revision:"417c740dc3a930acd88574225aa3fba1",url:"./messageboard/index.html"},{revision:"d82a343f08b1d880f9cb334effa54eef",url:"./movies/index.html"},{revision:"c00a9a086e0afad068a9c5f2e6cc660a",url:"./music/index.html"},{revision:"db4bd78597b29dee4521f79a236534d2",url:"./photos/index.html"},{revision:"eb0e1fa79dbc6f0337d106f1ef52e370",url:"./photos/wallpaper/index.html"},{revision:"e5d88ea6d454a019154537ef8c41f2b5",url:"./posts/56609aa6/index.html"},{revision:"92d51f3e787cf8762e9244741238de89",url:"./posts/6399d57/index.html"},{revision:"b21437fe20a69f3fb0212dfe51708b86",url:"./posts/78b568c7/index.html"},{revision:"61cdd69eb70892ef9911e6b2a0b6c117",url:"./posts/a5f28b7b/index.html"},{revision:"ec1a455ba1c18332191fda12eb2f9bec",url:"./posts/e403258e/index.html"},{revision:"067f34f3f9d1469fc267a88322475321",url:"./posts/e55fe323/index.html"},{revision:"cacf137414a3b4d818acc7d9641a9b44",url:"./tags/Composer/index.html"},{revision:"768926345d9a72369514446a348f0a6d",url:"./tags/Docker/index.html"},{revision:"c47507c5ea8e8b605f1aa4ad4d7c4320",url:"./tags/index.html"},{revision:"a26e86d34a35742498426e288a3adf59",url:"./tags/iTerm2/index.html"},{revision:"a92965a9cbf7481596c02464d08d843b",url:"./tags/Laradock/index.html"},{revision:"eabb519df38eead784d2fcb0221dcc31",url:"./tags/Larave/index.html"},{revision:"c7b56351273a23a9320d0dfd8b867b5d",url:"./tags/npm/index.html"},{revision:"e7af0af1cc1d2ca6359f5f21ef896865",url:"./tags/PHP/index.html"},{revision:"061a3ae7ba798a4343c77f55e0a129c4",url:"./tags/Redis/index.html"},{revision:"c75efe03edfd8e0799428ffb04487579",url:"./tags/ubuntu/index.html"},{revision:"4a12fcb86eed987fcb52850afdd744ab",url:"./tags/Yarn/index.html"},{revision:"008c814d3043bfeddbab2ea94c9dbd66",url:"./tags/zsh/index.html"},{revision:"ae21f18527e9d70322a3c23a5eb7393b",url:"./tags/去水印/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();