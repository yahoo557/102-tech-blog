<script setup lang="ts">
interface Post {
  id?: number;
  title?: string;
  body?: string;
  createdDate?: string;
  user_id?: number;
  viewCont?: number;
}
const postData = defineProps<Post>();
console.log('in Card', postData.id, postData.title);
</script>

<template>
  <div class="card-body">
    <h4>{{ postData.title }}</h4>
    <hr />
    <p class="card-text">{{ postData.body }}</p>
  </div>
</template>


<style scoped>

</style>
