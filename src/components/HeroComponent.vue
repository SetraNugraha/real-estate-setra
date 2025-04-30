<script lang="ts" setup>
import FormSaleRent from './FormSaleRent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import { getImage } from '@/utils/getImage'

// HERO Image
const heroImages: Array<string> = ['charming.png', 'grand.png', 'serene.png', 'tranquil.png']
</script>

<template>
  <div class="xl:px-[260px]">
    <h3
      class="px-7 mt-10 xl:mt-[90px] tracking-[.2rem] text-primary font-poppins font-medium xl:px-0"
    >
      REAL ESTATE
    </h3>
    <div class="xl:flex xl:items-center xl:justify-between">
      <!-- LEFT -->
      <div class="xl:flex xl:flex-col xl:gap-y-5 xl:w-1/2">
        <!-- Text -->
        <div class="px-7 xl:px-0">
          <h1 class="mt-2 xl:leading-10 text-[40px] text-black font-semibold font-poppins">
            Find a perfect <br />
            home you love..!
          </h1>

          <div>
            <p
              class="text-xs font-poppins leading-5 tracking-wider text-justify text-[#808080] w-[90%] xl:w-[75%] xl:mt-3"
            >
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu
              sapien sodales vulputate ac in purus.
            </p>
          </div>
        </div>

        <!-- IMG -->
        <div
          class="relative px-7 my-12 xl:w-[540px] xl:my-0 xl:px-0 flex items-center justify-center xl:justify-start self-baseline"
        >
          <Swiper
            :slides-per-view="1"
            :space-between="20"
            :loop="true"
            :modules="[Autoplay, Navigation, Pagination]"
            :autoplay="{ delay: 2000 }"
            :navigation="{ nextEl: '.nextEl', prevEl: '.prevEl' }"
            :pagination="{ el: '.hero-image' }"
            class="w-full rounded-[30px]"
          >
            <SwiperSlide v-for="image of heroImages" :key="image.valueOf">
              <img
                :src="getImage('properties', image)"
                alt="img-swiper"
                class="size-full object-cover rounded-[30px] w-[335px] h-[200px] xl:w-[540px] xl:h-[340px]"
              />
            </SwiperSlide>
          </Swiper>

          <!-- Bubble -->
          <span
            class="absolute size-11 -top-7 right-20 xl:-right-5 -z-2 bg-primary rounded-full bg-gradient-to-tr from-[#deeaee] via-[#dfe5fd] via-30% to-[#5874f1]"
          ></span>

          <!-- Button Swipper -->
          <div class="absolute flex items-center justify-between w-full px-7 xl:px-0 z-10">
            <!-- Prev Button -->
            <button
              class="prevEl size-10 flex items-center justify-center bg-white rounded-full xl:-ml-5 shadow-lg shadow-slate-600/50 cursor-pointer hover:brightness-80"
            >
              <img src="../assets/icons/arrow-left.svg" alt="prev" class="w-[10px] h-[16px]" />
            </button>

            <!-- Next Button -->
            <button
              class="nextEl size-10 flex items-center justify-center bg-white rounded-full xl:-mr-5 shadow-lg shadow-slate-600/50 cursor-pointer hover:brightness-80"
            >
              <img src="../assets/icons/arrow-right.svg" alt="next" class="w-[10px] h-[16px]" />
            </button>
          </div>

          <!-- Pagination Info -->
          <div
            class="hero-image z-10 absolute -bottom-4 flex items-center w-full gap-x-5 px-14 xl:px-2"
          ></div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="hidden xl:w-1/2 xl:flex xl:items-center xl:justify-center">
        <FormSaleRent />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
