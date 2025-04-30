<script lang="ts" setup>
import CardBlog from './layouts/CardBlog.vue'
import { blogs } from '@/dummyData/blogs'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
</script>

<template>
  <div class="xl:relative px-7 py-20 font-poppins bg-[#3A0CA3] xl:px-[260px]">
    <!-- Tittle -->
    <div class="text-center text-white">
      <h3 class="font-medium text-[14px] xl:text-[20px] tracking-[2px]">WHAT'S TRENDING</h3>
      <h1 class="font-semibold text-[28px] xl:text-[40px]">Latest Blogs & Posts</h1>
    </div>

    <!-- Blogs & Posts -->
    <div class="mt-10">
      <!-- Mobile -->
      <div class="xl:hidden grid grid-cols-1 gap-y-10 w-full">
        <CardBlog
          v-for="(blog, index) of blogs"
          :key="index"
          :tittle="blog.tittle"
          :body="blog.body"
          :date="blog.date"
          :day="blog.day"
          :image="blog.image"
        />
      </div>

      <!-- Desktop -->
      <div class="hidden xl:block">
        <Swiper
          :slides-per-view="3"
          :space-between="50"
          :loop="true"
          :modules="[Autoplay, Pagination]"
          :autoplay="{ delay: 2000 }"
          :pagination="{ el: '.blogs-pagination', clickable: true }"
          class="xl:block xl:w-full"
        >
          <SwiperSlide v-for="(blog, index) of blogs" :key="index">
            <CardBlog
              :tittle="blog.tittle"
              :body="blog.body"
              :date="blog.date"
              :day="blog.day"
              :image="blog.image"
            />
          </SwiperSlide>
        </Swiper>

        <!-- Pagination Desktop -->

        <div class="blogs-pagination flex items-cneter mt-15 gap-x-5 w-1/6 mx-auto">
          <!-- <div class="w-full h-1 rounded-xl bg-slate-500"></div>
            <div class="w-full h-1 rounded-xl bg-slate-500"></div>
            <div class="w-full h-1 rounded-xl bg-slate-500"></div> -->
        </div>
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
