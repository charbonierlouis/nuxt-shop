<script setup lang="ts">
import { useCartQuery, useCartProductsQuery } from '@/composables';

const { data: cart, isPending } = useCartQuery();
const products = useCartProductsQuery();
</script>

<template>
  <div v-if="isPending">Loading ...</div>
  <div v-else>
    <div v-if="cart">
      <div v-for="product in products" :key="product.id">
        {{ product.title }}
      </div>
    </div>
    <div v-else>No cart</div>
  </div>
</template>
