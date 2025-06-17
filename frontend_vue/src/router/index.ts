import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import UserDash from '../views/auth/UserDash.vue'
import AdminDash from '../views/auth/AdminDash.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/userDashboard',
      name: 'userDashboard',
      component: UserDash,
    },
    {
      path: '/adminDashboard',
      name: 'adminDashboard',
      component: AdminDash,
    },
  ],
})

export default router
