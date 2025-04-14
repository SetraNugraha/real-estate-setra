<script lang="ts" setup>
import Header from './components/HeaderComponent.vue'
import Navbar from './components/NavbarComponent.vue'
</script>

<template>
  <div>
    <!-- Background linear -->
    <span
      class="fixed -z-10 p-0 top-0 h-[894px] w-full rounded-b-full bg-gradient-to-b from-[#deeaee] via-[#deeaee] via-30% to-[#a1b0f0] opacity-30"
    ></span>

    <div class="hidden xl:block">
      <Header />
    </div>

    <!-- Navbar -->
    <Navbar />
    <!-- END Navbar -->

    <!-- Hero -->
    <div class="px-8 mt-10">
      <h3 class="tracking-[.2rem] text-primary font-poppins">REAL ESTATE</h3>
      <h1
        class="mt-2 text-[40px] text-black font-semibold font-poppins flex flex-col text-justify gap-y-2"
      >
        Find a perfect <span class="-mt-5"> home you love..! </span>
      </h1>

      <div>
        <p
          class="text-xs font-poppins leading-5 tracking-wider text-justify text-[#808080] w-[85%]"
        >
          Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien
          sodales vulputate ac in purus.
        </p>
      </div>
    </div>

    <div>
      <!-- IMG -->
      <div class="relative flex items-center justify-center">
        <img src="./assets/img/bedroom.png" alt="img-swiper" class="size-full" />
        <!-- Pagination Info -->
        <div class="absolute bottom-10 flex items-center w-full gap-x-5 px-14">
          <span class="h-1 w-full bg-blue-500 rounded-full"></span>
          <span class="h-1 w-full bg-white rounded-full"></span>
          <span class="h-1 w-full bg-white rounded-full"></span>
          <span class="h-1 w-full bg-white rounded-full"></span>
        </div>

        <!-- Button Swipper -->
        <div class="absolute flex items-center justify-between w-[84%]">
          <button class="py-4 px-5 bg-white rounded-full">
            <img src="./assets/icons/arrow-left.svg" alt="prev" />
          </button>
          <button class="py-4 px-5 bg-white rounded-full">
            <img src="./assets/icons/arrow-right.svg" alt="next" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- END Hero -->
</template>

<style scoped></style>
