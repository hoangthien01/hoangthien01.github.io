import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Blogs from '../components/Blogs.vue'
import Contact from '../components/Contact.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component:Blogs
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base:process.env.BASE_URL,
  routes
})

export default router
