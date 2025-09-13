<template>
  <div>
    <h1>
      {{ project.title }}
    </h1>
    <p>
      {{ project.description }}
    </p>
    <p>
      {{ project.meta["tags"] }}
    </p>
  </div>
  <!-- <UCard
    class="group w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    :ui="{ body: { padding: 'p-6 sm:p-6' } }"
  >
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
      {{ title }}
    </h2>

    <p class="text-gray-600 dark:text-gray-300 mb-4 text-base leading-relaxed">
      {{ description }}
    </p>

    <div class="flex flex-wrap gap-2 mb-6">
      <UBadge
        v-for="tag in tags"
        :key="tag.name"
        :label="tag.name"
        :color="tag.color"
        variant="subtle"
        size="md"
      />
    </div>

    <UButton
      :to="link"
      target="_blank"
      label="View Project"
      color="black"
      trailing-icon="i-heroicons-arrow-right-20-solid"
      class="w-full sm:w-auto"
    />
  </UCard> -->
</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content';
  defineProps<{
    project: ProjectsCollectionItem
  }>()



  // defineProps({
  //   title: {
  //     type: String,
  //     default: 'E-commerce Platform'
  //   },
  //   description: {
  //     type: String,
  //     default: 'A full-stack e-commerce solution with a modern UI, real-time inventory management, and secure payment processing.'
  //   },
  //   tags: {
  //     type: Array,
  //     // The tags prop is an array of objects, allowing for dynamic color and text.
  //     default: () => [
  //       { name: 'Nuxt.js', color: 'primary' },
  //       { name: 'TailwindCSS', color: 'secondary' },
  //       { name: 'Supabase', color: 'purple' }
  //     ]
  //   },
  //   link: {
  //     type: String,
  //     default: '#'
  //   }
  // })
</script>