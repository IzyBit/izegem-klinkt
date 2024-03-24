<template>
  <div  @click="togglePlayPause">
    <video
      class="w-screen object-cover absolute top-0 left-0 z-0 h-full"
      autoplay=true
      muted
      loop
      src="~/assets/images/video.mp4"
      type="video/mp4"
      playsinline
      poster="~/assets/images/hero-image.png"
      ref="videoPlayer"
     
    ></video>
    <div
      class="z-10 relative h-svh text-white w-screen flex flex-col items-center justify-center page-title"
    >
      <img class="hero-img z-30" src="~/assets/images/footer-logo.png" alt="Logo" />
      <h1 class="text-4xl font-bold text-center mt-10">
        17 MEI | GRATIS TOEGANG
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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

.hero-img  {
  width: 70vw;
  max-width: 30rem
}
</style>
