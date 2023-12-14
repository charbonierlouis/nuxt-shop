<script setup lang="ts">
  import type { Product } from '@/types';

  const { products } = defineProps<{
    products: Product[];
  }>();
</script>

<template>

  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>

</template>