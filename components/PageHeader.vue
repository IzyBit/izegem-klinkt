<template>
  <div id="home" class="sm:hidden lg:block">
    <a
      href="/#home"
      aria-label="Back to home"
      class="back-to-top fixed left-5 top-5 z-20 h-20 w-20"
    />

    <header
      class="relative z-50 flex flex-row justify-end bg-transparent px-10 py-10"
    >
      <nav class="z-50">
        <ul class="flex w-full flex-row gap-10">
          <li>
            <a class="text-lg font-bold uppercase hover:underline" href="/#home"
              >Home</a
            >
          </li>
          <li>
            <a
              class="text-lg font-bold uppercase hover:underline"
              href="/programma"
              >Programma</a
            >
          </li>
          <li>
            <a
              class="text-lg font-bold uppercase hover:underline"
              href="/#practical"
              >Praktisch</a
            >
          </li>
          <li>
            <a class="text-lg font-bold uppercase hover:underline" href="/#info"
              >Info</a
            >
          </li>
          <li>
            <a
              class="text-lg font-bold uppercase hover:underline"
              href="/#about-us"
              >Ons verhaal</a
            >
          </li>
          <li>
            <a
              class="text-lg font-bold uppercase hover:underline"
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
.back-to-top {
  background-image: url("/images/footer-logo.webp");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
