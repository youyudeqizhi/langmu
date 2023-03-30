import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    name: "a",
    path: "/",
    component: () => import("./views/A.vue"),
  },
];

export default routes;
