<template>
  <h1>{{ title }}</h1>
  <p>{{ author }}</p>
  <p>{{ date }}</p>
  <h3>{{ summary }}</h3>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  author: string;
  summary: string;
  date: Date;
}>();
import axios from "axios";
axios({
  url: "http://localhost:3000/app/board",
  method: "GET",
  withCredentials: true,
})
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log("err : ", err);
  });
</script>
