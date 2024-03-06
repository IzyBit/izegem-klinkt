<template>
  <div>
    <video
      class="w-screen object-cover absolute top-0 left-0 z-0 h-full"
      autoplay
      muted
      loop
      src="~/assets/images/video.mp4"
      type="video/mp4"
    ></video>
    <div
      class="z-10 relative h-svh text-white w-screen flex flex-col items-center justify-center page-title"
    >
      <img class="hero-img " src="~/assets/images/footer-logo.png" alt="Logo" />
      <h1 class="text-4xl font-bold text-center mt-10">
        17 MEI | GRATIS TOEGANG
      </h1>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.page-title {
  transform: translateY(-10rem);
}

.hero-img  {
  width: 70vw;
  max-width: 30rem
}
</style>
