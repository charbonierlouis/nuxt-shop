<script setup lang="ts">
import { useGetProductQuery } from '@/composables';

const { id } = useRoute().params;
const { data: product } = useGetProductQuery(id.toString());
</script>

<template>
  <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-3 p-5">
    <div class="">
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        :quality="60"
        :width="400"
        :height="400"
        class="p-8 rounded-lg aspect-square object-contain"
      />
    </div>
    <div class="flex flex-col gap-5">
      <h1 class="text-xl font-semibold">{{ product.title }}</h1>
      <p class="text-md">{{ product.description }}</p>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white"
          >{{ product.price }}€</span
        >
        <CartAddButton :product="product" />
      </div>
    </div>
  </div>
</template>
