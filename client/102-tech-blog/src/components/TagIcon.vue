<script setup lang="ts">

interface Props {
  id: number;
  created_at: string;
  updated_at: string;
  name:string;
  imageUrl:string;
}
const tag = defineProps<Props>();

</script>
<template>
  <div class="form-check form-check-inline">
    <input type="checkbox" class="btn-check" v-bind:id="'btn-check-' + tag.id" autocomplete="off" :value="tag.id" >
    <label class="btn btn-light rounded-pill border position-relative m-1 h-auto w-100"  v-bind:for="'btn-check-' + tag.id" >
      <img class="w-100" v-if="tag.imageUrl" :src="tag.imageUrl" :alt="tag.name" />
      <p v-else> {{ tag.name }}</p>
    </label>
  </div>



</template>
<style scoped>

</style>
