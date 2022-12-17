<template>
  <div>
    <ul class="wrap">
      <li class="item">
        <a  target="_blank">
          <span class="tit">제목: {{ title }}</span>
<!--          <span class="aut">작성자: {{user_id}}</span>-->
<!--          <span class="aut">작성일: {{date}}</span>-->
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{

  title: { type: string,  required: true};
  // user_id: { type: string,  required: true};
  // date: { type: string,  required: true};
  // summary: { type: string,  required: true};
  // img: { type: string,  required: false};

  // src: { type: string,  required: false};

}>();
</script>
