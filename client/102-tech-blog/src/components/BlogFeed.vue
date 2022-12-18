<template>
  <div>
    <span class="title">제목: {{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{

  title: string;
  // user_id: { type: string,  required: true};
  // date: { type: string,  required: true};
  // summary: { type: string,  required: true};
  // img: { type: string,  required: false};

  // src: { type: string,  required: false};

}>();
</script>
