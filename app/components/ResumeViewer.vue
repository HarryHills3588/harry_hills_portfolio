<template>
    <UCard>
        <div v-if="pending">
            <h1>Loading content</h1>
        </div>
        <div v-else-if="error">
            <h1>Error</h1>
        </div>
        <div v-else-if="resume">
            <UButton leading-icon="i-lucide-arrow-left" class="mb-10" :variant="'link'" :to="'/about-me'">
                About Me
            </UButton>
            <ContentRenderer :value="resume"></ContentRenderer>
        </div>
    </UCard>
</template>

<script setup lang="ts">
const { data: resume, pending, error } = await useAsyncData('resume', () =>
    queryCollection("resume").first()
)

if (error.value || !resume.value) {
    throw showError({
        statusCode: 404,
        statusMessage: 'Project Not Found',
        message: `Sorry, we couldn't find a project.`
    });
}
</script>
