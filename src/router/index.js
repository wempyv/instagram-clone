import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    iconClass: "fas fa-home",
    mainMenu: true,
  },
  {
    path: "/search",
    name: "Search",
    component: Home,
    iconClass: "fas fa-search",
    mainMenu: true,
  },
  {
    path: "/reels",
    name: "Reels",
    component: Home,
    iconClass: "fas fa-film",
    mainMenu: true,
  },
  {
    path: "/notifikasi",
    name: "Notifikasi",
    component: Home,
    iconClass: "far fa-heart",
    mainMenu: true,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Home,
    iconClass: "far fa-user",
    mainMenu: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
