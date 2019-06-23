/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.cd228ea6.png",
    "revision": "208b2ccda8146c6d5f93ed730f0cb7c1"
  },
  {
    "url": "android-chrome-512x512.05b883fb.png",
    "revision": "04707916cf73e97f5ec852f6468fb8c2"
  },
  {
    "url": "App.04586683.css",
    "revision": "47a99af724c23220ca2d98fdaf1ed875"
  },
  {
    "url": "App.04586683.js",
    "revision": "a5afa2761b68d53b327a99cf2cecb485"
  },
  {
    "url": "index.html",
    "revision": "b19528af2209b2ce8036fb464f8f2601"
  },
  {
    "url": "/",
    "revision": "15b6bfb28cf4e4cb13550e6564611586"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
