<script lang="ts" setup>
import { blogs } from '@/dummyData/blogs'
import { getImage } from '@/utils/getImage'
</script>

<template>
  <div class="px-7 py-20 font-poppins bg-[#3A0CA3]">
    <!-- Tittle -->
    <div class="text-center text-white">
      <h3 class="font-medium text-[14px] tracking-[2px]">WHAT'S TRENDING</h3>
      <h1 class="font-semibold text-[28px]">Latest Blogs & Posts</h1>
    </div>

    <!-- Blogs & Posts -->
    <div class="mt-10 flex flex-col gap-y-10 w-full">
      <div v-for="blog of blogs" :key="blog.id">
        <div class="relative">
          <img
            :src="getImage('blogs', blog.image)"
            :alt="blog.tittle"
            class="rounded-[20px] brightness-80"
          />
          <span
            class="absolute top-0 left-5 py-1 px-2 rounded-b-[10px] bg-white text-center leading-[16px]"
          >
            <p class="font-medium text-[16px]">{{ blog.date }}</p>
            <p class="text-slate-400 text-[13px]">{{ blog.day }}</p>
          </span>
        </div>

        <h1 class="text-white font-medium text-[20px] mt-3">{{ blog.tittle }}</h1>
        <p class="text-[12px] text-slate-400 tracking-widest mt-2">{{ blog.body }}</p>
      </div>
    </div>

    <!-- Button View More Blogs -->
     <button type="button" class="mt-20 text-[16px] py-2.5 px-6 bg-white text-primary font-medium text-center rounded-[30px]">View more blogs</button>
  </div>
</template>

<style scoped></style>
