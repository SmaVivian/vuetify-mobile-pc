import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/demo1',
    name: 'Demo',
    component: () => import('@views/demo/demo1.vue'),
    meta: { title: '导航' }
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
    meta: { title: '仅移动端存在的页面-活动报名-登录' }
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
