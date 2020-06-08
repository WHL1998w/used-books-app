import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/homepage'
      },
      //首页
      {
        path: '/homepage',
        name: 'HomePage',
        component: HomePage
      },
      //我的
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('../views/Personal.vue')
      },
      {
        //回收
        path: '/recycle',
        name: 'Recycle',
        component: () => import('../views/Recycle.vue')
      },
      {
        //书袋
        path: '/bookpocket',
        name: 'BookPocket',
        component: () => import('../views/BookPocket.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
