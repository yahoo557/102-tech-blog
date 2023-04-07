<script setup lang="ts">
import { httpGet } from "@/modules/http";
import BlogPost from "@/components/BlogPost.vue";
import BlogReply from "@/components/BlogReply.vue";
import { useStorePost } from "@/compositions/useStorePost";
import { useRoute } from "vue-router";
import type Data from "@/interface/dataInterface"

const { postData, setState } = useStorePost();
const route = useRoute();
const onSuccess = (data: Data) =>  { setState(data); };
const onFailed = (data: Data) => { console.log('failed', data);};
httpGet(`/api/board/${route.params.id}`, onSuccess, onFailed);

</script>

<template>
  <BlogPost v-bind="postData"/>
  <BlogReply />
</template>
<style scoped>
</style>
