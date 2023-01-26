<script setup lang="ts">
import { Post as PostInterface } from "@/interface/postInterface";
// interface Props extends PostInterface {};

interface Props {
  id: number;
  title: string;
  body: string;
  created_at: string;
  status: string;
  updated_at: string;
  user_id: number;
  view_count: number;
  like_count: number;
}
const post = defineProps<Props>();
</script>

<template>
  <div class="card h-300  border-2">
    <div class="card-body">
      <a :href="post.id"><h4>{{ post.title }}</h4></a>
      <p class="card-text overflow-hidden">{{ post.body }}</p>
    </div>
    <hr />
  </div>
</template>


<style scoped>

</style>
