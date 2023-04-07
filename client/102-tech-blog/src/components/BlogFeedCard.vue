<script setup lang="ts">
import { useStoreTagList } from "@/compositions/useStoreTagList";

interface Props {
  id: string;
  title: string;
  body: string;
  description: string;
  createdAt: string;
  status: string;
  date: string;
  visible: boolean;
  tags: {
    "id": Number;
    "createdAt": string;
    "updatedAt": string;
    "postId": Number;
    "tagListId": Number;
  }[];
}
const { tagData, setState } = useStoreTagList();

const post = defineProps<Props>();
let tagClass: string[] = [];
post.tags.forEach((element)=>{
  tagClass.push(`tag-${element.id}`)
})

</script>

<template>
  <div class="card h-300  border-2" :class="[tagClass]"  >
    <a :href="post.id"><img class="card-img-top" src ="https://102-tech-blog.s3.ap-northeast-2.amazonaws.com/default_thumbs.jpg" alt ="thumb"/></a>

    <div class="card-body">
      <a :href="post.id"><h4>{{ post.title }}</h4></a>
      <p class="card-text overflow-hidden">{{ post.description }}</p>
    </div>
    <div class="card-footer">
      <p class="card-text text-muted d-inline" >Tag : </p>
      <p class="d-inline" v-for="(tag, index) in post.tags" v-bind:key="index"> {{tag.tagListId}} </p>
      <p class="card-text text-muted">Date : {{post.date}}</p>
    </div>

  </div>
</template>


<style scoped>
.card{

  background: #fff;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);

  cursor: pointer;
}

.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>
