// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import ProductDetail from '../components/Product-detail.vue';


const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/product-detail', component: ProductDetail, name: 'Product detail' },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top
    return { x: 0, y: 0, behavior:'smooth' };
  }
});

export default router;
