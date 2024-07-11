export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "nuxt-primevue",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "nuxt-booster",
  ],

  // Nuxt Image module configuration
  image: {
    format: ["webp"],
    quality: 80,
  },

  // Nuxt SEO module configuration
  app: {
    head: {
      title: "Izegem Klinkt",
      titleTemplate: "%s - Izegem Klinkt",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
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
    },
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
