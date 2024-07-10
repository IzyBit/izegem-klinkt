<template>
   <div>
      <PageHeader />
      <HamburgerMenu />
      <div class="mx-auto flex w-9/12 flex-col">
         <h1 class="mb-10 mt-20 text-5xl font-bold text-white">Programma</h1>
         <a
            class="underline"
            target="_blank"
            href="/BOEKJE-IZEGEMKLINKT-2024.pdf"
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
               :location="lineUpItem.location"
               :band-photo="lineUpItem.bandPhoto"
               :band-name="lineUpItem.bandName"
               :time="lineUpItem.time"
            />
         </div>
      </div>
      <Footer />
   </div>
</template>

<script setup>
import { ref } from "vue";
import { bands } from "~/data/bands.ts";

const lineUp = ref(bands);

useHead({
   title: "Izegem Klinkt Programma",
   meta: [
      {
         name: "description",
         content:
            "Izegem Klinkt - Muzikale Tournée in de Pekkersstad. Programma 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée.",
      },
      {
         name: "keywords",
         content:
            "Izegem Klinkt, Izegem, Muziek, Pekkersstad, Tournée, 4 mei 2024, Gratis, 14 cafés, 14 bands, 1 stad, 1 muzikale tournée, kroegentocht, tocht, kroegen, programma",
      },
      { hid: "og-type", property: "og:type", content: "website" },
      {
         hid: "og-title",
         property: "og:title",
         content: "Izegem Klinkt Programma",
      },
      {
         hid: "og-desc",
         property: "og:description",
         content:
            "Izegem Klinkt - Muzikale Tournée in de Pekkersstad. Programma 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée.",
      },
      {
         hid: "og-image",
         property: "og:image",
         content: "https://izegemklinkt.be/logo.png",
      },
      {
         hid: "og-url",
         property: "og:url",
         content: "https://izegemklinkt.be/programma",
      },
      {
         hid: "t-type",
         name: "twitter:image",
         content: "https://izegemklinkt.be/logo.png",
      },
   ],
   htmlAttrs: {
      lang: "nl",
   },
   link: [{ rel: "canonical", href: "https://www.izegemklinkt.be" }],
});
</script>
