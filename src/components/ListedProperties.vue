<script lang="ts" setup>
import { ref } from 'vue'
import { properties } from '@/dummyData/properties'
import CardListedPropertie from './layouts/CardListedPropertie.vue'

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
        <CardListedPropertie
          v-for="(propertie, index) of properties"
          :key="index"
          :address="propertie.address"
          :name="propertie.name"
          :price="propertie.price"
          :propertie-image="propertie.propertieImage"
          :tags="propertie.tags"
          :facilities="propertie.facilities"
        />
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
