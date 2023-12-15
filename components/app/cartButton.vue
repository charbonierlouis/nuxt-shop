<script setup lang="ts">
import { useCartQuery } from '~/composables';

const { data } = useCartQuery();
const itemsCount = computed(() => data.value?.products.length ?? 0);
const haveItems = computed(() => itemsCount.value > 0);
</script>

<template>
  <NuxtLink
    to="/cart"
    class="relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    <Icon name="ph:shopping-cart" color="white" />
    <div
      v-if="haveItems"
      class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
    >
      {{ itemsCount }}
    </div>
  </NuxtLink>
</template>