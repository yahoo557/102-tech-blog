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
      setState(data);
    };
    const onFailed = (data: Data) => {
      console.log('failed', data);
    };
    httpGet(`/api/board/${route.params.id}`, onSuccess, onFailed);
    return {
      postData,
    };
  },
};
</script>

<template>
  <hr />
    <BlogPost v-bind="postData" />
  <hr />
  <BlogReply />
</template>
<style scoped>
</style>
