<script lang="ts" setup>
import { getImage } from '@/utils/getImage'

const propertie = defineProps({
  name: {
    type: String,
    required: true,
  },

  propertieImage: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  tags: {
    type: Object,
  },

  facilities: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
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

      <div class="xl:absolute xl:bottom-0 flex items-center font-poppins gap-x-5 text-[12px] mt-2">
        <div class="flex items-center gap-x-3">
          <img src="../../assets/icons/bed.svg" alt="beds" class="xl:size-6" />
          <p class="xl:text-[16px]">{{ propertie.facilities.beds }} Beds</p>
        </div>

        <div class="flex items-center gap-x-3">
          <img src="../../assets/icons/bathroom.svg" alt="bathroom" class="xl:size-6" />
          <p class="xl:text-[16px]">{{ propertie.facilities.bath }} Bath</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
