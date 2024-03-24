<template>
  <div class="w-1/2 mx-auto my-72">
    <hr class="border-1 border-zinc-500" v-if="border" />
  </div>
</template>

<script setup>
const props = defineProps({
  border: {
    type: Boolean,
    default: false
  }
});
</script>