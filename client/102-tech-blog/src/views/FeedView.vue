<template>
  <div>
    <Feed :title=""/>
  </div>
</template>

<script setup lang="ts">
import Feed from "@/components/BlogFeed.vue";

export default {
  components: {
    Feed
  }
}
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
