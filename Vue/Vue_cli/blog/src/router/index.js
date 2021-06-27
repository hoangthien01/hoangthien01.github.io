import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/auth/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'unauth'
    }
  },
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: "/home",
    name: "home",
    component: () => import('../views/Home.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import('../views/Dashboard.vue'),
    meta: {
      layout: 'secret'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue')
  },
  {
    path: '/blog/:id',
    component: () => import('../views/DetailBlog.vue'),
  },
  {
    // will match everything
    path: '*',
    component: () => import('../views/NotFound.vue')
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
