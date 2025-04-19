<script lang="ts" setup></script>

<template>
  <div>
    <div class="px-7 my-20">
      <!-- Tittle & Description -->
      <div>
        <h3 class="text-md text-primary font-poppins tracking-widest">WHO ARE WE</h3>
        <h1 class="text-[28px] font-poppins font-semibold leading-10">
          Assisting individuals in <br />
          locating the <br />
          appropriate real estate.
        </h1>
        <p class="mt-5 text-[14px] text-slate-400 font-poppins leading-6 tracking-wide">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla
          convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
        </p>
      </div>

      <!-- Image  -->
      <div class="relative mt-10">
        <!-- Watermark -->
        <span>
          <img
            src="../assets/about/watermark.png"
            alt="watermark"
            class="absolute left-1/2 -translate-x-1/2 -top-7"
          />
        </span>

        <div class="mt-16 flex gap-x-7">
          <!-- Luxury House Image -->
          <img
            src="../assets/about/outdoor.jpg"
            alt="outdoor"
            class="w-[185px] h-[260px] object-cover rounded-[20px] mt-8 shadow-2xl shadow-slate-300"
          />
          <div class="relative -z-1 flex flex-col gap-y-5">
            <span
              class="absolute left-1/2 bottom-2 -translate-x-1/2 size-10 bg-gradient-to-tr from-[#dff5fc] via-[#d3dafc] via-30% to-[#5874f1] rounded-full opacity-60"
            ></span>

            <img
              src="../assets/about/bedroom.jpg"
              alt="bedroom"
              class="w-[160px] h-[140px] object-cover rounded-[20px] shadow-xl shadow-slate-300"
            />
            <img
              src="../assets/about/familyroom.jpg"
              alt="familyroom"
              class="w-[160px] h-[100px] object-cover rounded-[20px] shadow-xl shadow-slate-300"
            />
          </div>
        </div>
      </div>

      <!-- Feature -->
      <div class="mt-10 flex flex-col gap-y-5">
        <!-- Smart Home -->
        <div
          class="flex items-center justify-center gap-x-5 px-7 py-5 rounded-[20px] shadow-xl shadow-slate-100"
        >
          <img src="../assets/about/smart-home.svg" alt="smar-home" />
          <div class="flex flex-col items-start gap-y-2">
            <h1 class="text-primary font-poppins">Donec porttitor euismod</h1>
            <p class="text-slate-400 font-poppins text-sm leading-">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>

        <!-- User Octagon -->
        <div
          class="flex items-center justify-center gap-x-5 px-7 py-5 rounded-[20px] shadow-xl shadow-slate-100"
        >
          <img src="../assets/about/user-octagon.svg" alt="user-octagon" />
          <div class="flex flex-col items-start gap-y-2">
            <h1 class="text-primary font-poppins">Donec porttitor euismod</h1>
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
