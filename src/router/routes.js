const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Dashboard.vue')},
      {path: '/Categories', component: () => import('pages/admin/Category.vue')},
      {path: '/Orders', component: () => import('pages/admin/Order.vue')},
    ]
  },
  {
    path: '/Login-1',
    component: () => import('pages/Login-1.vue')
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
