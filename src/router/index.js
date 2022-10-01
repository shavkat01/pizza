import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/module/Home/HomePage.vue')
  },
  {
    path: '/catalog/:id',
    name: 'catalog',
    component: () => import('../views/module/Category/Catalog.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/module/Favorites/index.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../views/module/Booking/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/module/Saved/index.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/Auth.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
