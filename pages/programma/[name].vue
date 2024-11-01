<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <div class="flex w-full flex-col">
      <PageHeader />
      <HamburgerMenu />
      <div
        class="sm:11/12 mx-auto mt-40 flex h-1/6 justify-center gap-10 lg:w-9/12"
      >
        <div class="flex flex-col justify-between sm:w-10/12 lg:w-1/2">
          <div class="mb-5">
            <h1 class="text-5xl font-bold text-white">
              {{ bandDetails?.bandName }}
            </h1>
            <p class="mb-5 text-2xl font-bold">
              {{ bandDetails?.location }}
              <span v-if="bandDetails?.time">- {{ bandDetails?.time }}</span>
            </p>
            <p class="leading-relaxed">{{ bandDetails?.description }}</p>
          </div>
          <p v-if="bandDetails?.website" class="mb-5 break-words">
            Meer over {{ bandDetails?.bandName }}:
            <a target="_blank" :href="bandDetails?.website" class="underline">{{
              bandDetails?.website
            }}</a>
          </p>

          <NuxtLink to="/programma">
            <p class="flex gap-5 hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
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
        <div class="w-3/5 rotate-1 sm:hidden md:block">
          <NuxtImg
            :src="bandDetails?.bandPhoto"
            :alt="bandDetails?.bandName"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <NuxtImg
            src="/images/note.webp"
            alt="note"
            class="absolute right-0 top-0 h-20 w-20 sm:hidden lg:block"
            loading="lazy"
          />
        </div>
        <NuxtImg
          src="/images/note2.webp"
          alt="note"
          class="w-25 absolute bottom-10 right-5 h-20 sm:hidden lg:block"
          loading="lazy"
        />
      </div>

      <div v-if="bandDetails?.video" class="mt-40 flex w-full justify-center">
        <iframe
          class="h-80 sm:w-96 lg:w-1/3"
          :src="bandDetails?.video"
          title="Video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
    <NuxtImg
      src="/images/samba.webp"
      alt="note"
      class="h-15 absolute left-40 w-20 -rotate-12 sm:hidden lg:block"
      loading="lazy"
    />
    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";

const bands = ref({
  2024: [],
  2025: [],
});

onMounted(async () => {
  const importedBands = await import("~/data/bands").then((m) => m.default);
  bands.value = importedBands;
  console.log(bands.value);
});

const route = useRoute();
const bandName = route.params.name;

// Add this computed property to find the matching band
const bandDetails = computed(() => {
  return bands.value[2024].find((band) => band.lookupName === bandName);
});

useHead({
  // Fix the title concatenation
  title: computed(() => `Programma - ${bandDetails.value?.bandName}`),
});
</script>
