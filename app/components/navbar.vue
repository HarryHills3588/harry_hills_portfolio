<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-book-open',
    to: '/',
  },
  {
    label: 'About Me',
    icon: 'i-lucide-database',
    to: '/about-me',
  },
  {
    label: 'Projects',
    icon: 'i-lucide-box',
    to: '/projects',
  },
])
</script>

<template>
  <UNavigationMenu :items="items" class="absolute w-full justify-center z-10"  />
</template>
