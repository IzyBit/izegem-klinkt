export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', "@nuxt/image"],
  primevue: {
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