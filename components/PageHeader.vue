<template>
  <div id="home" class="sm:hidden md:hidden lg:block xl:block">
    <a href="/#home" class="w-20 h-20 z-20 fixed top-5 left-5 back-to-top"></a>

    <header
      class="px-10 py-10 flex flex-row relative w-screen justify-end z-50 bg-transparent"
    >
      <nav class="z-50 ">
        <ul class="flex flex-row w-full gap-10">
          <li>
            <a class="text-lg hover:underline font-bold uppercase" href="/#home"
              >Home</a
            >
          </li>
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
              href="/#info"
              >Info</a
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
.back-to-top {
  background-image: url("~/assets/images/footer-logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
