import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/painel',
      name: 'dashboard',
      component: () => import('../pages/user-pages/Dashboard.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/user-pages/Contacts.vue')
    }
  ]
})

export default router
