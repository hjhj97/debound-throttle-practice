import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../Home.vue")
  },
  {
    path: "/main",
    name: "MainPage",
    component: () => import("../pages/MainPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from) => {});

export default router;
