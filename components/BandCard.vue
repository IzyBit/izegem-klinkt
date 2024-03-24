<template>
    <div @click="ViewDetailsPage()" class="flex flex-col justify-center items-end w-80 h-80 transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
        <div class="relative top-8 w-full px-3 flex justify-end">
          <p class="relative z-10  text-white font-bold uppercase text-s">{{ location }} <span v-if="time">-</span> {{ time }} </p>
        </div>
        <NuxtImg class="w-full h-full object-cover brightness-50" :src="bandPhoto" alt="bandName" />
        <p class="relative z-10 bottom-0 w-full bg-black bg-opacity-50 text-white font-bold uppercase text-s p-2">{{ bandName }}</p>
    </div>
</template>
  
<script>  
  export default defineNuxtComponent({
    props: {
      location: {
        type: String,
        required: true
      },
      bandPhoto: {
        type: String,
        required: true
      },
      bandName: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
    },

    methods: {
      ViewDetailsPage() {
        const urlName = this.bandName.toLowerCase().replace(/ /g, "-");
        this.$router.push(`/programma/${urlName}`);
      }
    }
  });
</script>
  