import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/demo1',
    name: 'Demo',
    component: () => import('@views/demo/demo1.vue'),
    meta: { title: '面包屑、flex布局' }
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: () => import('@views/demo/demo2.vue'),
    meta: { title: 'pc和移动端适配用flex+px' }
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: () => import('@views/demo/demo3.vue'),
    meta: { title: '分页列表' }
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: () => import('@views/demo/demo4.vue'),
    meta: { title: '提示框+移动端微信登录' }
  },
  {
    path: '/demo5',
    name: 'Demo5',
    component: () => import('@views/demo/demo5.vue'),
    meta: { title: 'tab列表+瀑布流' }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
