<script setup lang="ts">
import Navbar from './components/navbar.vue';
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <Analytics />
  <div class="h-screen flex flex-col">
    <Navbar />

    <main class="flex-grow">
      <NuxtPage />
    </main>
  </div>
</template>