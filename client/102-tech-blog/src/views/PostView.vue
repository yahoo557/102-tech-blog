<script lang="ts">
interface Data {
  data: string;
  rows: object[];
}

import BlogPost from "@/components/BlogPost.vue";
import BlogReply from "@/components/BlogReply.vue";
import type { Post } from "@/interface/postInterface";
import { useStorePost } from "@/compositions/useStorePost";
import { useRoute } from "vue-router";
export default {
  components: { BlogPost, BlogReply },
  setup(): any {
    const { postData } = useStorePost();
    const route = useRoute();
    const postId:number = +route.params.id;
    console.log("postData", postData);
    console.log("postId", postId);
    return {
      postData,
    };
  },
};
// const post = postData.find((e:Post) => {
//   e.id === postId;
// });
// console.log(post)

</script>

<template>
  <h1>Post view</h1>
  <hr />
  <BlogPost />
  <hr />
  <BlogReply />
</template>
<style scoped>
</style>
