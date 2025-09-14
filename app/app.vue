<script setup lang="ts">
import Navbar from './components/navbar.vue';
</script>

<template>
  <div class="h-screen flex flex-col">
    <Navbar class="flex-shrink-0" />

    <main class="flex-grow overflow-y-auto">
      <NuxtPage />
    </main>
  </div>
</template>