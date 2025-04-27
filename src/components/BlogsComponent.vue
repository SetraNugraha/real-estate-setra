<script lang="ts" setup>
import { blogs } from '@/dummyData/blogs'
import { getImage } from '@/utils/getImage'
</script>

<template>
  <div class="xl:relative px-7 py-20 font-poppins bg-[#3A0CA3] xl:px-[260px]">
    <!-- Tittle -->
    <div class="text-center text-white">
      <h3 class="font-medium text-[14px] xl:text-[20px] tracking-[2px]">WHAT'S TRENDING</h3>
      <h1 class="font-semibold text-[28px] xl:text-[40px]">Latest Blogs & Posts</h1>
    </div>

    <!-- Blogs & Posts -->
    <div
      class="mt-10 grid grid-cols-1 gap-y-10 w-full"
      :class="{
        'xl:grid-cols-none xl:flex xl:overflow-x-auto xl:gap-x-10 scrollbar-hide':
          blogs.length >= 3,
        'xl:grid-cols-3': blogs.length < 3,
      }"
    >
      <div
        v-for="blog of blogs"
        :key="blog.id"
        class="min-w-[340px] xl:p-2 xl:flex xl:flex-col xl:gap-y-2 xl:justify-between xl:my-5 xl:ml-2 xl:hover:rounded-[30px] xl:hover:bg-primary cursor-pointer"
      >
        <!-- Image -->
        <div class="relative">
          <img
            :src="getImage('blogs', blog.image)"
            :alt="blog.tittle"
            class="rounded-[20px] brightness-80 w-full h-[200px] object-cover shadow-lg shadow-black/30"
          />
          <span
            class="absolute top-0 left-5 py-2 px-3 rounded-b-[10px] bg-white text-center leading-[16px] shadow-lg shadow-gray-600"
          >
            <p class="font-medium text-[16px]">{{ blog.date }}</p>
            <p class="text-slate-400 text-[13px]">{{ blog.day }}</p>
          </span>
        </div>

        <!-- Text -->
        <h1 class="text-white font-medium text-[20px] mt-3">{{ blog.tittle }}</h1>
        <p class="text-[12px] text-slate-300 tracking-widest mt-2">{{ blog.body }}</p>

        <!-- Button View Blog for Desktop -->
        <button
          class="hidden xl:flex mt-3 px-4 py-2.5 rounded-full bg-white self-end cursor-pointer"
        >
          <img src="../assets/icons/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </div>

    <!-- Pagination Desktop -->
    <div class="hidden xl:block xl:relative xl:mt-15 xl:w-full">
      <div class="flex items-center gap-x-5 justify-center">
        <div class="w-20 h-1 rounded-xl bg-white"></div>
        <div class="w-20 h-1 rounded-xl bg-slate-500"></div>
        <div class="w-20 h-1 rounded-xl bg-slate-500"></div>
      </div>
    </div>

    <!-- Button View More Blogs -->
    <button
      type="button"
      class="xl:hidden mt-20 text-[16px] py-2.5 px-6 bg-white text-primary font-medium text-center rounded-[30px]"
    >
      View more blogs
    </button>
  </div>
</template>

<style scoped></style>
