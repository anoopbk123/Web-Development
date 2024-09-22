import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Counter from '../components/Counter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
  ]
})

export default router
