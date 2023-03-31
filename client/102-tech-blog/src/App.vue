<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class = "">
      <nav>
        <RouterLink class = "d-flex justify-content-center mt-3" to="/">
          <img style="height: 10vh" src = "https://102-tech-blog.s3.ap-northeast-2.amazonaws.com/hombutton.png" alt = "hot guy wearing sunglasses"/>
        </RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

