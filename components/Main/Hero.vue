<!-- eslint-disable vue/html-self-closing -->
<template>
  <div @click="togglePlayPause">
    <video
      ref="videoPlayer"
      class="absolute left-0 top-0 z-0 h-full w-full object-cover"
      autoplay="true"
      muted
      loop
      preload="none"
      src="/images/video.mp4"
      type="video/mp4"
      playsinline
      poster="/images/hero-image.webp"
    >
      <track src="#" kind="captions" srclang="en" label="english_captions" />
    </video>
    <div
      class="page-title relative z-10 flex h-svh flex-col items-center justify-center text-white"
    >
      <img class="hero-img z-30" src="/images/footer-logo.webp" alt="Logo" />
      <h1 class="mt-6 text-center text-4xl font-bold">
        16 MEI | GRATIS TOEGANG
      </h1>

      <!-- 
      <div class="mt-10 text-center text-2xl">
        <h2
          class="inline-block rounded-lg bg-primary p-2 px-4 pt-4 text-4xl text-white sm:text-xl md:text-2xl lg:text-4xl"
        >
          Wanted! Regionaal talent!
        </h2>
        <p class="mx-auto mt-5 w-9/12 font-semibold sm:text-lg md:text-xl">
          Ken jij of ben jij een startende band die volgend jaar Izegem Klinkt
          wil openen?
        </p>
        <NuxtLink
          class="mt-5 inline-block rounded-lg bg-white px-6 py-3 text-lg font-bold text-black transition-transform hover:rotate-1 hover:scale-105"
          href="mailto:bjorn.olivier@telenet.be"
        >
          Contacteer Ons!
        </NuxtLink>
      </div>
       -->
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
  transform: translateY(-5rem);
}

.hero-img {
  width: 70vw;
  max-width: 30rem;
}
</style>
