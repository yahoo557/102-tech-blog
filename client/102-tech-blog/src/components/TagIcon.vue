<script setup lang="ts">

interface Props {
  id: number;
  created_at: string;
  updated_at: string;
  name:string;
  imageUrl:string;
}
const tag = defineProps<Props>();
const toggleVisible = ()=>{
  console.log()
};


</script>
<template>
  <div class="form-check form-check-inline">
    <input type="checkbox" class="btn-check" v-bind:id="'btn-check-' + tag.id" autocomplete="off" :value="tag.id">
    <label class="btn btn-light rounded-pill border position-relative m-1" style="height: 7vh; width:100%" v-bind:for="'btn-check-' + tag.id">
      <img v-if="tag.imageUrl" :src="tag.imageUrl" :alt="tag.name" style="height: 100%"/>
      <p v-else> {{ tag.name }}</p>
    </label>
  </div>



</template>
<style scoped>

</style>
