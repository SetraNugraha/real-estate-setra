<script lang="ts" setup>
import { neighborhoodProperties, teams } from '@/dummyData/neighborhoodProperties'
import { getImage } from '@/utils/getImage'
</script>

<template>
  <div class="relative px-7 py-20">
    <!-- Blue Bubble -->
    <span
      class="absolute -top-4 left-60 size-10 bg-gradient-to-tr from-[#ffffff] via-[#e2e6fa] via-30% to-[#5874f1] rounded-full opacity-60"
    ></span>

    <!-- Tittle -->
    <div class="font-poppins">
      <h3 class="text-[16px] font-medium text-primary tracking-[3px]">AREAS ACROSS THE TOWN</h3>
      <h1 class="text-[28px] font-semibold">
        Neighborhood <br />
        Properties
      </h1>
    </div>

    <!-- Image -->
    <div class="relative w-full grid grid-cols-2 gap-5.5 mt-8">
      <span
        class="absolute bottom-20 left-35 size-14 bg-gradient-to-tl from-[#dff5fc] via-[#ecefff] via-30% to-[#4263fa] rounded-full opacity-60"
      ></span>

      <div v-for="item of neighborhoodProperties" :key="item.id">
        <div class="relative">
          <img
            :src="getImage('properties', item.image)"
            :alt="item.city"
            class="object-cover size-43 rounded-[20px] brightness-80"
          />

          <div class="absolute left-5 bottom-3 z-10 text-white font-poppins leading-5">
            <h1 class="text-[28px] font-medium opacity-90">{{ item.total }}</h1>
            <p class="text-[12px]">{{ item.city }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Team -->
    <div class="font-poppins text-center mt-20">
      <h3 class="text-[16px] font-medium text-primary tracking-[3px]">INTRODUCE YOURSELF TO</h3>
      <h1 class="text-[28px] font-semibold">Our Team of Experts</h1>
    </div>

    <!-- User -->
    <div
      class="grid grid-cols-2 place-items-center gap-y-10 items-center justify-center font-poppins mt-7"
    >
      <div v-for="user of teams" :key="user.id">
        <div class="flex flex-col items-center gap-y-2">
          <img :src="getImage('team', user.image)" :alt="user.name" class="w-[120px] h-[170px]" />
          <h3 class="font-medium">{{ user.name }}</h3>
          <p class="text-primary text-[13px] tracking-wider -mt-2">{{ user.job }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
