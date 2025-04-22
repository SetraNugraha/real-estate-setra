<script lang="ts" setup></script>

<template>
  <div class="font-poppins pt-20 bg-[#f5f7ff] flex flex-col items-center justify-center gap-y-5">
    <!-- Logo -->
    <div class="flex items-center gap-x-1.5">
      <img
        src="../assets/icons/house-icon.svg"
        alt="house-icon"
        class="size-10 p-2.5 rounded-full bg-primary"
      />
      <h1 class="text-lg font-semibold font-poppins">Rezilla</h1>
    </div>

    <!-- Address -->
    <div class="text-center text-slate-600/70 font-medium">
      <p>2728 Hicktory StreetSalt</p>
      <p>Lake City, UT 84104</p>
    </div>

    <!-- Phone Number  & Email-->
    <div class="flex flex-col items-center gap-y-2 text-slate-600/70 font-medium">
      <div class="flex items-center gap-x-2">
        <img src="../assets/footer/phone.png" alt="phone" />
        <p>+1 206-214-2298</p>
      </div>

      <div class="flex items-center gap-x-2">
        <img src="../assets/footer/mail.png" alt="email" />
        <p>support@rezilla.com</p>
      </div>
    </div>

    <!-- Text Subscribe -->
    <div class="text-center font-medium mt-3">
      <p>
        Subscribe to our <br />
        Newsletter!
      </p>
    </div>

    <!-- Input & Button Subscribe -->
    <div class="relative w-[80%]">
      <input
        type="email"
        placeholder="Email Address"
        class="bg-white py-4 w-full px-5 rounded-[100px] shadow-xl shadow-slate-200 placeholder:text-[#AAAAAA]"
      />
      <button
        type="button"
        class="absolute top-1/2 -translate-y-1/2 right-1.5 p-4 rounded-full bg-primary"
      >
        <img src="../assets/footer/arrow-right.png" alt="arrow-right" />
      </button>
    </div>

    <!-- Social Media -->
    <div class="my-5 flex flex-col items-center justify-center gap-y-7">
      <h1 class="font-medium">Follow Us on</h1>

      <div class="flex items-center justify-center gap-x-10">
        <!-- Linkedin -->
        <a href="#" target="_blank">
          <img src="../assets/footer/linkedin.png" alt="linkedin" />
        </a>

        <!-- Facebook -->
        <a href="#" target="_blank">
          <img src="../assets/footer/facebook.png" alt="facebook" />
        </a>

        <!-- Instagram -->
        <a href="#" target="_blank">
          <img src="../assets/footer/instagram.png" alt="instagram" />
        </a>
      </div>
    </div>

    <!-- Coptyright -->
    <div
      class="w-full flex flex-col items-center justify-center gap-y-1 text-[#AAAAAA]  py-2 bg-black"
    >
      <p class="text-[13px]">
        Design By :
        <a
          target="_blank"
          href="https://www.figma.com/design/qP1XOaru2Ub2EMvEOAMbM9/Real-Estate-Website-Template---Web---Mobile--Community-?node-id=97-207&t=hvNw1HZBTb9z9Xvy-1"
          class="text-blue-500 underline"
          >Nagarjuna Pulugam</a
        >
      </p>
      <p class="text-[13px] tracking-wider">&copy; Rezilla - All rights reserved</p>
    </div>
  </div>
</template>

<style scoped></style>
