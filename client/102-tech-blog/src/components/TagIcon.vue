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
.btn{
  background: #fff;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  cursor: pointer;
}
.btn:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>
