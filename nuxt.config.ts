import Aura from "@primevue/themes/aura";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@primevue/nuxt-module",
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

      htmlAttrs: {
        lang: "nl",
      },
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

  site: {
    url: "https://izegemklinkt.be",
  },

  primevue: {
    include: ["Galleria"],
    options: {
      ripple: false,
      inputVariant: "outlined",
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: "system",
          cssLayer: false,
        },
      },
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ["primevue"],
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: ".",
        maxSize: 244000,
      },
    },
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      "/images/**": { headers: { "cache-control": "max-age=31536000" } },
      "/fonts/**": { headers: { "cache-control": "max-age=31536000" } },
      "/_nuxt/**": { headers: { "cache-control": "max-age=31536000" } },
    },
  },

  compatibilityDate: "2024-07-10",
});
