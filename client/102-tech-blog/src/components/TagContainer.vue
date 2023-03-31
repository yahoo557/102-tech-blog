<script setup lang="ts">
import { httpGet } from "@/modules/http"; // Http Get method 를 사용하기 위한 모듈
import { useStoreTagList } from "@/compositions/useStoreTagList";
import TagIcon from "@/components/TagIcon.vue"

//
// interface Data {
//   data: string;
//   result: {
//     rows: object[];
//   };
// }
//
// const { tagData, setState } = useStoreTagList();
// const onSuccess = (data: Data) => {
//   setState(data);
// };
// const onFailed = (data: Data) => {
//   console.log('failed', data);
// };
// httpGet('/api/taglist', onSuccess, onFailed);


let checkedNames = [];

</script>

<template>


  <div class="row row-cols-1 row-cols-sm-5 g-2 m-1 border rounded ">
    <div class="col" v-for="(tag, index) in tagData" v-bind:key="index">
      <TagIcon v-bind="tag" :id="tag.id" v-model="selectedValues" />
    </div>
    <button type="button" class="btn btn-light rounded-pill border position-relative m-1" >RESET</button>
  </div>

</template>
