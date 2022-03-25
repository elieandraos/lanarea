<template>
    <div>
        Hello <span class="text-green-500">{{ name }}</span>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(['name'])
</script>
