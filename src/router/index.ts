import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SearchView from "../views/SearchView.vue";
import MovieView from "../views/MovieView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: MovieView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

export default router;
