import { createRouter, createWebHistory } from "vue-router";
import Progress from "../components/Progress.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Progress,
  },
  {
    path: "/document",
    name: "document",
    component: () =>
      import(/* webpackChunkName: "docement" */ "../components/Document.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
