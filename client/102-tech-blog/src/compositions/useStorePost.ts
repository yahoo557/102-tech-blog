import { ref } from "vue";
import type { readonly, Ref } from "vue";

export const useStorePost = (): any => {
  interface Post {
    id?: number;
    title?: string;
    body?: string;
    created_at?: string;
    status?: string;
    updated_at?: string;
    user_id?: number;
    view_count?: number;
    like_count?: number;
  }
  const state: Ref<Post[]> = ref([]);
  const setState = (rows: Post[]) => {
    state.value = rows;
  };
  return {
    postData: state,
    setState,
  };
};
