<script lang="ts">
interface Data {
  data: string;
  rows: object[];
}

import { useStorePost } from "@/compositions/useStorePost";
import { httpGet } from "@/modules/http";
import BlogFeedCard from "@/components/BlogFeedCard.vue";
import TagContainer from "@/components/TagContainer.vue"

export default {
  components: { BlogFeedCard,TagContainer },
  setup(): any {
    const { postData, setState } = useStorePost();
    const onSuccess = (data: Data) => {
      setState(data);
    };
    const onFailed = (data: Data) => {
      console.log('failed', data);
    };
    httpGet('/api/board', onSuccess, onFailed);
    return {
      postData,
    };
  },
};
</script>

<template>
  <div class="container pt-5">
    <TagContainer />

    <div class="row row-cols-1 row-cols-sm-3 g-2 m-0">
    <div class="col" v-for="(post, index) in postData" v-bind:key="index">
      <BlogFeedCard v-bind="post" />
    </div>
  </div>
  </div>
</template>
