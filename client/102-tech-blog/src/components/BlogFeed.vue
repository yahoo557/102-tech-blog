<template>
  <h1>{{ title }}</h1>
  <p>{{ author }}</p>
  <p>{{ date }}</p>
  <h3>{{ summary }}</h3>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  author: string;
  summary: string;
  date: Date;
  id : number;
}>();
</script>
