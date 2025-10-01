<template>
    <div class="h-full">
        <Fog class="h-full">
            <UCard class="p-3 w-8/10 lg:w-2/5 md:w-2/5 sm:w-10/12 bg-[var(--white)] text-[var(--slate-dark)]"
                :variant="'soft'">
                <div>
                    <h1 class="text-2xl font-bold">
                        Hello There!
                    </h1>
                </div>
                <div class="mt-6">
                    <h2>
                        I’m Harry, a computer science student passionate about building software, exploring
                        data, and creating projects on topics find interesting. This site is where I
                        share a bit about myself, my interests, and the things I’m learning along the way.
                    </h2>
                </div>
                <div class="grid grid-cols-3 w-1/2 pt-6">
                    <a href="https://github.com/HarryHills3588" :target="'_blank'">
                        <Icon :name="'mdi:github'" size="30"></Icon>
                    </a>
                    <a href="https://www.linkedin.com/in/harry-hillsdownley" :target="'_blank'">
                        <Icon :name="'mdi:linkedin'" size="30"></Icon>
                    </a>
                    <a href="mailto:hsh47@case.edu">
                        <Icon :name="'mdi:email'" size="30"></Icon>
                    </a>
                </div>
            </UCard>
        </Fog>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "Home - Harry Hillsdownley"
})
</script>"