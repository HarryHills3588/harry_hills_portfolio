<template>
  <Fog>
    <UCard class="h-10/12 w-10/12 pr-6 pl-6 pb-6 mt-12">
      <h1 class="text-4xl font-bold mb-6 mt-6">
        Who am I?
      </h1>
      <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center">
        <div class="p-4 rounded-lg">
            <h2 class="text-2xl font-semibold mb-2">
                About Me
            </h2>
            <p>
                Hi! I'm Harry, a third-year Computer Science student passionate about building
                web applications, data-driven projects, and exploring AI technologies. I enjoy
                turning complex problems into simple, scalable solutions.
            </p>
            <NuxtLink class="underline" :to="'/resume'">Resume</NuxtLink>
        </div>

        <div class=" p-4 flex justify-center">
          <img 
            src="~/assets/img/me.jpeg" 
            alt="Harry Hillsdownley" 
            class=" w-48 h-80 object-cover shadow-lg"
          />
        </div>
      </div>
    </UCard>
  </Fog>
</template>