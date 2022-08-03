import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/module/Home/HomePage.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/module/Category/Catalog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
