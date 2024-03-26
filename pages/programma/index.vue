<template>
  <div >
    <PageHeader></PageHeader>
    <HamburgerMenu></HamburgerMenu>
    <div class="flex flex-col  mx-auto w-9/12 ">
      <h1 class="text-5xl text-white font-bold mt-20 mb-10">Programma</h1>
      <a class="underline" target="_blank" href="/BOEKJE-IZEGEMKLINKT-2024.pdf"><h2 class="text-2xl text-white font-bold mb-10">Download hier het programmaboekje</h2></a>
      <div class="flex flex-row sm:justify-center lg:justify-start gap-10 h-full flex-wrap">
        <BandCard
          v-for="lineUpItem in lineUp"
          :key="lineUpItem.id"
          :location="lineUpItem.location"
          :bandPhoto="lineUpItem.bandPhoto"
          :bandName="lineUpItem.bandName"
          :time="lineUpItem.time"
        ></BandCard>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { bands } from '~/data/bands.ts';

const lineUp = ref(bands);

definePageMeta
({
  title: "Izegem Klinkt - Programma",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "description", content: "Izegem Klinkt - Muzikale Tournée in de Pekkersstad. 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée."},
    { name: "keywords", content: "Izegem, Izegem Klinkt, Muziek, Muzikale Tournée, Pekkersstad, Pekkers, Muziekfestival, Festival, Gratis, Gratis toegang, Bands, Cafés, 4 mei 2024, kroegentoch" },	
    { name: "author", content: "Lukas Olivier" },
    { property: "og:title", content: "Izegem Klinkt - Muzikale Tournée in de Pekkersstad" },
    { property: "og:description", content:  "Izegem Klinkt - Muzikale Tournée in de Pekkersstad. 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée." },
    { property: "og:url", content: "https://izegemklinkt.be/" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://izegemklinkt.be/" }
  ]
})
</script>