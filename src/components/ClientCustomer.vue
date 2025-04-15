<script lang="ts" setup>
const clients: Array<string> = ['google', 'amazon', 'logitech', 'spotify', 'samsung', 'netflix']

const getImage = (path: string, client: string) => {
  return new URL(`../assets/${path}/${client}.png`, import.meta.url).href
}
</script>

<template>
  <div>
    <div class="my-12">
      <div>
        <h1 class="text-slate-400 font-poppins font-normal text-lg flex flex-col items-center">
          Trusted by 100+ Companies <span>across the globe!</span>
        </h1>

        <!-- Client -->
        <div class="flex items-center gap-x-12 pl-7 mt-10 overflow-x-auto scrollbar-hide grayscale">
          <img
            v-for="client of clients"
            :key="client.valueOf"
            :src="getImage('client', client)"
            :alt="client"
          />
        </div>

        <!-- Customer -->
        <div
          class="flex items-center justify-center gap-x-5 mt-10 mx-15 py-6 rounded-full shadow-2xl shadow-slate-200"
        >
          <div class="flex items-center">
            <img
              v-for="num of 6"
              :key="num"
              :src="getImage('customer', `customer-${num}`)"
              alt="customer"
              class="-ml-3"
            />
          </div>
          <p class="font-poppins flex flex-col text-sm">72K+ Happy <span>Customers</span></p>
        </div>

        <!-- Customer -->
        <div
          class="flex items-center justify-start pl-5 gap-x-5 mt-10 mx-15 py-4 rounded-full shadow-2xl shadow-slate-200"
        >
          <div>
            <img src="../assets/img/villa.png" alt="villa" />
          </div>
          <p class="font-poppins flex flex-col text-sm">200K+ New <span>Listings Everyday</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
