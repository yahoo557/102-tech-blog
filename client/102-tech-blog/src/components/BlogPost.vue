<script setup lang="ts">
import { marked } from "marked";
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
console.log(post);
const markdown = marked.parse(post.body);
</script>

<template>
  <div id="content" v-html="markdown"></div>
</template>

<style scoped>
#content {
  margin: 20px;
}

code{
  background-color: black;
  border-radius: 5px;
  border: solid black 1px;
}
</style>
