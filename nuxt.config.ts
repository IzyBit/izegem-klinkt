export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-primevue", "@nuxt/image"],

  // Nuxt Image module configuration
  image: {
    format: ["webp"],
    quality: 80,
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-07-10",
});