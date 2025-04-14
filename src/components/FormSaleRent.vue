<script lang="ts" setup>
import { ref } from 'vue'

const isActive = ref<string>('sale')
</script>

<template>
  <div>
    <!-- Form SALE RENT -->
    <div class="px-8 mt-5 my-10 w-full">
      <form
        class="bg-white rounded-[20px] ring-1 ring-slate-200 pb-10 px-7 shadow-xl shadow-slate-200"
      >
        <!-- Header -->
        <div
          class="relative font-poppins font-medium flex items-center justify-center gap-x-18 h-18"
        >
          <button
            type="button"
            class="flex flex-col items-center justify-center"
            :class="isActive === 'sale' ? 'text-primary' : 'text-slate-300'"
            @click="isActive = 'sale'"
          >
            For Sale
            <span
              v-if="isActive === 'sale'"
              class="absolute bottom-0 h-1 bg-primary w-25 z-1 rounded-full"
            ></span>
          </button>
          <button
            type="button"
            class="flex flex-col items-center justify-center"
            :class="isActive === 'rent' ? 'text-primary' : 'text-slate-300'"
            @click="isActive = 'rent'"
          >
            For Rent
            <span
              v-if="isActive === 'rent'"
              class="absolute bottom-0 h-1 bg-primary w-25 z-1 rounded-full"
            ></span>
          </button>

          <!-- Line x -->
          <span class="absolute h-0.5 w-full bg-slate-200 bottom-0"></span>
        </div>

        <!-- Input FORM -->
        <div class="mt-10 flex flex-col items-center justify-center gap-y-5">
          <!-- Input Country / City -->
          <input
            type="text"
            placeholder="Jakarta, Bali, etc"
            class="h-15 bg-slate-100 w-full px-5 rounded-2xl placeholder:text-lg placeholder:font-poppins placeholder:text-slate-400 placeholder:tracking-wider placeholder:font-light focus:outline-none focus:ring-1 focus:ring-primary"
          />

          <!-- Select Type -->
          <div class="relative w-full">
            <select
              name=""
              id=""
              class="relative h-15 bg-slate-100 w-full px-4 text-lg font-poppins text-slate-400 tracking-wider font-light rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
            >
              <option value="" class="">Select Property type</option>
            </select>
            <span class="absolute top-1/2 right-7 -translate-y-1/2">
              <img src="../assets/icons/arrow-down.svg" alt="arrow-down" />
            </span>
          </div>

          <!-- Select Rooms -->
          <div class="relative w-full">
            <select
              name=""
              id=""
              class="relative h-15 bg-slate-100 w-full px-4 text-lg font-poppins text-slate-400 tracking-wider font-light rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
            >
              <option value="" class="">Select rooms</option>
            </select>
            <span class="absolute top-1/2 right-7 -translate-y-1/2">
              <img src="../assets/icons/arrow-down.svg" alt="arrow-down" />
            </span>
          </div>
        </div>

        <!-- Advance Setting -->
        <div class="flex items-center justify-start mt-3 gap-x-3">
          <img src="../assets/icons/setting.svg" alt="setting" />
          <p class="font-poppins font-normal text-primary">Advance Search</p>
        </div>

        <!-- Button Search -->
        <button
          class="bg-primary w-full mt-10 flex items-center justify-center gap-x-3 h-14 rounded-full text-white font-poppins"
        >
          <img src="../assets/icons/search.svg" alt="search" />
          Search
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
