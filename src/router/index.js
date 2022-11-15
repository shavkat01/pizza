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
    path: '/cardDetails/:id',
    name: 'cardDetails',
    component: () => import('../views/module/Category/CardDetails/index.vue')
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
    component: () => import('../views/module/Saved/index.vue'),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/cart',
        component: () => import('../views/module/Saved/cart.vue'),

      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: '/delivery',
        component: () => import('../views/module/Saved/delivery.vue'),

      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/module/Product/index.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/catalog_info/:id',
    name: 'catalog_info',
    component: () => import('../views/module/Category/components/CatalogInfo')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
