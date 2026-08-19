import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Athukorala Tea Factory — Visitor Tour Guide',
        short_name: 'ATF Tour Guide',
        description: 'Multilingual visitor tour guide for Athukorala Tea Factory',
        theme_color: '#122111',
        background_color: '#f2f7f0',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Station photos are cached lazily via runtime caching below.
        // Videos are precached (fetched as a single plain GET at SW-install
        // time) rather than runtime-cached, because <video> elements send
        // ranged (206) requests even on first load, and CacheFirst runtime
        // caching never gets a clean 200 response to store in that case —
        // it silently never populates the cache. Precaching sidesteps that
        // entirely by fetching the full file up front.
        globPatterns: ['**/*.{js,css,html,svg,ico}'],
        globIgnores: ['**/gallery/**'],
        additionalManifestEntries: [
          { url: '/videos/up-BFVRBJ77.mp4', revision: null },
          { url: '/videos/w-2xBsbRpT.mp4', revision: null },
          { url: '/videos/pla-Cmy25sTT.mp4', revision: null },
          { url: '/videos/planting-B7vEGiJ7.mp4', revision: null },
        ],
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /\/assets\/.*\.(png|jpe?g)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'tour-images',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
