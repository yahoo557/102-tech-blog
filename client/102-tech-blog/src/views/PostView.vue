<script lang="ts">
import { httpGet } from "@/modules/http";
interface Data {
  data: string;
  result: {
    rows: object[];
  };
}
import BlogPost from "@/components/BlogPost.vue";
import BlogReply from "@/components/BlogReply.vue";
import { useStorePost } from "@/compositions/useStorePost";
import { useRoute } from "vue-router";
export default {
  components: { BlogPost, BlogReply },
  setup(): any {
    const { postData, setState } = useStorePost();
    const route = useRoute();
    const onSuccess = (data: Data) => {
      setState(data.result.rows);
    };
    const onFailed = (data: Data) => {
      console.log('failed', data);
    };
    httpGet(`/app/board/${route.params.id}`, onSuccess, onFailed);
    return {
      postData,
    };
  },
};
</script>

<template>
  <h1>Post view</h1>
  <hr />
  <div v-for="(post, index) in postData" v-bind:key="index">
    <BlogPost v-bind="post" />
  </div>

  <hr />
  <BlogReply />
</template>
<style scoped>
</style>
