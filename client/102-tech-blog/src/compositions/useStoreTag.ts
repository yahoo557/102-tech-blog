import { ref } from "vue";
import type { readonly, Ref } from "vue";

export const useStoreTag = (): any => {
  interface Tag {
    id: number;
    created_at: string;
    updated_at: string;
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
