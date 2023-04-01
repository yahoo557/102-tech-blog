import { ref } from "vue";
import type { readonly, Ref } from "vue";
import type Post from "@/interface/postInterface"

export const useStorePost = (): any => {
  const state: Ref<Post[]> = ref([]);

  const setState = (rows: Post[]) => {
    state.value = rows;
  };

  return {
    postData: state,
    setState,
  };
};
