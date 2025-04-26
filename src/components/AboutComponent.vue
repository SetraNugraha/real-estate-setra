<script lang="ts" setup></script>

<template>
  <div>
    <div
      class="px-7 xl:px-[260px] my-20 xl:mt-[190px] grid grid-cols-1 xl:grid-cols-2 xl:justify-start gap-x-50"
    >
      <!-- Tittle & Description -->
      <div class="order-1">
        <h3
          class="text-md xl:text-[19px] text-primary font-poppins tracking-[.2rem] font-medium mb-5"
        >
          WHO ARE WE
        </h3>
        <h1 class="text-[27px] xl:text-[39px] font-poppins font-semibold leading-10">
          Assisting individuals in <br />
          locating the appropriate real estate.
        </h1>
        <p
          class="mt-5 text-[13px] xl:text-[16px] text-slate-400 font-poppins leading-6 tracking-wide"
        >
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla
          convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
        </p>
      </div>

      <!-- Image  -->
      <div class="relative h-full order-2 xl:row-span-2 mt-16 xl:mt-0 flex gap-x-5">
        <!-- Watermark -->
        <img
          src="../assets/about/watermark.png"
          alt="watermark"
          class="absolute left-1/2 -translate-x-1/2 -top-10 xl:-top-18 xl:size-50"
        />

        <!-- Luxury House Image -->
        <!-- LEFT -->
        <img
          src="../assets/about/outdoor.jpg"
          alt="outdoor"
          class="w-[170px] h-[260px] xl:h-[500px] xl:w-[280px] object-cover rounded-[20px] mt-8 xl:mt-0 xl:self-end shadow-2xl shadow-slate-300"
        />

        <!-- RIGHT -->
        <div class="-z-1 flex flex-col gap-y-5">
          <img
            src="../assets/about/bedroom.jpg"
            alt="bedroom"
            class="w-[160px] h-[140px] xl:h-[280px] xl:w-[277px] object-cover rounded-[20px] shadow-xl shadow-slate-300"
          />

          <div class="relative w-[160px] h-[100px] xl:h-[180px] xl:w-[277px]">
            <img
              src="../assets/about/familyroom.jpg"
              alt="familyroom"
              class="w-full object-cover rounded-[20px] shadow-xl shadow-slate-300"
            />

            <!-- Bubble -->
            <span
              class="absolute left-1/2 -translate-x-1/2 xl:left-1/3 -bottom-7 size-10 bg-gradient-to-tr from-[#dff5fc] via-[#d3dafc] via-30% to-[#5874f1] rounded-full opacity-60"
            ></span>
          </div>
        </div>
      </div>

      <!-- Feature -->
      <div class="order-3 mt-10 flex flex-col justify-end gap-y-5">
        <!-- Smart Home -->
        <div
          class="flex items-center justify-center self-baseline xl:w-[400px] gap-x-5 px-7 py-5 rounded-[20px] shadow-xl shadow-slate-200/80"
        >
          <img src="../assets/about/smart-home.svg" alt="smar-home" />
          <div class="flex flex-col items-start gap-y-2">
            <h1 class="text-primary font-poppins font-medium">Donec porttitor euismod</h1>
            <p class="text-slate-400 font-poppins text-sm leading-">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>

        <!-- User Octagon -->
        <div
          class="flex items-center justify-center self-baseline xl:w-[400px] gap-x-5 px-7 py-5 rounded-[20px] shadow-xl shadow-slate-200/80"
        >
          <img src="../assets/about/user-octagon.svg" alt="user-octagon" />
          <div class="flex flex-col items-start gap-y-2">
            <h1 class="text-primary font-poppins font-medium">Donec porttitor euismod</h1>
            <p class="text-slate-400 font-poppins text-sm leading-">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
