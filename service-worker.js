"use strict";var precacheConfig=[["/s9/index.html","6d4783342c12aeb8c571a35c0a43dd32"],["/s9/static/css/main.9ad1a81e.css","5a367dd05dee55c2d4398d945a915ff5"],["/s9/static/js/main.fd2aeaa3.js","e3d2dc9f6a3e8f0960dc1f5f0991b552"],["/s9/static/media/1.dc1c28c4.png","dc1c28c42125b1b4246dd4738e9c84de"],["/s9/static/media/10.96e2ae49.PNG","96e2ae4972fbe275cf66898fbc3d0058"],["/s9/static/media/11.aef4eda9.PNG","aef4eda9ad541157776700a645acc0fb"],["/s9/static/media/12.94ac0bc2.PNG","94ac0bc2afa9cb0e1bd080ab5722cdde"],["/s9/static/media/2.ebad8eeb.png","ebad8eebeb8903d6af0f3bd7211a1952"],["/s9/static/media/3.f9ab373d.PNG","f9ab373d72c08bfd416f9c67ec999058"],["/s9/static/media/4.e6237bad.PNG","e6237bad6dc8c419c33f445a31f90b44"],["/s9/static/media/5.9ea26ac8.PNG","9ea26ac8cfd916086c4aef0b77981da1"],["/s9/static/media/6.0b530fd6.PNG","0b530fd6091e54e7c51c807c721fd7bd"],["/s9/static/media/7.356c5fa0.PNG","356c5fa0243ccc06f3e7fc6e1a8e1124"],["/s9/static/media/8.71b0b950.PNG","71b0b9501bbc4ba63f3115a78adae4f3"],["/s9/static/media/9.bfab1c57.PNG","bfab1c57edc3a18dc0f08dbcb60f0bd4"],["/s9/static/media/exampleStyles.201baa79.styl","201baa791743dda21cc681b1635ac805"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){e=new URL(e);return n&&e.pathname.match(n)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,/\.\w{8}\./);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var a,e,n;"GET"===t.request.method&&(a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html",(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a)),n="/s9/index.html",!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))});