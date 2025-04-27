<script lang="ts" setup>
import { neighborhoodProperties, teams } from '@/dummyData/neighborhoodProperties'
import { getImage } from '@/utils/getImage'
</script>

<template>
  <div class="relative px-7 py-20 xl:px-[260px] xl:mt-20">
    <!-- Blue Bubble -->
    <span
      class="absolute -top-4 left-60 xl:left-190 size-10 bg-gradient-to-tr from-[#ffffff] via-[#e2e6fa] via-40% to-[#5874f1] rounded-full opacity-60"
    ></span>

    <!-- Tittle -->
    <div class="font-poppins">
      <h3 class="text-[16px] xl:text-[20px] font-medium text-primary tracking-[3px]">
        AREAS ACROSS THE TOWN
      </h3>
      <h1 class="text-[28px] xl:text-[40px] font-semibold">
        Neighborhood <br class="xl:hidden" />
        Properties
      </h1>
    </div>

    <!-- Image -->
    <div
      class="relative w-full grid grid-cols-2 xl:grid-cols-7 xl:gap-10 xl:justify-items-start gap-5.5 mt-8"
    >
      <!-- Bubble -->
      <span
        class="absolute bottom-20 xl:-bottom-30 xl:left-300 left-35 size-14 bg-gradient-to-tl from-[#dff5fc] via-[#ecefff] via-30% to-[#4263fa] rounded-full opacity-60"
      ></span>

      <div
        v-for="item of neighborhoodProperties"
        :key="item.id"
        class="relative xl:w-full xl:h-full"
        :class="{
          'xl:col-span-2': item.id === 1 || item.id === 2,
          'xl:col-span-3': item.id === 3 || item.id === 4,
          'xl:col-span-4': item.id === 5,
        }"
      >
        <div class="relative xl:h-[250px]">
          <img
            :src="getImage('properties', item.image)"
            :alt="item.city"
            class="object-cover object-center size-43 xl:w-full xl:h-full rounded-[20px] brightness-80"
          />

          <div class="absolute left-5 bottom-3 z-10 text-white font-poppins leading-5">
            <h1 class="text-[28px] font-medium opacity-90">{{ item.total }}</h1>
            <p class="text-[12px]">{{ item.city }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Team -->
    <div class="font-poppins text-center mt-20 xl:mt-50">
      <h3 class="text-[16px] xl:text-[20px] font-medium text-primary tracking-[3px]">
        INTRODUCE YOURSELF TO
      </h3>
      <h1 class="text-[28px] xl:text-[40px] font-semibold">Our Team of Experts</h1>
    </div>

    <!-- User -->
    <div
      class="grid grid-cols-2 xl:grid-cols-4 place-items-center xl:place-content-between gap-y-10 items-center justify-center font-poppins mt-7 xl:my-15"
    >
      <div v-for="user of teams" :key="user.id">
        <div class="flex flex-col items-center gap-y-2">
          <img
            :src="getImage('team', user.image)"
            :alt="user.name"
            class="w-[120px] h-[170px] xl:w-[200px] xl:h-[280px] object-cover object-center"
          />
          <h3 class="font-medium xl:text-[30px] xl:font-semibold">{{ user.name }}</h3>
          <p class="text-primary text-[13px] xl:-[16px] tracking-wider -mt-2 xl:font-medium">{{ user.job }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
