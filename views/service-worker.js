"use strict";var precacheConfig=[["./index.html","3eff42dd2abdcf1c7db055ded05e921a"],["./static/css/main.289fedb2.css","8f733118422a39066ee02b2d7db6f80f"],["./static/js/0.fa2c80d5.chunk.js","1b5f310087c65cab50f1b016a17ae094"],["./static/js/1.11432c02.chunk.js","4aeb877fa52ec467b3bf613a9c8e3047"],["./static/js/10.450c234e.chunk.js","2f289fc903d74204c2216608f6d2df08"],["./static/js/11.7bd20f55.chunk.js","195d598bcae94431e4903d447ff252da"],["./static/js/12.c738619a.chunk.js","84072617e98c7f46137d7e552eda65de"],["./static/js/13.ea0183d6.chunk.js","c20aab4a0df6a0fc54bb4f3bcb5d34ec"],["./static/js/14.5bdfb4a8.chunk.js","21042ede3169ee326db7bcf234cec297"],["./static/js/2.e689c5df.chunk.js","b96783e64d86d854c42af8d8187b6285"],["./static/js/3.2ee15f57.chunk.js","cd59c581c58bcf0db226ae53cf10b354"],["./static/js/4.0cbe69f0.chunk.js","a65f2f7dbf62b170c5a94296ac6a17dd"],["./static/js/5.5c99f1e6.chunk.js","2dd001440c7c9bd8d2610b087eef36f7"],["./static/js/7.1334d71a.chunk.js","234b93002c08ecdd668cfee7407ec666"],["./static/js/8.fd63ba1c.chunk.js","a96b27fb0e6ccd1ae299a00a1c2ab9de"],["./static/js/9.3c1f77e7.chunk.js","8da6ae7a9ae546968133c08e747da6ae"],["./static/js/main.289fedb2.js","5fdf6c1bbc38ed2f041f8a0171c8d830"],["./static/media/VT_LOGO.f1e0310a.png","f1e0310ad5e10cfc6a06db7d52e9bc08"],["./static/media/geren-N.7525c78e.svg","7525c78e26e943163aef72362d3ba15d"],["./static/media/mining.f33a57cf.svg","f33a57cfb312efff2213c6a934fa6e08"],["./static/media/trade.90f09667.svg","90f09667a42305972360fb4a85d88029"],["./static/media/transfer.873fa443.svg","873fa443c51c291c9e0c26a4911105fb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});