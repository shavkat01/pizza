import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/module/Home/HomePage.vue')
  },
  {
    path: '/catalog/:id',
    name: 'Catalog',
    component: () => import('../views/module/Category/Catalog.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/module/Favorites/index.vue')
  },
  {
    path: '/booking',
    name: 'Booking',
    component: () => import('../views/module/Booking/index.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/module/Saved/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
