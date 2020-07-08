import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const VueRouterReplace = VueRouter.prototype.replace
// VueRouter.prototype.replace = function replace (to) {
//   return VueRouterReplace.call(this, to).catch(err => err)
// }

const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue')
    // component: resolve => require(['@/views/Blogs.vue'],resolve),
  },
  {
    path: '/charts',
    name: 'Charts',
    component: () => import('../views/Charts.vue')
    // component: resolve => require(['@/views/Charts.vue'],resolve),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // component: resolve => require(['@/views/About.vue'],resolve),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
