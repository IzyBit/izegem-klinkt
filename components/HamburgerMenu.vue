<template>

<div class="lg:hidden xl:hidden">
  <button
      class="relative  z-50 w-screen flex justify-end  hover:cursor-pointer mb-10 px-7 pt-5"
      @click="isMobileMenuOpen = !isMobileMenuOpen"
    >     
    <template v-if="isMobileMenuOpen">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-10">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  </template>
  <template v-else>
    <svg class="w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </template>

  </button>
  <header  :class="{ hidden: !isMobileMenuOpen }"  class="px-10 py-10 flex flex-row  h-svh w-2/3 justify-end bg-black bg-opacity-95 absolute z-40 right-0 top-0 ">
    <nav class="flex mt-10 items-end flex-col relative  z-40 ">
    
      <ul class="flex flex-col text-right gap-10 z-40 ">
          <li>
            <a class="text-lg hover:underline font-bold uppercase" href="/programma"
              >Programma</a
            >
          </li>
          <li>
            <a
              class="text-lg hover:underline font-bold uppercase"
              href="/#practical"
              >Praktisch</a
            >
          </li>
          <li>
            <a
              class="text-lg hover:underline font-bold uppercase"
              href="/#about-us"
              >Ons verhaal</a
            >
          </li>
          <li>
            <a
              class="text-lg hover:underline font-bold uppercase"
              href="/#contact"
              >Contact</a
            >
          </li>
        </ul>
    </nav>

</header>
</div>
</template>

<style scoped>
  #mobile-menu {
    transition: opacity 0.3s ease-in-out;
  }

  #mobile-menu.hidden {
    opacity: 0;
    pointer-events: none;
  }
</style>

<script >
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },

};
</script>