<template>
   <div>
      <PageHeader />
      <HamburgerMenu />
      <Hero />
      <Practical />
      <Divider :border="true" />
      <Info />
      <Divider :border="true" />
      <About />
      <Divider :border="false" />
      <Footer />
   </div>
</template>

<script setup lang="ts">
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
         content: "https://izegemklinkt.be",
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
