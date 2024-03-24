<template>
  <div class="bg-gradient-to-r from-zinc-900 to-neutral-900">
    <PageHeader></PageHeader>
    <HamburgerMenu></HamburgerMenu>
    <div class="flex flex-col items-center justify-center ">
      <h1 class="text-5xl text-white font-bold mt-20 mb-10">Programma</h1>
      <div class="flex flex-row w-9/12 sm:justify-center lg:justify-start gap-10 h-full flex-wrap">
        <BandCard
          v-for="lineUpItem in lineUp"
          :key="lineUpItem.id"
          :location="lineUpItem.location"
          :bandPhoto="lineUpItem.bandPhoto"
          :bandName="lineUpItem.bandName"
          :time="lineUpItem.time"
        ></BandCard>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { bands } from '~/data/bands.ts';

const lineUp = ref(bands);
</script>
