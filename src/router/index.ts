import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta:{title: '首页'}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login.vue"),
    meta: {title: '登录页'}
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User.vue'),
    meta: {title: '用户信息'}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
