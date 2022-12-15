<template>
    <BlogNav/>
    <BlogFeed/>
    <BlogPost/>
    <BlogFooter/>
</template>

<script lang="ts">
import BlogNav from "@/components/BlogNav.vue";
import BlogFeed from "@/components/BlogFeed.vue";
import BlogPost from "@/components/BlogPost.vue";
import BlogFooter from "@/components/BlogFooter.vue";
export default {
  components: {BlogFooter, BlogPost, BlogFeed, BlogNav}
}

</script>
