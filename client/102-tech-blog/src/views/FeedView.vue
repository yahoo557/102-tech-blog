<script setup lang="ts">
import { provide,Ref} from "vue";
import { useStoreFeed } from "@/compositions/useStoreFeed";
import { httpGet } from "@/modules/http";
import BlogFeedCard from "@/components/BlogFeedCard.vue";
import TagContainer from "@/components/TagContainer.vue"
import type Data from "@/interface/dataInterface"
import type Post from "@/interface/postInterface"
const { feedData, setState } = useStoreFeed();


const onSuccess = (data: Data) => {setState(data);};
const onFailed = (data: Data) => {console.log('failed', data);};
httpGet(`/api/board/`, onSuccess, onFailed);
provide("feedData", feedData as Ref<Post[]>);

</script>

<template>
  <div class="container pt-5 mb-3">
      <TagContainer />
      <div class="row row-cols-sm-3 g-2 m-0" >
      <div class="" v-for="(post, index) in feedData" v-bind:key="index">
        <BlogFeedCard v-bind="post" v-if="post.visibility"/>
      </div>
  </div>
  </div>
</template>
