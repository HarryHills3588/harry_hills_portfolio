<template>
    <span class="inline-flex items-center font-medium rounded-md" :class="[
        sizeClasses[size],
        variantClasses[variant][label] || variantClasses[variant].default
    ]">
        {{ label }}
    </span>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "default",
    },
    variant: {
        type: String,
        default: "outline", // subtle | solid | outline
    },
    size: {
        type: String,
        default: "md", // sm | md | lg
    },
})

/**
 * Sizing
 */
const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
}

/**
 * Variants + Colors
 */
const variantClasses = {
    subtle: {
        default: "bg-gray-100 text-gray-800",
        red: "bg-red-100 text-red-800",
        blue: "bg-blue-100 text-blue-800",
        green: "bg-green-100 text-green-800",
        amber: "bg-amber-100 text-amber-800",
    },
    solid: {
        default: "bg-gray-800 text-white",
        red: "bg-red-600 text-white",
        blue: "bg-blue-600 text-white",
        green: "bg-green-600 text-white",
        amber: "bg-amber-600 text-white",
    },
    outline: {
        default: "border border-gray-800 text-gray-800",
        "Kafka": "border border-red-400 text-red-700",
        "SciKit Learn": "border border-blue-400 text-blue-700",
        "Pandas": "border border-green-400 text-green-700",
        "Numpy": "border border-amber-400 text-amber-700",
    },
}
</script>
