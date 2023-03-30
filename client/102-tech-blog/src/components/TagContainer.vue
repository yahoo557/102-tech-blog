<script lang="ts">
import { httpGet } from "@/modules/http";
import { useStoreTagList } from "@/compositions/useStoreTagList";
import TagIcon from "@/components/TagIcon.vue"
interface Data {
  data: string;
  result: {
    rows: object[];
  };
}
export default {
  components: { TagIcon },
  emits: ["update:value"],
  props: {
    value: {
      type: Array,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      validator: (value:number[]) => {
        const hasNameKey = value.every((option) =>
          Object.keys(option).includes("name")
        );
        const hasIdKey = value.every((option) =>
          Object.keys(option).includes("id")
        );
        return hasNameKey && hasIdKey;
      },
    },
  },
  setup(props:any, context:any): any {
    const { tagData, setState } = useStoreTagList();
    const check = (optionId:number, checked:boolean) => {
      let updatedValue = [...props.value];
      if (checked) {
        updatedValue.push(optionId);
      } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1);
      }
      context.emit("update:value", updatedValue);
    };
    const onSuccess = (data: Data) => {
      setState(data);
    };
    const onFailed = (data: Data) => {
      console.log('failed', data);
    };
    httpGet('/api/taglist', onSuccess, onFailed);
    return {
      tagData,
      check
    };
  },
};
</script>

<template>
    <div class="row row-cols-1 row-cols-sm-5 g-2 m-1 border rounded ">
      <div class="col" v-for="(tag, index) in tagData" v-bind:key="index">
        <TagIcon v-bind="tag" />
      </div>
        <button type="button" class="btn btn-light rounded-pill border position-relative m-1" >RESET</button>
    </div>
</template>
