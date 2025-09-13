<template>
  <div>
  <Fog>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">My Projects</h1>
    
    <div v-if="pending" class="text-center">Loading projects...</div>
    
    <div v-else-if="error" class="text-center">
        Could not load projects.
        <pre>
            {{ error }}
        </pre>
    </div>

    <div v-else class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>
  </div>
  </Fog>
  </div>
</template>

<script setup lang="ts">
    const { data: projects, pending, error } = await useAsyncData('all-projects', () =>
      queryCollection('projects').all()
    )
</script>