<script lang="ts" setup>
const menus: Array<string> = ['Home', 'About', 'Listings', 'Services', 'Blogs']
</script>

<template>
  <div class="xl:px-[260px]">
    <div class="flex items-center justify-between px-7 pt-5 xl:px-0">
      <!-- Menus Navbar Desktop -->
      <div class="hidden xl:block">
        <div class="flex items-center gap-x-7">
          <a
            href="#"
            v-for="menu of menus"
            :key="menu.valueOf"
            class="text-[16px] font-medium font-poppins py-1 px-3 hover:rounded-[30px] hover:bg-[#c2cdff]"
            >{{ menu }}</a
          >
        </div>
      </div>

      <!-- Logo -->
      <div class="flex items-center gap-x-1.5">
        <img
          src="../assets/icons/house-icon.svg"
          alt="house-icon"
          class="size-10 p-2.5 rounded-full bg-primary"
        />
        <h1 class="text-lg font-semibold font-poppins">Rezilla</h1>
      </div>

      <!-- Button Menu Humberger Mobile -->
      <div class="xl:hidden">
        <button>
          <img src="../assets/icons/hamburger.svg" alt="menu" class="size-5" />
        </button>
      </div>

      <!-- Login, Register & Add Listings Desktop -->
      <div class="hidden xl:block">
        <div class="flex items-center gap-x-7">
          <!-- Auth -->
          <button
            class="flex items-center gap-x-3 py-3 px-6 rounded-[50px] cursor-pointer hover:bg-slate-300"
          >
            <img src="../assets/icons/profile-circle.png" alt="profile-circle" />
            <p class="font-poppins font-medium text-[16px]">Login/Register</p>
          </button>

          <!-- Add Listings -->
          <button
            class="flex items-center gap-x-3 py-3 px-6 rounded-[50px] bg-primary text-white cursor-pointer hover:brightness-70"
          >
            <img src="../assets/icons/house-icon.svg" alt="house" class="size-5" />
            <p class="font-poppins font-medium text-[16px]">Add Listings</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
