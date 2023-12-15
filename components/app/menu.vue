<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow sticky top-0">
    <div
      class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Shop</span
        >
      </NuxtLink>
      <Suspense>
        <AppMegaMenu />
      </Suspense>
      <div
        class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
      <ClientOnly>
        <AppCartButton />
      </ClientOnly>
      </div>
    </div>
  </nav>
</template>
