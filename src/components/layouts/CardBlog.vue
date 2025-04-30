<script lang="ts" setup>
import { getImage } from '@/utils/getImage'

const props = defineProps({
  tittle: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="min-w-[340px] xl:min-h-[430px] xl:p-2 xl:flex xl:flex-col xl:gap-y-2 xl:justify-between xl:my-5 xl:ml-2 xl:hover:rounded-[30px] xl:hover:bg-primary cursor-pointer"
  >
    <!-- Image -->
    <div class="relative">
      <img
        :src="getImage('blogs', props.image)"
        :alt="props.tittle"
        class="rounded-[20px] brightness-80 w-full h-[200px] object-cover shadow-lg shadow-black/30"
      />
      <span
        class="absolute top-0 left-5 py-2 px-3 rounded-b-[10px] bg-white text-center leading-[16px] shadow-lg shadow-gray-600"
      >
        <p class="font-medium text-[16px]">{{ props.date }}</p>
        <p class="text-slate-400 text-[13px]">{{ props.day }}</p>
      </span>
    </div>

    <!-- Text -->
    <h1 class="text-white font-medium text-[20px] mt-3">{{ props.tittle }}</h1>
    <p class="text-[12px] text-slate-300 tracking-widest mt-2">{{ props.body }}</p>

    <!-- Button View Blog for Desktop -->
    <button class="hidden xl:flex mt-3 px-4 py-2.5 rounded-full bg-white self-end cursor-pointer">
      <img src="../../assets/icons/arrow-right.svg" alt="arrow-right" />
    </button>
  </div>
</template>

<style scoped></style>
