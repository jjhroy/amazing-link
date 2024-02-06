<template>
  <div class="flex flex-col p-4">
    <section class="flex">
      <NuxtImg
        width="320"
        height="320"
        class="rounded-md"
        src="/img/error-load-img.jpg" />
      <div
        class="flex items-center justify-center flex-grow h-[320px] overflow-hidden">
        <ul
          ref="lyricsRef"
          class="flex flex-col flex-grow h-[280px] gap-y-3 -mr-4 text-lg font-semibold text-gray-500 text-center scroll-smooth overflow-y-scroll overflow-x-hidden">
          <li
            v-for="(lyric, index) in lyrics"
            class="cursor-pointer transition-all"
            :key="index"
            :class="{
              'scale-105 text-xl text-[#1a1a1a]': currentLyricIndex === index,
            }">
            {{ lyric }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  const lyricsRef = ref();
  const currentLyricIndex = ref(0);
  const lyrics = [
    '10:30的飞机快要到了',
    '机场还是那么的拥挤',
    '我喝来喝去可乐还是要剩一点',
    '剩一点给你 oh yeah',
    'For my baby',
    '一年前的我们过的那么快乐',
    '充满笑与泪的时光',
    'Baby',
    '我以为走下去是一种默契',
    '你却说你需要离开',
    '需要一些空间呼吸',
    'Baby baby baby baby oh baby baby oh baby',
    '是不是拥有以后就会开始要失去',
    '我给你的越多',
    '你却越想要躲',
    '爱已无法回答所有的问题',
    'Baby',
  ];

  // onMounted(() => {
  //   console.log('lyricsRef', lyricsRef.value);
  //   setInterval(() => {
  //     currentLyricIndex.value += 1;
  //     lyricsRef.value.scrollTop += 28;
  //   }, 3000);
  // });
</script>

<style></style>
