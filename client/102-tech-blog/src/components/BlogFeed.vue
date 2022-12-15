<template>
  <h2>feed</h2>
</template>

<script setup lang="ts">
defineProps<{
  feed: object[];
  category: String;
}>();
import axios from 'axios';
axios({url:'http://localhost:3000/app/board', method:'GET', withCredentials:true,}).then(res => {
  console.log(res.data);
}).catch((err)=>{
  console.log("err : ", err);
});
</script>
