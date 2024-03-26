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
        { name: 'keywords', content: 'Izegem, Klinkt, Muziek, Pekkersstad, Tournée, Gratis, 14 cafés, 14 bands, 1 stad, 1 muzikale tournée, 4 mei 2024, kroegentocht' },
        { name: 'author', content: 'Lukas Olivier' },
        { name: 'canonical', content: 'https://www.izegemklinkt.be' },
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