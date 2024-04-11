<template>
  <div class="flex flex-col items-center w-100">
    <PageHeader></PageHeader>
    <HamburgerMenu></HamburgerMenu>
    <div class="flex mt-40 justify-center gap-10 h-1/6 sm:w-full lg:w-9/12">
      <div class="flex flex-col lg:w-1/2 sm:w-10/12 justify-between">
        <div class="mb-5">
          <h1 class="text-5xl text-white font-bold">
            {{ bandDetails.bandName }}
          </h1>
          <p class="mb-5 text-2xl font-bold">
            {{ bandDetails.location }}
            <span v-if="bandDetails.time">- {{ bandDetails.time }}</span>
          </p>
          <p class="leading-relaxed">{{ bandDetails.description }}</p>
        </div>
        <p v-if="bandDetails.website" class="mb-5">
          Meer over {{ bandDetails.bandName }}:
          <a target="_blank" :href="bandDetails.website" class="underline">{{
            bandDetails.website
          }}</a>
        </p>

        <NuxtLink to="/programma">
          <p class="flex gap-5 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z"
                clip-rule="evenodd"
              /></svg
            >Terug naar programma
          </p>
        </NuxtLink>
      </div>
      <div class="sm:hidden md:block w-3/5 rotate-1">
        <img
          :src="bandDetails.bandPhoto"
          alt="bandDetails.bandName"
          class="w-full h-full object-cover"
        />
        <img
          src="~/assets/images/note.webp"
          alt="note"
          class="sm:hidden lg:block absolute w-20 h-20 top-0 right-0"
        />
      </div>
      <img
        src="~/assets/images/note2.webp"
        alt="note"
        class="sm:hidden lg:block absolute w-25 h-20 right-5 bottom-10"
      />
    </div>

    <div v-if="bandDetails.video" class="w-full flex justify-center mt-40">
      <iframe
        class="sm:w-96 lg:w-1/3 h-80"
        :src="bandDetails.video"
        title="Video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <img
    src="~/assets/images/samba.webp"
    alt="note"
    class="sm:hidden lg:block absolute w-20 h-15 left-40 -rotate-12"
  />
  <Footer></Footer>
</template>

<script setup>
import { ref } from "vue";
import { bands } from "~/data/bands.ts";

const route = useRoute();

const bandName = route.params.name;
const bandDetails = ref(bands.find((band) => band.lookupName === bandName));

useHead({
  title: "Izegem Klinkt Programma",
  meta: [
    {
      name: "description",
      content:
        "Izegem Klinkt - Muzikale Tournée in de Pekkersstad. Programma 4 mei 2024. Gratis toegang. 14 deelnemende cafés. 14 bands. 1 stad. 1 muzikale tournée." +
        bandDetails.value.bandName +
        ": " +
        bandDetails.value.description,
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
      content: "https://izegemklinkt.be" + bandDetails.value.bandPhoto,
    },
    {
      hid: "og-url",
      property: "og:url",
      content:
        "https://izegemklinkt.be/programma/" + bandDetails.value.lookupName,
    },
    {
      hid: "t-type",
      name: "twitter:image",
      content: "https://izegemklinkt.be" + bandDetails.value.bandPhoto,
    },
  ],
  htmlAttrs: {
    lang: "nl",
  },
  link: [{ rel: "canonical", href: "https://www.izegemklinkt.be" }],
});
</script>
