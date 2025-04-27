<script lang="ts" setup>
import { services } from '@/dummyData/services'
import { getImage } from '@/utils/getImage'
</script>

<template>
  <div class="relative px-7 py-20 bg-[#f7f7f7] font-poppins xl:px-[260px]">
    <!-- Tittle -->
    <div class="text-center">
      <h3 class="text-[16px] xl:text-[20px] tracking-widest font-medium">OUR SERVICES</h3>
      <h1 class="text-[28px] xl:text-[40px] xl:tracking-wide font-semibold">
        Donec porttitor <br class="xl:hidden" />
        euismod dignissim
      </h1>
    </div>

    <!-- Services -->
    <div class="flex flex-col gap-y-8 my-10 xl:flex-row xl:items-center xl:justify-between">
      <div v-for="service of services" :key="service.id">
        <div
          class="bg-white py-10 px-12 flex flex-col items-center justify-center gap-y-2 text-center rounded-[20px] shadow-lg shadow-slate-200/50 xl:w-[340px] xl:h-[340px]"
        >
          <div
            class="p-4 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-blue-400/50"
          >
            <img :src="getImage('services', service.icon)" :alt="service.icon" class="size-6" />
          </div>
          <h1 class="font-medium xl:text-[19px] xl:mt-5">{{ service.title }}</h1>
          <p class="text-slate-400 text-[13px] xl:text-[16px] text-center">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
