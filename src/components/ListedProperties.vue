<script lang="ts" setup>
import { ref } from 'vue'
import { properties } from '@/dummyData/properties'
import { getImage } from '@/utils/getImage'

const btnFilters: string[] = ['All', 'Sell', 'Rent']
const isSelectedFilter = ref<string>('All')
</script>

<template>
  <div class="px-7 my-20 xl:px-[260px]">
    <!-- Wrapper -->
    <div class="xl:flex xl:flex-col xl:gap-y-10">
      <!-- Wrapper Tittle Filter -->
      <div class="xl:flex xl:items-center xl:justify-between">
        <!-- Tittle & Description -->
        <div class="font-poppins">
          <h3 class="text-[16px] xl:text-[20px] text-primary tracking-[.2rem] font-medium">
            CHECKOUT OUR NEW
          </h3>
          <h1 class="text-[27px] xl:text-[40px] font-semibold tracking-wide">
            Latest Listed Properties
          </h1>
          <p class="text-[14px] xl:text-[16px] text-slate-400 tracking-wider mt-3">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, <br />
            nec dignissim purus.
          </p>
        </div>

        <!-- Button Filter -->
        <div
          class="my-7 flex items-center justify-start gap-x-7 font-poppins tracking-wide text-[16px]"
        >
          <button
            type="button"
            v-for="filter of btnFilters"
            :key="filter.valueOf"
            @click="isSelectedFilter = filter"
            :class="{
              'px-7 py-2 rounded-[30px] ring-1 ring-primary font-medium cursor-pointer': true,
              'text-white bg-primary': isSelectedFilter === filter,
              'text-primary bg-white': isSelectedFilter !== filter,
            }"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <!-- List Properties -->
      <div
        class="flex flex-col gap-y-7 xl:flex-row xl:items-start xl:gap-x-10 xl:overflow-x-auto scrollbar-hide"
      >
        <div
          v-for="propertie of properties"
          :key="propertie.id"
          class="min-w-[280px] xl:h-[525px] xl:w-[340px] xl:flex xl:flex-col xl:items-start xl:hover:cursor-pointer xl:hover:brightness-60"
        >
          <!-- Image -->
          <div class="relative w-full">
            <img
              :src="getImage('properties', propertie.propertieImage)"
              :alt="propertie.name"
              class="w-full xl:size-80 object-cover rounded-[30px]"
            />
            <span
              v-if="propertie.tags"
              class="absolute bottom-5 left-5 flex items-center gap-x-3 px-6 py-2 font-poppins rounded-[20px] text-[13px]"
              :style="`background-color: ${propertie.tags.bgColor}; color: ${propertie.tags.textColor}`"
            >
              <img :src="getImage('tags', propertie.tags.image)" :alt="propertie.tags.name" />
              {{ propertie.tags?.name }}
            </span>
          </div>

          <!-- Description -->
          <div class="xl:relative xl:h-full font-poppins mt-3 flex flex-col gap-y-1">
            <h2 class="text-[20px] xl:text-[27px] font-medium">
              $ {{ propertie.price.toLocaleString('us-US') }}
            </h2>
            <h4 class="text-[16px] xl:text-[19px] font-medium">{{ propertie.name }}</h4>
            <p class="text-[12px] xl:text-[16px] text-slate-400 tracking-wider">
              {{ propertie.address }}
            </p>

            <div
              class="xl:absolute xl:bottom-0 flex items-center font-poppins gap-x-5 text-[12px] mt-2"
            >
              <div class="flex items-center gap-x-3">
                <img src="../assets/icons/bed.svg" alt="beds" class="xl:size-6" />
                <p class="xl:text-[16px]">{{ propertie.facilities.beds }} Beds</p>
              </div>

              <div class="flex items-center gap-x-3">
                <img src="../assets/icons/bathroom.svg" alt="bathroom" class="xl:size-6" />
                <p class="xl:text-[16px]">{{ propertie.facilities.bath }} Bath</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button View More -->
    <div class="xl:hidden flex items-center justify-center">
      <button
        type="button"
        class="px-7 py-3 rounded-[30px] ring-1 ring-primary font-poppins font-medium text-primary mt-20 hover:bg-primary hover:text-white"
      >
        View more properties
      </button>
    </div>
  </div>
</template>

<style scoped></style>
