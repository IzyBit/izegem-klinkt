import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  // SEO
  head: {
    title: 'Izegem Klinkt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})