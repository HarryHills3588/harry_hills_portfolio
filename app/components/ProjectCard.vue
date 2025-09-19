<template>
  <UCard
    class="group w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-[var(--white)]"
    :variant="'soft'">
    <h2 class="text-2xl font-bold text-[var(--slate-dark)] mb-2">
      {{ project.title }}
    </h2>

    <p class="text-[var(--slate-dark)] text-base leading-relaxed">
      {{ project.description }}
    </p>

    <div class="flex flex-wrap gap-2 mb-6">
      <UBadge v-for="tag in projectTags" :key="tag.name" :label="tag.name" :color="tag.color" variant="subtle"
        size="md"></UBadge>
    </div>

    <UButton label="View Project" trailing-icon="i-heroicons-arrow-right-20-solid"
      class="w-full sm:w-auto text-[var(--slate-light)]" :to="`${project.path}`" />
  </UCard>
</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content';

// Define a more specific type for the tag color
type BadgeColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral' | undefined

// Define the shape of a tag
interface Tag {
  name: string;
  color: BadgeColor;
}

const props = defineProps<{
  project: ProjectsCollectionItem
}>()

// Use a computed property to provide a safely typed array to the template
const projectTags = computed((): Tag[] => {
  // Return the tags array, or an empty array if it doesn't exist
  return (props.project.meta?.tags as Tag[]) || []
})
</script>