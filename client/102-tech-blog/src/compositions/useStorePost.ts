import { ref } from "vue";
import type { readonly, Ref } from "vue";

export const useStorePost = (): any => {
  interface Tag{
    "id": Number;
    "createdAt": String;
    "updatedAt": String;
    "postId": Number;
    "tagListId": Number;
  }
  interface Post {
    id?: number;
    title?: string;
    body?: string;
    createdAt?: string;
    updatedAt?: string;
    visible : Boolean;
    tags?:Tag[]
  }


  const state: Ref<Post[]> = ref([]);

  const setState = (rows: Post[]) => {
    rows.forEach((element)=>{
      element.visible = true;
    })
    state.value = rows;
  };
  return {
    postData: state,
    setState,
  };
};
