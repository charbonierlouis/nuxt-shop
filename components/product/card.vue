<script setup lang="ts">
import type { Product } from '@/types';

const { product } = defineProps<{
  product: Product;
  preload?: boolean;
}>();
</script>

<template>
  <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center flex-grow"
  >
    <NuxtLink :to="`/products/${product.id}`">
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        width="300"
        height="300"
        quality="60"
        class="p-8 rounded-t-lg"
        fit="cover"
        :preload="preload"
        placeholder
      />
    </NuxtLink>
    <div class="px-5 pb-5 flex flex-col gap-5 flex-grow w-full justify-between">
      <NuxtLink :to="`/products/${product.id}`">
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ product.title }}
        </h5>
      </NuxtLink>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white"
          >{{ product.price }}€</span
        >
        <ClientOnly>
          <CartAddButton :product="product" />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
