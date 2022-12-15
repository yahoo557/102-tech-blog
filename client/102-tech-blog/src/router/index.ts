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
      path: "/read/:id",
      name: "post",
      component: () => import("../views/PostView.vue"),
    },
    {
      path: "/feed",
      name: "feed",
      component: () => import("../views/PostView.vue"),
    },
  ],
});

export default router;
