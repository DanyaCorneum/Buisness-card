import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import ContuctUs from "./pages/ContactUs.vue";
import Products from "./pages/Products.vue";
import Login from "./pages/Login.vue";

const routes = [
  { path: "/", component: Home},
  { path: "/about:", component: About },
  {
    path: "/contact-us",
    component: ContuctUs,
    children: [
      {
        path: "login",
        component: Login,
        name: "login",
      },
    ],
  },
  { path: "/products", component: Products },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
