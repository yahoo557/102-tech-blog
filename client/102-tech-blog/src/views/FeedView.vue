<template>
  <div class="container pt-5">
    <div>
      <p class="fs-1 mb-0">{{ postData.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
interface Data {
  data: string;
  rows: object[];
}

import { useStorePost } from "@/compositions/useStorePost";
import { httpGet } from "@/modules/http";

export default {
  setup(): any {
    const { postData, setState } = useStorePost();
    const onSuccess = (data: Data) => {
      setState(data.rows);
    };
    const onFailed = (data: Data) => {
      console.log('failed', data);
    };
    httpGet('/app/board', onSuccess, onFailed);
    return {
      postData,
    };
  },
};
</script>
