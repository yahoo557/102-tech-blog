가<script setup lang="ts">
interface Props {
  id: number;
  created_at: string;
  updated_at: string;
  name:string;
  imageUrl:string;
}
const tag = defineProps<Props>();
</script>
<template>

  <a class ="d-inline-flex px-5 rounded-pill border bg-light position-relative" :href="tag.id">
    <img v-if="tag.imageUrl" :src="tag.imageUrl" :alt="tag.name"/>
    <p v-else> {{ tag.name }}</p>
  </a>

</template>
<style scoped>

</style>
