import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./reset.css";
import "./main.css";
import App from "./App.vue";
import SignUp from "./pages/Login.vue";
import Recipes from "./pages/Recipes.vue";

const routes = [
  {
    path: "/",
    component: SignUp,
  },
  { path: "/recipes", component: Recipes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
