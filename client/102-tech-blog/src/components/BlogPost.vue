<script setup lang="ts">
import { defineProps, onMounted, onBeforeMount } from "vue";
import { marked } from "marked";
interface Props {
  id: string;
  title: string;
  body: string;
  description: string;
  createdAt: string;
  status: string;
  date: string;
  tags: {
    "id": number;
    "createdAt": string;
    "updatedAt": string;
    "postId": number;
    "tagListId": number;
  }[];
}
const post = defineProps<Props>();
const markdown = marked.parse(post.body);


</script>

<template>
  <h1>{{post.title}}</h1>
  <hr>
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
