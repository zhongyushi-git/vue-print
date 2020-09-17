import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name:'home',
    component: () => import('@/views/home')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
})


export default router
