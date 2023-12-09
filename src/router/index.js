import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vue from 'vue';
import Router from 'vue-router';
import Cart from '../views/Cart.vue'; // 购物车页面组件路径

//Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
  },{
    path: '/ProductList',
    name: 'ProductList',
    component: () => import('../views/ProductList.vue')
  },{
    path: '/theCart',
    name: '111',
    component: () => import('../views/theCart.vue')
  },
  ,{
    path: '/Cart',
    name: 'Cart',
    component: Cart,
    props: true // 启用 props 传递
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

