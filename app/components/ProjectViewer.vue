<template>
    <UCard>
        <div v-if="pending">
            <h1>Loading content</h1>
        </div>
        <div v-else-if="error">
            <h1>Error</h1>
        </div>
        <div v-else-if="project">
            <UButton leading-icon="i-lucide-arrow-left"
                class="mb-10 text-[var(--slate-dark)]  dark:text-[var(--slate-light)] dark:hover:text-[var(--slate-hover)]"
                :variant="'link'" :to="'/projects'">
                Projects
            </UButton>
            <ContentRenderer :value="project"
                class="text-[var(--slate-dark)]  dark:text-[var(--slate-light)] dark:prose-strong:text-[var(--slate-light)] dark:prose-a:text-[var(--slate-light)] dark:prose-headings:text-[var(--slate-light)] dark:prose-code:text-[var(--slate-light)]">
            </ContentRenderer>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const projectPath = route.fullPath

const { data: project, pending, error } = await useAsyncData('project', () =>
    queryCollection('projects').where('path', '=', projectPath).first()
)

if (error.value || !project.value) {
    throw showError({
        statusCode: 404,
        statusMessage: 'Project Not Found',
        message: `Sorry, we couldn't find a project.`
    });
}
const pageTitle = computed(() => project.value?.title ?? "Default Project Title")

useHead({
    title: pageTitle.value + " - My Projects"
})

</script>

<!-- make sure to achnowledge when returning is empty -->