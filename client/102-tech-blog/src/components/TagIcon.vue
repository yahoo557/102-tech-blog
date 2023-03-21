가<script setup lang="ts">
interface Props {
  id: number;
  created_at: string;
  updated_at: string;
  name:string;
}
const tag = defineProps<Props>();
</script>
<template>
  <h4>{{ tag.name }}</h4>
</template>
<style scoped>

</style>
