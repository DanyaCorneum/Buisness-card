import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import ContuctUs from "./pages/ContactUs.vue";
import Products from "./pages/Products.vue";
import Wishes from "./pages/Wishes.vue";
import News from "./pages/News.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about:", component: About },
  { path: "/contact-us",component: ContuctUs,},
  { path: "/products", component: Products },
  { path: "/news", component: News },
  { path: "/wishes", component: Wishes },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
