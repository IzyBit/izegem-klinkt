<template>
  <div>
    <PageHeader />
    <HamburgerMenu />
    <div class="mx-auto flex w-9/12 flex-col">
      <h1 class="mb-10 mt-20 text-5xl font-bold text-white">Programma</h1>
      <a class="underline" target="_blank" href="/BOEKJE-IZEGEMKLINKT-2024.pdf"
        ><h2 class="mb-10 text-2xl font-bold text-white">
          Download hier het programmaboekje
        </h2></a
      >
      <div
        class="flex h-full flex-row flex-wrap gap-10 sm:justify-center lg:justify-start"
      >
        <BandCard
          v-for="lineUpItem in lineUp"
          :key="lineUpItem.id"
          class="flex-shrink flex-grow"
          :location="lineUpItem.location"
          :band-photo="lineUpItem.bandPhoto"
          :band-name="lineUpItem.bandName"
          :time="lineUpItem.time"
        />
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { bands } from "~/data/bands.ts";

const lineUp = ref(bands);

useHead({
  title: "Programma",
});
</script>
