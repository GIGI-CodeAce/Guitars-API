 import { createRouter, createWebHistory } from 'vue-router'
import showGuitar from './components/showGuitar.vue'
import showGuitars from './components/showGuitars.vue'
import home from './components/home.vue'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: home
  },
  {
    path: '/guitars',
    name: 'guitarList',
    component: showGuitars
  },
  {
    path: '/guitars/:id',
    name: 'guitarDetail',
    component: showGuitar
  },  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
