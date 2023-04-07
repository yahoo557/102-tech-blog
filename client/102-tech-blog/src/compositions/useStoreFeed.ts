import { ref } from "vue";
import type { readonly, Ref } from "vue";
import type Post from "@/interface/postInterface"

export const useStoreFeed = (): any => {
  const state: Ref<Post[]> = ref([]);

  const setState = (rows: Post[]) => {
    rows.forEach((row)=>{
      row.visibility = true;
    })
    state.value = rows;
  };

  return {
    feedData: state,
    setState,
  };
};
