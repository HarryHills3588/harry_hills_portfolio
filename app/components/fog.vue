<template>
  <div class="relative">
    <div ref="vantaRef" class="fixed inset-0 z-[-1]"/>
      <div class="flex items-center justify-center h-full w-full">
        <slot class="content-center"/>
      </div>
  </div>
</template>

<script setup>
// Your script tag remains exactly the same
import { ref, onMounted, onBeforeUnmount } from 'vue'

const vantaRef = ref(null)
let vantaEffect = null

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const VANTA = await import('vanta/dist/vanta.fog.min')
    const THREE = await import('three')

    vantaEffect = VANTA.default({
      el: vantaRef.value,
      THREE: THREE,
      highlightColor: 0xffab00,
      midtoneColor: 0xff1f00,
      lowlightColor: 0x2f03ff,
      baseColor: 0xffebeb,
      blurFactor: 0.5,
      zoom: 1,
      speed: 1,
    })
  }
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>