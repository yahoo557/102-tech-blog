<template>
  <h1>{{ category }}</h1>
  <hr/>
</template>
<style>

</style>
<script setup lang="ts">
defineProps<{
  feed: object;
  category: String;
}>();
</script>
