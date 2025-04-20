<script lang="ts" setup>
import { services } from '@/dummyData/services'
import { getImage } from '@/utils/getImage'
</script>

<template>
  <div class="relative px-7 py-20 bg-[#f5f5f5] font-poppins">
    <!-- Tittle -->
    <div class="text-center">
      <h3 class="text-[16px] tracking-widest font-medium">OUR SERVICES</h3>
      <h1 class="text-[28px] font-semibold">
        Donec porttitor <br />
        euismod dignissim
      </h1>
    </div>

    <!-- Services -->
    <div class="flex flex-col gap-y-8 my-10">
      <div v-for="service of services" :key="service.id">
        <div
          class="bg-white py-10 px-20 flex flex-col items-center justify-center gap-y-2 text-center rounded-[20px] shadow-lg shadow-slate-200/50"
        >
          <div
            class="p-4 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-blue-400/50"
          >
            <img :src="getImage('services', service.icon)" :alt="service.icon" class="size-6" />
          </div>
          <h1 class="font-medium">{{ service.title }}</h1>
          <p class="text-slate-400 text-[12px]">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
