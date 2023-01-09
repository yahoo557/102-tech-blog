<script lang="ts">
interface Data {
  data: string;
  rows: object[];
}

import { useStorePost } from "@/compositions/useStorePost";
import { httpGet } from "@/modules/http";
import BlogFeedCard from "@/components/BlogFeedCard.vue";

export default {
  components: { BlogFeedCard },
  setup(): any {
    const { postData, setState } = useStorePost();
    const onSuccess = (data: Data) => {
      setState(data.rows);
    };
    const onFailed = (data: Data) => {
      console.log('failed', data);
    };
    httpGet('/app/board', onSuccess, onFailed);
    console.log(postData.value);
    return {
      postData,
    };
  },
};
</script>

<template>
  <div class="container pt-5">
    <ul>
      <li v-for="(post, index) in postData" v-bind:key="post">
        <p>{{ index }}</p>
        <h1>{{ post.title }}</h1>
        <BlogFeedCard :postData="post" />
      </li>
    </ul>
  </div>
</template>
