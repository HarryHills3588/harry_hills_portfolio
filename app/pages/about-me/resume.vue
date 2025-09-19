<template>
    <ResumeViewer :resume="resume"></ResumeViewer>
</template>

<script setup lang="ts">
const resume = await $fetch<Resume>("/api/resume", { method: "GET" });

useHead({
    title: "Resume - About Me"
})
</script>