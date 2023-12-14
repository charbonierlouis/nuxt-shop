<script setup lang="ts">
import { useGetCategoryProductsQuery } from '@/composables';

const { slug } = useRoute().params as { slug: string };
const { data: products } = useGetCategoryProductsQuery(slug.toString());
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-xl font-semibold">{{ slug.toLocaleUpperCase() }}</h1>
    <ProductList v-if="products" :products="products" />
  </div>
</template>
