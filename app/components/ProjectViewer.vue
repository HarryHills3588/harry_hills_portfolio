<template>
    <UCard class="w-10/12">
        <div v-if="pending">
            <h1>Loading content</h1>
        </div>
        <div v-else-if="error">
            <h1>Error</h1>
        </div>
        <div v-else-if="project">
            <ContentRenderer :value="project"></ContentRenderer>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const projectPath = route.fullPath

const { data: project, pending, error } = await useAsyncData('project', () =>
    queryCollection('projects').where('path','=',projectPath).first()
)
</script>

<!-- make sure to achnowledge when returning is empty -->