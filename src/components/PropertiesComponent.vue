<script lang="ts" setup>
import { ref } from 'vue'
import { properties } from '@/dummyData/properties'
import { getImage } from '@/utils/getImage'

const btnFilters: string[] = ['All', 'Sell', 'Rent']
const isSelectedFilter = ref<string>('All')
</script>

<template>
  <div class="px-7 my-20">
    <!-- Tittle & Description -->
    <div class="font-poppins">
      <h3 class="text-[16px] text-primary tracking-[.2rem] font-medium">CHECKOUT OUR NEW</h3>
      <h1 class="text-[27px] font-semibold tracking-wide">Latest Listed Properties</h1>
      <p class="text-[14px] text-slate-400 tracking-wider mt-3">
        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
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
          'px-7 py-2 rounded-[30px] ring-1 ring-primary font-medium': true,
          'text-white bg-primary': isSelectedFilter === filter,
          'text-primary bg-white': isSelectedFilter !== filter,
        }"
      >
        {{ filter }}
      </button>
    </div>

    <!-- List Properties -->
    <div class="flex flex-col gap-y-7">
      <div v-for="propertie of properties" :key="propertie.id">
        <!-- Image -->
        <div class="relative w-full">
          <img
            :src="getImage('properties', propertie.propertieImage)"
            :alt="propertie.name"
            class="w-full"
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
        <div class="font-poppins mt-3 flex flex-col gap-y-1">
          <h2 class="text-[20px] font-medium">$ {{ propertie.price.toLocaleString('us-US') }}</h2>
          <h4 class="text-[16px] font-medium">{{ propertie.name }}</h4>
          <p class="text-[12px] text-slate-400 tracking-wider">{{ propertie.address }}</p>

          <div class="flex items-center font-poppins gap-x-5 text-[12px] mt-2">
            <div class="flex items-center gap-x-3">
              <img src="../assets/icons/bed.svg" alt="beds" />
              <p>{{ propertie.facilities.beds }} Beds</p>
            </div>

            <div class="flex items-center gap-x-3">
              <img src="../assets/icons/bathroom.svg" alt="bathroom" />
              <p>{{ propertie.facilities.bath }} Bath</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button View More -->
    <div class="flex items-center justify-center">
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
