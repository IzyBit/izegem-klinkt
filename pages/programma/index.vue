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

useHead({
  title: 'Izegem Klinkt Programma',
  meta: [
      { property: 'og:title', content: 'Izegem Klinkt - Programma'},
      { property: 'og:description', content: 'Izegem Klinkt - Muzikale Tournée in de Pekkersstad. Programma 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée.' },
      { property: 'keywords', content: 'Izegem Klinkt, Izegem, Muziek, Pekkersstad, Tournée, 4 mei 2024, Gratis, 14 cafés, 14 bands, 1 stad, 1 muzikale tournée, kroegentocht, tocht, kroegen, programma' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.izegemklinkt.be' },
      { property: 'og:locale', content: 'nl_BE' },
      { property: 'og:image', content: 'https://www.izegemklinkt.be/bands/middleofnowhere.webp' }
  ],
  htmlAttrs: {
    lang: 'nl'
  },
  link: [
    { rel: 'canonical', href: 'https://www.izegemklinkt.be' }
  ],
})
</script>