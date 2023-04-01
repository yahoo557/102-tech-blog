import { ref } from "vue";
import type { readonly, Ref } from "vue";
import type TagList from "@/interface/tagListInterface"


export const useStoreTagList = (): any => {
  const state: Ref<TagList[]> = ref([]);
  const setState = (rows: TagList[]) => {
    state.value = rows;
  };
  return {
    tagData: state,
    setState,
  };
};
