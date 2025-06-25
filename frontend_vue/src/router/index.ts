import { createRouter, createWebHistory } from 'vue-router'
import axiosInstance from "@/lib/axios.ts";
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Admin_Panel from "@/views/auth/Admin_Panel.vue";
import User_Dashboard from "@/views/auth/User_Dashboard.vue";

const routes = [
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
    path: '/dashboard',
    name: 'dashboard',
    component: User_Dashboard,
  },
  {
    path: '/adminPanel',
    name: 'adminPanel',
    component: Admin_Panel,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//navigation guard
router.beforeEach(async (to, from, next) => {
  try {
    await axiosInstance.get('/api/csrf-cookie')
    const {data: user} = await axiosInstance.get('/api/user')

    if ((to.name === 'login' || to.name === 'register') && user) {
      return next({name: 'dashboard'})
    } else if ((to.name === 'adminPanel') && (user.role != 'admin')) {
      return next({name: 'dashboard'})
    }
    next()
  } catch (error) {
    if (to.name === 'dashboard' || to.name === 'adminPanel') {
      return next({name : 'login'})
    }
    next()
  }
})

export default router
