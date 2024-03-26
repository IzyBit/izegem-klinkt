import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Izegem Klinkt',
      meta: [
        { charset: 'utf-8' },
        { name: 'lang', content: 'nl' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Izegem Klinkt - Muzikale Tournée in de Pekkersstad. 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée.' },
        { name: 'author', content: 'Lukas Olivier' },
        { name: 'canonical', content: 'https://www.izegemklinkt.be' },
        { name: "keywords", content: "Izegem, Izegem Klinkt, Muziek, Muzikale Tournée, Pekkersstad, Pekkers, Muziekfestival, Festival, Gratis, Gratis toegang, Bands, Cafés, 4 mei 2024, kroegentocht" },
        { property: "og:title", content: "Izegem Klinkt - Muzikale Tournée in de Pekkersstad" },
        { property: "og:description", content: "Izegem Klinkt - Muzikale Tournée in de Pekkersstad. 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée." },
        { property: "og:url", content: "https://izegemklinkt.be/" },
        { property: "og:type", content: "website" },
      ],
    },
  },
  modules: ['nuxt-primevue', "@nuxt/image"],
  alias: {
    "@gallery": "/assets/images/gallery/",
  },
  primevue: {
    unstyled: true,
    importPT: { from: '~/presets/lara' },
  },
  css: [
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})