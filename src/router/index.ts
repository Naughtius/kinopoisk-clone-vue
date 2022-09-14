import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SearchView from "../views/SearchView.vue";
import MovieView from "../views/MovieView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";

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
  {
    path: "/auth/sign-in",
    name: "sign-in",
    component: SignInView,
  },
  {
    path: "/auth/sign-up",
    name: "sign-up",
    component: SignUpView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

export default router;
