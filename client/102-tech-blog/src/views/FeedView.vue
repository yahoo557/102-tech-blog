
<template>
  <h1>Feed View</h1>
  <Feed :title="data[0].title"/>
</template>


<script setup lang="ts">

import Feed from"../components/BlogFeed.vue";
import axios from "axios";

const getData = async ()=>{
  let response = await axios.get("http://localhost:3000/app/board")
  return await response.data.rows
}
const data = await getData()

</script>
