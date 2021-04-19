import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myCourse',
    name: 'myCourse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myCourse.vue')
  },
  {
    path: '/coursePage/:id',
    name: 'coursePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/coursePage.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    
    component: () => import( '../views/cart.vue')
  },
  {
    path: '/team',
    name: 'Team',
    
    component: () => import( '../views/team.vue')
  },
  {
    path: '/register',
    name: 'Register',
    
    component: () => import( '../views/register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    
    component: login,
  },
  {
    path: '**',
    redirect : '/'
  }

]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
