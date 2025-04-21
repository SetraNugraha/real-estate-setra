<script lang="ts" setup>
import Header from './components/HeaderComponent.vue'
import Navbar from './components/NavbarComponent.vue'
import Hero from './components/HeroComponent.vue'
import FormSaleRent from './components/FormSaleRent.vue'
import ClientCustomer from './components/ClientCustomer.vue'
import About from './components/AboutComponent.vue'
import Properties from './components/PropertiesComponent.vue'
import Services from './components/ServicesComponent.vue'
import NeighborhoodProperties from './components/NeighborhoodProperties.vue'
import Blogs from './components/BlogsComponent.vue'
</script>

<template>
  <div>
    <!-- Background linear -->
    <span
      class="absolute -z-10 p-0 top-0 h-[894px] w-full rounded-b-full bg-gradient-to-b from-[#deeaee] via-[#deeaee] via-30% to-[#1b44fa] opacity-30"
    ></span>

    <div class="hidden xl:block">
      <Header />
    </div>

    <!-- Navbar -->
    <Navbar />
    <!-- END Navbar -->

    <!-- Hero -->
    <Hero />
    <!-- END Hero -->

    <!-- Form SALE RENT -->
    <FormSaleRent />

    <!-- Client & Customer -->
    <ClientCustomer />

    <!-- About -->
    <About />

    <!-- Properties -->
    <Properties />

    <!-- Serivces -->
    <Services />

    <!-- Neighborhood Porperties -->
    <NeighborhoodProperties />

    <!-- Blogs & Posts -->
    <Blogs />
  </div>
</template>

<style scoped></style>
