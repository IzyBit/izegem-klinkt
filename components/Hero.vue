<template>
   <div @click="togglePlayPause">
      <video
         ref="videoPlayer"
         class="absolute left-0 top-0 z-0 h-full w-full object-cover"
         autoplay="true"
         muted
         loop
         src="~/assets/images/video.mp4"
         type="video/mp4"
         playsinline
         poster="~/assets/images/hero-image.webp"
      >
         <track src="#" kind="captions" srclang="en" label="english_captions" />
      </video>
      <div
         class="page-title relative z-10 flex h-svh flex-col items-center justify-center text-white"
      >
         <img
            class="hero-img z-30"
            src="~/assets/images/footer-logo.webp"
            alt="Logo"
         />
         <h1 class="mt-10 text-center text-4xl font-bold">
            17 MEI | GRATIS TOEGANG
         </h1>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";

const videoPlayer = ref(null);

// Toggle play/pause on video click
const togglePlayPause = () => {
   if (videoPlayer.value.paused) {
      videoPlayer.value.play();
   } else {
      videoPlayer.value.pause();
   }
};
</script>

<style scoped>
.page-title {
   transform: translateY(-10rem);
}

.hero-img {
   width: 70vw;
   max-width: 30rem;
}
</style>
