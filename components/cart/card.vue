<script setup lang="ts">
import { useCartProductQuery } from '~/composables';

const { productId } = defineProps<{
  productId: number;
}>();

const { data, isPending } = useCartProductQuery(productId);
</script>

<template>
  <div
    v-if="isPending"
    class="h-[122px] w-full border border-gray-200 bg-gray-100 rounded-lg shadow animate-pulse"
  ></div>
  <div
    v-else
    v-if="data"
    class="w-full border border-gray-200 rounded-lg shadow p-5 flex flex-row gap-5"
  >
    <NuxtImg
      :src="data.image"
      :alt="data.title"
      :width="100"
      :height="100"
      class="rounded-lg w-20 aspect-square"
    />
    <div class="flex flex-col gap-2">
      <div class="text-lg font-semibold">{{ data.title }}</div>
      <div class="text-gray-500">{{ data.price }}€</div>
    </div>
  </div>
</template>
