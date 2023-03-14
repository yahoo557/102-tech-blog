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
    return {
      postData,
    };
  },
};
</script>

<template>
  <div class="container pt-5">
  <div class="row row-cols-1 row-cols-sm-3 g-2 m-0">
    <div class="col" v-for="(post, index) in postData" v-bind:key="index">
      <BlogFeedCard v-bind="post" />
    </div>

  </div>
    <ul>
<!--      <li v-for=>-->
<!---->

<!---->
<!--      </li>-->
    </ul>
  </div>
</template>
