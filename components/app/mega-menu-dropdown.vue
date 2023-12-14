<script lang="ts" setup>
import type { Category } from '@/types';

const { categories } = defineProps<{
  categories: Category[] | null;
}>();

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const className = computed(() => {
  const baseClass =
    'absolute z-10 grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md';
  return isOpen.value ? `${baseClass} block` : `${baseClass} hidden`;
});
</script>
<template>
  <button
    id="mega-menu-dropdown-button"
    data-dropdown-toggle="mega-menu-dropdown"
    class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
    @click="toggleMenu"
  >
    Catégories
    <svg
      class="w-2.5 h-2.5 ms-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  <div id="mega-menu-dropdown" :class="className">
    <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
      <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
        <li v-for="category in categories" :key="category">
          <NuxtLink
            :to="`/categories/${category}`"
            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
          >
            {{ category.toLocaleUpperCase() }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
