<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class = "position-relative">
        <RouterLink class ="position-absolute top-50 start-50 translate-middle" to="/"><img src = "https://102-tech-blog.s3.ap-northeast-2.amazonaws.com/home-icon.png"/></RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

