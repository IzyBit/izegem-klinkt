<template>
  <div>
    <PageHeader></PageHeader>
    <HamburgerMenu></HamburgerMenu>
    <Hero></Hero>
    <Practical></Practical>
    <Divider :border="true"></Divider>
    <Info></Info>
    <Divider :border="true"></Divider>
    <About></About>
    <Divider :border="false"></Divider>
    <Footer></Footer>
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
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://www.izegemklinkt.be" },
    { name: "og:locale", content: "nl_BE" },
    {
      name: "og:image",
      content: "https://www.izegemklinkt.be/gallery/8.webp",
    },
  ],
  htmlAttrs: {
    lang: "nl",
  },
  link: [{ rel: "canonical", href: "https://www.izegemklinkt.be" }],
});
</script>
