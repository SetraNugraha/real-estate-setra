<script lang="ts" setup>
import { testimonials } from '@/dummyData/testimonials'
import CardTestimonial from './layouts/CardTestimonial.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import { useScreenSize } from '@/utils/useSreenSize'

const { isMobile } = useScreenSize()
</script>

<template>
  <div class="px-7 my-20 font-poppins xl:px-[260px]">
    <!-- Wrapper Testimonials -->
    <div class="xl:flex xl:items-center">
      <!-- Tittle -->
      <div class="xl:w-1/2">
        <h3 class="text-primary text-[16px] xl:text-[20px] font-medium tracking-[3px]">
          TESTIMONIALS
        </h3>
        <h1 class="font-semibold text-[28px] xl:text-[40px]">
          Look What Our <br />
          Customers Say!
        </h1>
        <p class="text-[13px] xl:text-[16px] text-slate-800 mt-3">
          Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
        </p>
      </div>

      <!-- Wrapper Card -->
      <div class="relative xl:w-1/3 xl:mx-auto mt-10 xl:p-5">
        <!-- Bubble -->
        <span
          class="absolute -top-7 right-15 xl:top-0 xl:left-0 -z-50 size-12 rounded-full bg-gradient-to-tl from-[#dff5fc] via-[#ecefff] via-30% to-[#9badfc]"
        ></span>
        <Swiper
          :direction="isMobile ? 'horizontal' : 'vertical'"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :modules="[Autoplay, Pagination]"
          :autoplay="{ delay: 2000 }"
          :pagination="{ el: '.testimoni-pagination' }"
          class="rounded-[30px] xl:p-5 xl:h-[400px]"
        >
          <SwiperSlide v-for="testimoni of testimonials" :key="testimoni.id" class="xl:p-2">
            <CardTestimonial
              :body="testimoni.body"
              :username="testimoni.username"
              :profile-image="testimoni.profileImage"
            />
          </SwiperSlide>
        </Swiper>

        <!-- Pagination Info -->
        <div
          class="testimoni-pagination absolute inset-x-7 -bottom-5 flex xl:flex-col items-center justify-center gap-x-3 w-1/2 mx-auto xl:mx-0 xl:w-1 xl:gap-y-3 xl:h-[100px] xl:left-120 xl:top-20"
        ></div>
      </div>
    </div>

    <!-- Card Register Agent -->
    <div class="relative mt-20 xl:mt-60 bg-[#3A0CA3] rounded-[20px]">
      <div
        class="relative px-[30px] grid grid-cols-1 xl:grid-cols-3 xl:place-items-center gap-y-10 overflow-hidden xl:overflow-visible xl:h-[250px]"
      >
        <!-- Big Bubble Gradient -->
        <span
          class="absolute -top-25 -right-10 size-60 xl:size-20 xl:top-10 xl:right-15 xl:overflow-hidden -z-0 rounded-full bg-gradient-to-tr from-[#5b10f3] via-[#7142df] via-20% to-[#f6f6f8] opacity-30"
        ></span>

        <!-- Dummy Element on Desktop -->
        <span class="hidden xl:block"></span>

        <!-- Wrapper Tittle & Button Register -->
        <div
          class="grid grid-cols-1 gap-y-7 xl:grid-cols-2 xl:place-items-center xl:order-2 xl:col-span-2"
        >
          <!-- Tittle -->
          <div class="pt-[100px] z-10 text-white xl:pt-0">
            <h1 class="font-semibold text-[27px] xl:text-[40px]">Become a Agent.</h1>
            <p class="text-[13px] xl:text-[16px] text-slate-300/80 tracking-wide">
              Fusce venenatis tellus a felis scelerisque. <br class="hidden xl:block" />
              venenatis tellus a felis scelerisque.
            </p>
          </div>

          <!-- Button Register Now-->
          <button
            type="button"
            class="py-3 px-7 font-medium text-[16px] rounded-[30px] cursor-pointer bg-white text-[#3A0CA3] hover:bg-primary hover:text-white transition-all duration-300"
          >
            Register Now
          </button>
        </div>

        <!-- Doctor Image -->
        <div
          class="relative flex items-center justify-center xl:col-span-1 xl:h-[300px] xl:absolute xl:bottom-0 xl:left-30"
        >
          <span
            class="absolute size-10 xl:size-20 left-12 xl:left-60 top-32 xl:top-45 rounded-full bg-gradient-to-tl from-[#3A0CA3] via-[#7941fc] via-40% to-[#fbfbfd] opacity-50"
          ></span>
          <img src="../assets/img/doctor.png" alt="doctor" class="z-10 xl:h-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
