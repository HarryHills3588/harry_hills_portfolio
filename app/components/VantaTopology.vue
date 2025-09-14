<template>
    <div class="relative">
        <div ref="vantaRef" class="fixed inset-0 z-[-1]" />
        <div class="flex items-center justify-center h-full w-full">
            <slot class="content-center" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const vantaRef = ref(null);
let vantaEffect = null;

onMounted(async () => {
    if (typeof window !== 'undefined') {
        const VANTA = await import('vanta/dist/vanta.topology.min');
        const p5 = (await import('p5')).default;

        vantaEffect = VANTA.default({
            el: vantaRef.value,
            p5: p5,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x89964e,
            backgroundColor: 0x2222,
        });
    }
});

onBeforeUnmount(() => {
    if (vantaEffect) {
        vantaEffect.destroy();
    }
});
</script>