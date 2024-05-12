import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/registerview.vue'
import Login from '@/views/loginview.vue'

const routes = [
  {
    path: '/',
    redirect: '/login' // Redirige la ruta raíz a la página de inicio de sesión
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
