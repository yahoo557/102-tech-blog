<script setup lang="ts">

interface Props {
  id: number;
  title: string;
  body: string;
  description: string;
  createdAt: string;
  status: string;
  date: string;
  visible: boolean;
  tags: {
    "id": Number;
    "createdAt": String;
    "updatedAt": String;
    "postId": Number;
    "tagListId": Number;
  }[];
}

const post = defineProps<Props>();
let tagClass = [];
post.tags.forEach((element)=>{
  tagClass.push(`tag-${element.id}`)
})

</script>

<template>
  <div class="card h-300  border-2" :class="[tagClass]"  :style="{ display: post.visible ? 'block' : 'none' }">
    <div class="card-body">
      <a :href="post.id"><h4>{{ post.title }}</h4></a>
      <p class="card-text overflow-hidden">{{ post.description }}</p>
    </div>
    <div class="card-footer">
      <p class="card-text">DATE : {{post.date}}</p>
    </div>
  </div>
</template>


<style scoped>

</style>
