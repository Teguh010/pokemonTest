import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Pokemon from "./views/Pokemon.vue";
import Like from "./views/Like.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/like",
      name: "like",
      component: Like
    },
    {
      path: "/pokemon/:id",
      name: "pokemon",
      component: Pokemon
    },
    {
      path: "*",
      redirect: '/'
    },
  ]
});
