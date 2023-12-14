import { CacheDuration } from "./types/cache-duration";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
  routeRules: {
    '/': {
      swr: CacheDuration.ONE_MINUTE,
      cache: {
        maxAge: CacheDuration.ONE_MINUTE,
        staleMaxAge: CacheDuration.FIVE_MINUTES,
      },
    },
    '/product/:id': {
      swr: CacheDuration.ONE_MINUTE,
      cache: {
        maxAge: CacheDuration.ONE_MINUTE,
        staleMaxAge: CacheDuration.ONE_HOUR,
      },
    },
    '/category/:id': {
      swr: CacheDuration.ONE_MINUTE,
      cache: {
        maxAge: CacheDuration.ONE_MINUTE,
        staleMaxAge:CacheDuration.ONE_HOUR
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
});
