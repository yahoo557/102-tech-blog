import { ref } from "vue";
import type { readonly, Ref } from "vue";

export const useStoreTagList = (): any => {
  interface Tag {
    id: number;
    createdAt: string;
    updatedAt: string;
    name:string;
  }
  const state: Ref<Tag[]> = ref([]);
  const setState = (rows: Tag[]) => {
    state.value = rows;
  };
  return {
    tagData: state,
    setState,
  };
};
