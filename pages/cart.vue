<script setup lang="ts">
import { useCartQuery } from '@/composables';

const { data: cart, isPending } = useCartQuery();
</script>

<template>
  <div v-if="isPending">Loading ...</div>
  <div v-else>
    <div v-if="cart">
      <div v-for="product in cart.products" :key="product.productId">
        <CartCard :productId="product.productId" />
      </div>
    </div>
    <div v-else>No cart</div>
  </div>
</template>
