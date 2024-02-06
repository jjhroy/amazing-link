<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    :target="target"
    class="flex flex-col justify-center items-center"
    ref="currentImg">
    <NuxtImg
      v-if="!isLoadFailed"
      class="lazy-img"
      :src="isLoadFailed ? '/img/error-load-img.jpg' : src"
      @load="handleLoadSuccess"
      @error="handleLoadFailed"
      loading="lazy" />
    <NuxtImg
      v-else
      class="lazy-img"
      src="/img/error-load-img.jpg" />
    <Icon
      v-if="!isLoadFinished && !isLoadFailed"
      class="w-[36px] h-[36px]"
      name="line-md:loading-loop" />
  </component>
</template>

<script lang="ts" setup>
  defineProps<{
    src: string;
    href?: string;
    target?: string;
  }>();

  const isLoadFinished = ref(false);
  const handleLoadSuccess = () => {
    isLoadFinished.value = true;
  };

  const isLoadFailed = ref(false);
  const handleLoadFailed = () => {
    isLoadFailed.value = true;
    isLoadFinished.value = true;
  };

  const currentImg = ref<HTMLElement>();
  let stopScrollListener: (() => void) | undefined;
  const isInContainer = (el?: Element): boolean => {
    if (!process.client || !el || !currentImg.value) return false;

    const elRect = el.getBoundingClientRect();
    const containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight + window.scrollY,
      left: 0,
    };

    return (
      elRect.top < containerRect.bottom &&
      elRect.bottom > containerRect.top &&
      elRect.right > containerRect.left &&
      elRect.left < containerRect.right
    );
  };
</script>

<style scoped lang="scss">
  .lazy-img-container {
    display: flex;
  }
  .lazy-img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
</style>
