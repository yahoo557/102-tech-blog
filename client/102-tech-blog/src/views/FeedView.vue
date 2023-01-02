<template>
  <h1> Feed View </h1>
</template>



<script setup lang="ts">

import axios from "axios";

const getPostData = async ()  =>{
  let result = await axios.get("http://localhost:3000/app/board");
  return result.data.rows
}
const data  = getPostData()

// const title = response.data.rows[0].title

</script>

