<template>
  <h1>Feed View</h1>
  <Feed :title="test" />
</template>

<script setup lang="ts">
import Feed from "../components/BlogFeed.vue";
import axios from "axios";
const test  = "test"
const getData = async () => {
  let response = await axios.get("http://localhost:3000/app/board");
  return response.data.rows[0];
};



</script>
