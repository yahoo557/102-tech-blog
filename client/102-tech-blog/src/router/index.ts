import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Blog.vue"),
    },
    {
      path: "/feed",
      name: "Feed",
      component: () => import("../views/FeedView.vue"),
    },
    {
      path: "/:id",
      name: "Post",
      component: () => import("../views/PostView.vue"),
    },
  ],
});

export default router;
