<template>
    <ResumeViewer :resume="resume" class="text-[var(--slate-dark)] dark:text-[var(--slate-light)]"></ResumeViewer>
</template>

<script setup lang="ts">
const resume = await $fetch<Resume>("/api/resume", { method: "GET" });

useHead({
    title: "Resume - About Me"
})
</script>