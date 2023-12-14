<script setup lang="ts">
import { useGetProductsQuery } from '@/composables';

const { data: products } = useGetProductsQuery();
</script>

<template>
  <ProductList v-if="products" :products="products" />
</template>
