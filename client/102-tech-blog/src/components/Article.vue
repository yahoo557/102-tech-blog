<script setup lang="ts">
defineProps<{
  title: string,
  d: Date,
  body : string,
  replyCount : number,
  likeCount : number,
  viewCount: number;
}>();
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <p>{{ d }}</p>
    <p> ❤️ : {{ likeCount }} </p>
    <p> 💬️ : {{ replyCount }} </p>
    <p> 👤 : {{ viewCount }} </p>
  </header>
  <body>
    <div>
      {{ body }}
    </div>
  </body>
</template>