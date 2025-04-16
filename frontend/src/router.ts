 import { createRouter, createWebHistory } from 'vue-router'
import showGuitar from './components/showGuitar.vue'
import showGuitars from './components/showGuitars.vue'
import deleteGuitar from './components/deleteGuitar.vue'
import editGuitar from './components/editGuitar.vue'
import addGuitar from './components/addGuitar.vue'
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
  {
    path: '/guitars/:id/delete',
    name: 'guitarDelete',
    component: deleteGuitar
  },  
  {
    path: '/guitars/:id/edit',
    name: 'guitarEdit',
    component: editGuitar
  }, 
  {
    path: '/guitars/add',
    name: 'guitarAdd',
    component: addGuitar
  }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
