import { createRouter, createWebHistory } from 'vue-router'

const guard = () => (to, from, next) => {
  //checando token valido para liberação de rotas
  if(localStorage.getItem('token') || "") {
    next()
  } else {
    next('/login')
  }
}

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
      path: '/app',
      name: 'template',
      beforeEnter: guard(),
			redirect: '/app/dashboard',
      component: () => import('../components/components-users/Template.vue'),
			children: [
				{
					path: 'dashboard',
					name: 'dashboard',
					beforeEnter: guard(),
					component: () => import('../pages/user-pages/Dashboard.vue')
				},
				{
					path: 'contacts',
					name: 'contacts',
					beforeEnter: guard(),
					component: () => import('../pages/user-pages/Contacts.vue')
				}
			]
		},
    {
      path: '/chat',
      name: 'chat',
      beforeEnter: guard(),
      component: () => import('../pages/user-pages/Chat.vue')
    },
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('../pages/NotFoundPage/index.vue')
		}
  ]
})

export default router
