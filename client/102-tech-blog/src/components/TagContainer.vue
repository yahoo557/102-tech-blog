<script lang="ts">
import { httpGet } from "@/modules/http";
import { useStoreTag } from "@/compositions/useStoreTag";
import TagIcon from "@/components/TagIcon.vue"
interface Data {
  data: string;
  result: {
    rows: object[];
  };
}
export default {
  components: { TagIcon },
  setup(): any {
    const { tagData, setState } = useStoreTag();
    const onSuccess = (data: Data) => {
      setState(data);
    };
    const onFailed = (data: Data) => {
      console.log('failed', data);
    };
    httpGet('/api/taglist', onSuccess, onFailed);
    console.log(tagData);
    return {
      tagData,
    };
  },
};
</script>

<template>

    <div class="row row-cols-1 row-cols-sm-5 g-2 m-2 border rounded">
      <div class="col" v-for="(tag, index) in tagData" v-bind:key="index">
        <TagIcon v-bind="tag" />
      </div>
    </div>

</template>
