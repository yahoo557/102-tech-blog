<script setup lang="ts">
interface Post {
  id?: number;
  title?: string;
  body?: string;
  created_at?: string;
  user_id?: number;
  viewCount?: number;
}
const post = defineProps<Post>();

</script>

<template>
  <div class="card-body">
    <h4>{{ post.title }}</h4>
    <p class="card-text">{{ post.body }}</p>
    <hr />
  </div>
</template>


<style scoped>

</style>
