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
        "Kafka": "border border-slate-400 text-slate-700 bg-slate-50",
        "SciKit-Learn": "border border-orange-400 text-orange-700 bg-orange-50",
        "Microservices": "border border-green-400 text-green-700 bg-green-50",
        "Data Analysis": "border border-rose-400 text-rose-700 bg-rose-50",
        "Spacy": "border border-blue-400 text-blue-700 bg-blue-50",
        "Research Skills": "border border-yellow-400 text-yellow-700 bg-yellow-50",
        "Model Deployment": "border border-emerald-400 text-emerald-700 bg-emerald-50",
        "ML Engineering": "border border-teal-400 text-teal-700 bg-teal-50",
        "Model Development": "border border-indigo-400 text-indigo-700 bg-indigo-50",
        "AI Engineering": "border border-fuchsia-400 text-fuchsia-700 bg-fuchsia-50",
        "SWE": "border border-cyan-400 text-cyan-700 bg-cyan-50",
    },
}
</script>
