<script lang="ts" setup>
import { getImage } from '@/utils/getImage'

const props = defineProps({
  body: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="xl:w-full xl:mx-auto mb-5">
    <!-- Card Testimonials -->
    <div class="relative rounded-[20px] p-7 shadow-xl shadow-slate-200 bg-white ring-1 ring-slate-100">
      

      <!-- Icon Quote -->
      <img src="../../assets/icons/quote.svg" alt="quote" />

      <!-- Body Testimonials -->
      <div class="flex flex-col items-start justify-center gap-y-7">
        <!-- Text -->
        <p class="leading-7 text-[16px] font-medium mt-3">{{ props.body }}</p>

        <!-- Horizontal Line -->
        <span class="h-[1px] w-full bg-slate-300"></span>

        <!-- Profile User -->
        <div class="flex items-center gap-x-3 xl:w-full xl:-my-2">
          <img :src="getImage('testimonials', props.profileImage)" alt="profile-image" />
          <div
            class="flex flex-col xl:flex-row items-start xl:items-center xl:justify-between xl:w-full gap-y-2"
          >
            <p class="font-medium">{{ props.username }}</p>
            <img src="../../assets/icons/rate-stars.png" alt="rating" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
