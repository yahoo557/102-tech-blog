<script setup lang="ts">
import { httpGet } from "@/modules/http"; // Http Get method 를 사용하기 위한 모듈
import { useStoreTagList } from "@/compositions/useStoreTagList";

import TagIcon from "@/components/TagIcon.vue"
import type Tag from "@/interface/tagInterface";
import type Post from "@/interface/postInterface"
import type Data from "@/interface/dataInterface"

import { inject, onMounted, Ref, ref } from "vue";
const { tagData, setState } = useStoreTagList();

const onSuccess = (data: Data) => { setState(data);};
const onFailed = (data: Data) => {console.log('failed', data);};
httpGet('/api/taglist', onSuccess, onFailed);

const checkedTag: Ref<number[]> = ref([]);
const tagRefs : Ref<number[]> = ref([]);
const feedData : Ref<Post[]> = inject("feedData");

// Update visibility of post by tag
const initializeVisibility = ()=>{
  feedData.value.forEach((post:Post)=>{
    post.visibility= false
  })
}

// Update the post visibility
const updateVisibility = ()=>{
  if(checkedTag.value.length) {
    initializeVisibility();
    feedData.value.forEach((post:Post)=>{
      post.tags?.forEach((tag:Tag)=>{
        if(checkedTag.value.indexOf(tag.tagListId)>-1){
          post.visibility= true
        }
      })
    })
    return
  }
  feedData.value.forEach((post:Post)=> {
    post.visibility = true
  })
}


// Update the checked tags
const updateCheckedTag = (tagId:number) => {
  const index : number = checkedTag.value.indexOf(tagId)
  if (index > -1) {
    checkedTag.value.splice(index, 1)
  }
  else {
    checkedTag.value.push(tagId)
  }
  updateVisibility();
}

// Clear the checked tags
const clearCheckedTag = () => {
  tagRefs.value.forEach((tagRef: any) => {
    tagRef.firstChild.firstChild.checked = false
  })
  checkedTag.value = []
  updateVisibility();
}

// Focusing tag input refs
onMounted(() => {
  tagRefs.value.forEach((tagRef: any) => {
    tagRef.focus()
  })
})

</script>

<template>
  <div class="row row-cols-1 row-cols-sm-5 g-2 m-1 border rounded ">
    <div class="col" v-for="(tag, index) in tagData" v-bind:key="index" ref="tagRefs">
      <TagIcon v-bind="tag" v-on:change="updateCheckedTag(tag.id)" :id="tag.id" />
    </div>
    <button type="button" class="btn btn-light rounded-pill border position-relative m-1" @click="clearCheckedTag">RESET</button>
  </div>
</template>

<style scoped>

</style>
