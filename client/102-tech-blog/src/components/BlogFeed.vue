<template>
  <div>
    <h1>FeedVue</h1>
    <span class="title">제목: {{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{

  title: string;

}>();
</script>
