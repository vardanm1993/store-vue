import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/Main/index.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Product/index.vue')
    },
  ]
})

export default router
