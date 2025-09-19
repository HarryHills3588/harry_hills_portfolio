<template>
    <Fog>
        <UCard>

            <div class="w-full px-4 max-w-[768px] flex flex-col space-y-4 pb-12">
                <div class="w-full items-center justify-end flex flex-row space-x-2 mb-10">
                    <div class="w-full flex flex-row justify-between text-md">
                        <span>
                            <UButton leading-icon="i-lucide-arrow-left" :variant="'link'" :to="'/about-me'">
                                About Me
                            </UButton>
                        </span>
                        <div class="flex flex-row">
                            <a href="/about-me/Harry_Hillsdownley.pdf" download="Harry_Hillsdownley.pdf"
                                class="p-1 hover:bg-background-secondary transition-colors duration-200 rounded-sm flex flex-row items-center justify-center">
                                <Icon name="mdi:download" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col space-y-2">
                    <h1 class="text-3xl sm:text-4xl text-center font-bold">
                        {{ resume.title }}
                    </h1>
                    <div class="text-md flex flex-row flex-wrap items-center justify-center space-x-4">
                        <a v-for="link in resume.links" :href="link.href" target="_blank"
                            class="flex flex-row items-center space-x-1">
                            <Icon :name="link.icon" class="w-4 h-4" />
                            <p>{{ link.text }}</p>
                        </a>
                    </div>

                    <section>
                        <h2 class="text-lg sm:text-xl font-bold">Education</h2>
                        <hr class="border-t border-highlight" />
                        <div v-for="edu in resume.education" class="text-md">
                            <span class="flex flex-col sm:flex-row justify-between">
                                <h3 class="font-bold">{{ edu.institution }}</h3>
                                <p class="font-bold">{{ edu.dates }}</p>
                            </span>
                            <span class="flex flex-col sm:flex-row justify-between">
                                <p class="italic">{{ edu.degree }}</p>
                                <p>{{ edu.location }}</p>
                            </span>
                            <ul class="list-disc pl-4 sm:pl-6 md:pl-8">
                                <li v-if="edu.courses.length > 0">
                                    <span class="flex flex-row">
                                        <p>
                                            <span class="font-bold">
                                                Relevant Coursework:
                                            </span>
                                            &nbsp;{{ edu.courses.join(", ") }}
                                        </p>
                                    </span>
                                </li>
                                <li v-if="edu.certificates.length > 0">
                                    <span class="flex flex-row">
                                        <p>
                                            <span class="font-bold">
                                                Certificates:
                                            </span>
                                            <a :href="edu.certificates[0]?.link" target="_blank"
                                                rel="noopener noreferrer" class="text-blue-600 hover:underline">
                                                {{ edu.certificates[0]?.name }}
                                            </a>
                                        </p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section v-if="resume.missionStatement">
                        <h2 class="text-lg sm:text-xl font-bold">Mission Statement</h2>
                        <hr class="border-t border-highlight" />
                        <p class="text-md mt-2">{{ resume.missionStatement }}</p>
                    </section>

                    <section>
                        <h2 class="text-lg sm:text-xl font-bold">Experience</h2>
                        <hr class="border-t border-highlight" />
                        <div v-for="exp in resume.experience">
                            <span class="flex flex-col sm:flex-row justify-between">
                                <h3 class="font-bold">{{ exp.company }}</h3>
                                <p class="font-bold">{{ exp.dates }}</p>
                            </span>
                            <span class="flex flex-col sm:flex-row justify-between">
                                <p class="italic">{{ exp.title }}</p>
                                <p>{{ exp.location }}</p>
                            </span>
                            <ul class="list-disc pl-4 sm:pl-6 md:pl-8">
                                <li v-for="responsibility in exp.responsibilities">
                                    {{ responsibility }}
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 class="text-lg sm:text-xl font-bold">Skills</h2>
                        <hr class="border-t border-highlight" />
                        <ul class="pl-4 sm:pl-6 md:pl-8">
                            <li>
                                <p>
                                    <span class="font-bold">Programming Languages:</span>&nbsp;{{
                                        resume.skills.programmingLanguages.join(", ")
                                    }}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span class="font-bold">Frameworks:</span>&nbsp;{{
                                        resume.skills.frameworks.join(", ")
                                    }}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span class="font-bold">Technologies:</span>&nbsp;{{
                                        resume.skills.technologies.join(", ")
                                    }}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span class="font-bold">Languages:</span>&nbsp;{{
                                        resume.skills.languages.join(", ")
                                    }}
                                </p>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <div class="w-fit">
                            <a href="/projects">
                                <span class="flex flex-row items-center justify-center space-x-1">
                                    <h2 class="text-lg sm:text-xl font-bold">
                                        Projects
                                    </h2>
                                    <Icon name="mdi:export" class="w-4 h-4" />
                                </span>
                            </a>
                        </div>
                        <hr class="border-t border-highlight" />
                        <div v-for="project in resume.projects">
                            <div class="flex flex-col sm:flex-row justify-between">
                                <span class="flex flex-col sm:flex-row">
                                    <div class="flex flex-row gap-1">
                                        <h3 class="font-bold">{{ project.name }}</h3>
                                        <a v-for="link in project.links" :href="link.href" target="_blank"
                                            class="flex flex-row items-center justify-center">
                                            <Icon :name="link.icon" class="w-4 h-4" />
                                        </a>
                                    </div>
                                    <p v-if="project.technologies.length > 0" class="hidden sm:block">
                                        &nbsp;|&nbsp;
                                    </p>
                                    <p>
                                        {{ project.technologies.join(", ") }}
                                    </p>
                                </span>
                                <p class="font-bold">{{ project.dates }}</p>
                            </div>
                            <ul class="list-disc pl-4 sm:pl-6 md:pl-8">
                                <li v-for="responsibility in project.responsibilities">
                                    {{ responsibility }}
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 class="text-lg sm:text-xl font-bold">Activities and Interests</h2>
                        <hr class="border-t border-highlight" />
                        <div v-for="com in resume.community">
                            <span class="flex flex-col sm:flex-row justify-between">
                                <h3 class="font-bold">{{ com.title }}</h3>
                                <p class="font-bold">{{ com.dates }}</p>
                            </span>
                            <ul class="list-disc pl-4 sm:pl-6 md:pl-8">
                                <li v-for="responsibility in com.responsibilities">
                                    {{ responsibility }}
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </UCard>
    </Fog>
</template>

<script setup lang="ts">
const props = defineProps<{
    resume: Resume
}>()
</script>
