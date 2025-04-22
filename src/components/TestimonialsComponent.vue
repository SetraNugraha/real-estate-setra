<script lang="ts" setup>
import { testimonials } from '@/dummyData/testimonials'
import { getImage } from '@/utils/getImage'
</script>

<template>
  <div class="px-7 my-20 font-poppins">
    <!-- Tittle -->
    <div>
      <h3 class="text-primary text-[16px] font-medium tracking-[3px]">TESTIMONIALS</h3>
      <h1 class="font-semibold text-[28px]">
        Look What Our <br />
        Customers Say!
      </h1>
      <p class="text-[13px] text-slate-800 mt-3">
        Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
      </p>
    </div>

    <!-- Card Testimonials -->
    <div class="relative mt-10 p-7 rounded-[20px] shadow-xl shadow-slate-200 bg-white">
      <!-- Bubble -->
      <span
        class="absolute -top-6 right-12 -z-50 size-12 rounded-full bg-gradient-to-tl from-[#dff5fc] via-[#ecefff] via-30% to-[#9badfc]"
      ></span>

      <!-- Icon Quote -->
      <img src="../assets/icons/quote.svg" alt="quote" />

      <!-- Body Testimonials -->
      <div
        class="flex flex-col items-start justify-center gap-y-7"
        v-for="testimoni of testimonials"
        :key="testimoni.id"
      >
        <!-- Text -->
        <p class="leading-7 text-[16px] font-medium mt-3">{{ testimoni.body }}</p>

        <!-- Horizontal Line -->
        <span class="h-[1px] w-full bg-slate-300"></span>

        <!-- Profile User -->
        <div class="flex items-center gap-x-3">
          <img :src="getImage('testimonials', testimoni.profileImage)" alt="profile-image" />
          <div class="flex flex-col items-start gap-y-2">
            <p class="font-medium">{{ testimoni.username }}</p>
            <img src="../assets/icons/rate-stars.png" alt="rating" />
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-center gap-x-3 mt-5 w-1/2 mx-auto">
      <div class="h-[4px] rounded-2xl bg-slate-700 w-full"></div>
      <div class="h-[4px] rounded-2xl bg-slate-300 w-full"></div>
      <div class="h-[4px] rounded-2xl bg-slate-300 w-full"></div>
    </div>

    <!-- Card Register Agent -->
    <div
      class="relative mt-[100px] px-[30px] flex flex-col gap-y-10 bg-[#3A0CA3] rounded-[20px] overflow-hidden"
    >
      <!-- Big Bubble Gradient -->
      <span
        class="absolute -top-25 -right-10 size-60 -z-0 rounded-full bg-gradient-to-tr from-[#5b10f3] via-[#7142df] via-20% to-[#f6f6f8] opacity-30"
      ></span>

      <!-- Tittle -->
      <div class="pt-20 z-10 text-white">
        <h1 class="font-semibold text-[27px]">Become a Agent.</h1>
        <p class="text-[13px]">
          Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque.
        </p>
      </div>

      <!-- Button -->
      <div>
        <button
          type="button"
          class="py-3 px-7 font-medium text-[16px] rounded-[30px] bg-white text-[#3A0CA3]"
        >
          Register Now
        </button>
      </div>

      <div class="relative flex items-center justify-center">
        <span
          class="absolute size-10 left-12 top-32 rounded-full bg-gradient-to-tl from-[#3A0CA3] via-[#7941fc] via-40% to-[#fbfbfd] opacity-50"
        ></span>
        <img src="../assets/img/doctor.png" alt="doctor" class="z-10" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
