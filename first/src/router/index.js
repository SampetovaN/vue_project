import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";
import Catalog from "@/pages/Catalog.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/catalog",
      name: "Catalog",
      component: Catalog
    }
  ]
});

export default router;
