<script setup lang="ts">
const cartStore = useCartStore();

cartStore.init();
</script>
<template>
  <AppMenu />
  <div class="p-5">
    <slot />
  </div>
</template>
