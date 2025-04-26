<script lang="ts" setup>
import { getImage } from '@/utils/getImage'
</script>

<template>
  <div
    class="bg-white flex items-center justify-center gap-x-5 w-[90%] mx-auto mt-10 py-6 rounded-full shadow-2xl shadow-slate-200"
  >
    <div class="flex items-center">
      <img
        v-for="num of 6"
        :key="num"
        :src="getImage('customer', `customer-${num}.png`)"
        alt="customer"
        class="-ml-3"
      />
    </div>
    <p class="font-poppins flex flex-col text-[16px] font-medium">
      72K+ Happy <span>Customers</span>
    </p>
  </div>
</template>

<style scoped></style>
