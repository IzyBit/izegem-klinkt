<template>
  <div>
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
useHead({
  title: 'Izegem Klinkt',
  meta: [
      { property: 'og:title', content: 'Izegem Klinkt'},
      { property: 'og:description', content: 'Izegem Klinkt - Muzikale Tournée in de Pekkersstad. 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée.' },
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