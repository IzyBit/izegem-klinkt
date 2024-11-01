<template>
  <div
    class="flex h-80 w-80 flex-col items-end justify-center transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer"
    @click="ViewDetailsPage()"
  >
    <div class="relative top-8 flex w-full justify-end px-3">
      <p class="text-s relative z-10 font-bold uppercase text-white">
        {{ location }} <span v-if="time">-</span> {{ time }}
      </p>
    </div>
    <NuxtImg
      class="h-full w-full object-cover brightness-50"
      :src="bandPhoto"
      alt="bandName"
      width="320"
      height="320"
      loading="lazy"
    />
    <p
      class="text-s relative bottom-0 z-10 w-full bg-black bg-opacity-50 p-2 font-bold uppercase text-white"
    >
      {{ bandName }}
    </p>
  </div>
</template>

<script>
export default defineNuxtComponent({
  props: {
    location: {
      type: String,
      required: true,
    },
    bandPhoto: {
      type: String,
      required: true,
    },
    bandName: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },

  methods: {
    ViewDetailsPage() {
      const urlName = this.bandName.toLowerCase().replace(/ /g, "-");
      this.$router.push(`/programma/${urlName}`);
    },
  },
});
</script>
