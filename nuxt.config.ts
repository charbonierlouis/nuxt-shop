//for push

import type { Product } from './types';
import { CacheDuration } from './types/cache-duration';
import axios from 'axios';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      const uri = `${process.env.NUXT_PUBLIC_API_BASE}/products`
      const products = (await axios.get<Product[]>(uri)).data;
      const slugs = products.map((product) => `/products/${product.id}`);
      nitroConfig.prerender?.routes?.push(...slugs);
    },
  },
  routeRules: {
    '/': {
      swr: CacheDuration.ONE_WEEK,
    },
    '/products/:id': {
      swr: CacheDuration.ONE_WEEK,
    },
    '/categories/:id': {
      swr: CacheDuration.ONE_WEEK,
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-icon', '@pinia/nuxt'],
});
