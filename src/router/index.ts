/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-11 15:27:32
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-12 14:38:31
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test'
import MyRouter from '../views/MyRouter'

const routes: Array<RouteRecordRaw> = [
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
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/myRouter',
    name: 'MyRouter',
    component: MyRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
