<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

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

const dropdownItems = ref<DropdownMenuItem[][]>([
  [{
    label: 'Home',
    icon: 'i-lucide-book-open',
    to: '/',
  }],
  [{
    label: 'About Me',
    icon: 'i-lucide-database',
    to: '/about-me',
  }],
  [{
    label: 'Projects',
    icon: 'i-lucide-box',
    to: '/projects',
  }],
])
</script>

<template>
  <div class="flex justify-between items-center px-4 py-2 text-[var(--slate-dark)]">
    <!-- Logo -->
    <NuxtLink to="/" class="text-xl font-bold font-['Meow_Script']">
      H.Hillsdownley
    </NuxtLink>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex">
      <UNavigationMenu :items="items" :variant="'link'" />
    </div>

    <!-- Mobile Dropdown -->
    <div class="flex md:hidden">
      <UDropdownMenu :items="dropdownItems" :ui="{ content: 'w-48' }">
        <UButton icon="i-lucide-menu" color="neutral" variant="ghost" />
      </UDropdownMenu>
    </div>
  </div>
</template>
