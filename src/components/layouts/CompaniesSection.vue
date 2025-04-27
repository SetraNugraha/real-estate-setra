<script lang="ts" setup>
import { getImage } from '@/utils/getImage'
const clients: Array<string> = ['google', 'amazon', 'logitech', 'spotify', 'samsung', 'netflix']
</script>

<template>
  <div
    class="flex items-center xl:justify-between xl:w-full xl:pl-0 gap-x-12 pl-7 mt-10 overflow-x-auto scrollbar-hide grayscale"
  >
    <img
      v-for="client of clients"
      :key="client.valueOf"
      :src="getImage('client', `${client}.png`)"
      :alt="client"
    />
  </div>
</template>

<style scoped></style>
