import { ref } from "vue";
import type { Ref } from "vue";

export const useStorePost = (): any => {
  interface Post {
    title: string;
    body: string;
    createDate: String;
    viewCount: number;
  }
  const state: Ref<Post> = ref({
    title: "title",
    body: "body",
    createDate: "any",
    viewCount: 0,
  });
  const setState = (post: Post) => {
    state.value.title = post.title;
    state.value.body = post.body;
    state.value.createDate = post.createDate;
    state.value.viewCount = post.viewCount;
  };
  return {
    postData: state,
    setState,
  };
};
