<script lang="ts" setup>
import HappyCustomer from './layouts/HappyCustomer.vue'
import NewListings from './layouts/NewListings.vue'
import CompaniesSection from './layouts/CompaniesSection.vue'
</script>

<template>
  <div class="xl:hidden my-12 xl:px-[260px]">
    <div>
      <h1 class="text-slate-400 font-poppins font-medium text-md flex flex-col items-center">
        Trusted by 100+ Companies <span>across the globe!</span>
      </h1>

      <!-- Client -->
      <CompaniesSection />
    </div>

    <div>
      <!-- Happy Customer -->
      <HappyCustomer />

      <!-- New Listings -->
      <NewListings />
    </div>
  </div>

  <!-- Desktop -->
  <div class="hidden xl:block">
    <div class="mx-[260px] mt-[100px]">
      <!-- Customer & New Listings -->
      <div class="flex items-center justify-center gap-x-5">
        <div class="w-[360px]">
          <HappyCustomer />
        </div>

        <div class="w-[320px]">
          <NewListings />
        </div>
      </div>

      <!-- Companies -->
      <div class="relative mt-30 flex flex-col items-center justify-betwen  gap-y-5">
        <!-- Bubble -->
        <span
          class="absolute -top-5 left-15 size-17 rounded-full bg-gradient-to-tl from-[#ffffff] via-[#f0f2fc] via-30% to-[#99acff]"
        ></span>

        <!-- Text -->
        <h1 class="text-slate-400 font-poppins font-medium">
          Trusted by 100+ Companies across the globe!
        </h1>

        <div class="xl:w-full">
          <CompaniesSection />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
