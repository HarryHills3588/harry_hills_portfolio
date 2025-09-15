<script setup lang="ts">
import Navbar from './components/navbar.vue';
</script>

<template>
  <div class="h-screen flex flex-col">
    <Navbar />

    <main class="flex-grow">
      <NuxtPage />
    </main>
  </div>
</template>