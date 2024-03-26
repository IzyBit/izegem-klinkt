<template>
  <div class="bg-gradient-to-r from-zinc-900 to-neutral-900">
    <PageHeader></PageHeader>
    <HamburgerMenu ></HamburgerMenu>
    <Hero></Hero>
    <Practical></Practical>
    <Divider :border=true></Divider>
       <Info></Info>
    <Divider :border=true></Divider>
    <About></About>
    <Divider :border=false></Divider>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta
({
  title: "Izegem Klinkt - Muzikale Tournée in de Pekkersstad",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "description", content: "Izegem Klinkt - Muzikale Tournée in de Pekkersstad. 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée."},
    { name: "keywords", content: "Izegem, Izegem Klinkt, Muziek, Muzikale Tournée, Pekkersstad, Pekkers, Muziekfestival, Festival, Gratis, Gratis toegang, Bands, Cafés, 4 mei 2024, kroegentocht" },	
    { name: "author", content: "Lukas Olivier" },
    { property: "og:title", content: "Izegem Klinkt - Muzikale Tournée in de Pekkersstad" },
    { property: "og:description", content:  "Izegem Klinkt - Muzikale Tournée in de Pekkersstad. 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée." },
    { property: "og:url", content: "https://izegemklinkt.be/" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://izegemklinkt.be/" }
  ]
})
</script>