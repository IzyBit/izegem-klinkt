
import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    modules: [
      'nuxt-primevue'
  ],
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
