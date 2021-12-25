import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/baomingliucheng',
    name: 'baomingliucheng',
    component: () => import('@/views/baomingliucheng/baomingliucheng.vue')
  },
  {
    path: '/diqing',
    name: 'diqing',
    component: () => import('@/views/diqing/diqing.vue')
  },
  {
    path: '/gaotie',
    name: 'gaotie',
    component: () => import('@/views/gaotie/gaotie.vue')
  },
  {
    path: '/hangkong',
    name: 'hangkong',
    component: () => import('@/views/hangkong/hangkong.vue')
  },
  {
    path: '/jinrong',
    name: 'jinrong',
    component: () => import('@/views/jinrong/jinrong.vue')
  },
  {
    path: '/kongcheng',
    name: 'kongcheng',
    component: () => import('@/views/kongcheng/kongcheng.vue')
  },
  {
    path: '/rengongzhineng',
    name: 'rengongzhineng',
    component: () => import('@/views/rengongzhineng/rengongzhineng.vue')
  },
  {
    path: '/xinmeiti',
    name: 'xinmeiti',
    component: () => import('@/views/xinmeiti/xinmeiti.vue')
  },
  {
    path: '/youlong',
    name: 'youlong',
    component: () => import('@/views/youlong/youlong.vue')
  },
  {
    path: '/chuzhongsheng',
    name: 'chuzhongsheng',
    component: () => import('@/views/hangkong/chuzhongsheng/chuzhongsheng.vue')
  },
  {
    path: '/gaozhongsheng',
    name: 'gaozhongsheng',
    component: () => import('@/views/hangkong/gaozhongsheng/gaozhongsheng.vue')
  },
  {
    path: '/sanxiaosheng',
    name: 'sanxiaosheng',
    component: () => import('@/views/hangkong/sanxiaosheng/sanxiaosheng.vue')
  },
  {
    path: '/yikaosheng',
    name: 'yikaosheng',
    component: () => import('@/views/hangkong/yikaosheng/yikaosheng.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
