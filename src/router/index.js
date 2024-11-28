import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '@/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta:{
        login: true
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignVue.vue'),
    }
  ],
})

router.beforeEach((to, from, next)=>{
  const authRequired = to.meta.login
  const user = auth.currentUser;

  if(authRequired && !user){
    next('/login');
  }else{
    next();
  }
})

export default router
