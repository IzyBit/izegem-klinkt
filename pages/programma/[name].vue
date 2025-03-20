<template>
  <div class="relative min-h-screen">
    <PageHeader />
    <HamburgerMenu />

    <!-- Main content container -->
    <div
      class="mx-auto px-4 pb-20 pt-20 sm:w-11/12 md:w-9/12 md:pt-32 lg:pt-40"
    >
      <!-- Band information section -->
      <div
        class="flex gap-6 sm:flex-col md:gap-8 lg:gap-12 xl:flex-row xl:gap-16"
      >
        <!-- Band details -->
        <div class="w-full xl:w-1/2">
          <div class="mb-4 md:mb-6">
            <h1
              class="mb-2 text-2xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              {{ bandDetails?.bandName }}
            </h1>
            <p class="mb-3 text-lg font-bold md:mb-4 md:text-2xl">
              {{ bandDetails?.location }}
              <span v-if="bandDetails?.time">- {{ bandDetails?.time }}</span>
            </p>
            <p class="whitespace-pre-wrap text-base leading-relaxed md:text-lg">
              {{ formattedDescription }}
            </p>
          </div>

          <p
            v-if="bandDetails?.website"
            class="mb-4 break-words text-base md:mb-6 md:text-lg"
          >
            Meer over {{ bandDetails?.bandName }}:
            <a
              target="_blank"
              :href="bandDetails?.website"
              class="underline transition-colors hover:text-gray-300"
            >
              {{ bandDetails?.website }}
            </a>
          </p>

          <NuxtLink to="/programma" class="mb-6 inline-block md:mb-10">
            <p
              class="flex items-center gap-2 text-base hover:underline md:text-lg"
            >
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
                />
              </svg>
              Terug naar programma
            </p>
          </NuxtLink>
        </div>

        <!-- Band photo -->
        <div class="relative w-full xl:w-1/2">
          <NuxtImg
            v-if="bandDetails?.bandPhoto"
            :src="bandDetails?.bandPhoto"
            :alt="bandDetails?.bandName"
            class="w-full rotate-1 transform rounded-md object-cover shadow-lg transition-transform hover:rotate-0 md:max-h-[500px]"
            loading="lazy"
          />

          <!-- Decorative note on image -->
          <NuxtImg
            src="/images/note.webp"
            alt="note"
            class="absolute -right-4 -top-6 hidden h-12 w-12 md:-right-8 md:-top-10 md:block md:h-16 md:w-16 lg:h-20 lg:w-20"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="relative">
        <NuxtImg
          src="/images/samba.webp"
          alt="decorative note"
          class="absolute -left-2 top-52 hidden h-auto w-14 -rotate-12 md:block md:w-16 lg:w-20"
          loading="lazy"
        />

        <NuxtImg
          src="/images/note2.webp"
          alt="decorative note"
          class="absolute -right-2 -top-10 hidden h-12 w-12 md:block md:h-16 md:w-16 lg:h-20 lg:w-20"
          loading="lazy"
        />
      </div>

      <!-- Video section -->
      <div v-if="bandDetails?.video" class="mt-10 md:mt-16 lg:mt-20">
        <h2 class="mb-4 text-xl font-bold text-white md:mb-6 md:text-2xl">
          Video
        </h2>
        <div class="mx-auto max-w-full md:max-w-4xl">
          <iframe
            class="aspect-video w-full rounded-md shadow-lg"
            :src="bandDetails?.video"
            title="Video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script setup>
const bands = ref({
  2024: [],
  2025: [],
});

onMounted(async () => {
  const importedBands = await import("~/data/bands").then((m) => m.default);
  bands.value = importedBands;
});

const route = useRoute();
const bandName = route.params.name;

// Find the matching band across all years
const bandDetails = computed(() => {
  for (const year in bands.value) {
    const band = bands.value[year].find((band) => band.lookupName === bandName);
    if (band) {
      return band;
    }
  }
  return null;
});

const formattedDescription = computed(() => {
  if (!bandDetails.value?.description) return "";

  // Split into sentences (roughly) and add line breaks
  const res = bandDetails.value.description
    .replace(/([.!?])\s+/g, "$1\n") // Add double newline after sentences
    .replace(/\n{3,}/g, "\n\n") // Remove excess newlines
    .trim(); // Remove trailing whitespace

  return res;
});

useHead({
  title: computed(() => {
    return bandDetails.value?.bandName
      ? `Programma - ${bandDetails.value.bandName} - Izegem Klinkt`
      : "Programma - Izegem Klinkt";
  }),
});
</script>
