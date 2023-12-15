import { CacheDuration } from './types/cache-duration';

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
      swr: CacheDuration.ONE_WEEK,
    },
    '/product/:id': {
      swr: CacheDuration.ONE_WEEK,
    },
    '/category/:id': {
      swr: CacheDuration.ONE_WEEK,
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-icon', '@pinia/nuxt'],
});
