<script lang="ts" setup>
import { useGetCategoriesQuery } from '@/composables';

const { data: categories } = useGetCategoriesQuery();
</script>
<template>
  <div
    id="mega-menu"
    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
  >
    <ul
      class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse"
    >
      <li>
        <AppMegaMenuDropdown :categories="categories" />
      </li>
    </ul>
  </div>
</template>
