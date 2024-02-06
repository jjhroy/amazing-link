<template>
  <div>
    <CommonLazyImg
      v-for="i in 12"
      class="w-80 h-80 border rounded-md"
      :key="i"
      :href="'https://image.nuxt.com/usage/nuxt-img#loading'"
      :target="'_blank'"
      :src="'https://img.linkstarted.top/blog/bochi-avtar.png'" />
  </div>
</template>

<script lang="ts" setup>
  const width = ref(320);
  const height = ref(320);
</script>

<style>
  @import url('@/assets/css/index.css');
</style>
