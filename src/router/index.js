import Vue from 'vue'
import VueRouter from 'vue-router'
import Lander from '../components/Lander/lander.vue'
import Portfolio from '../components/Portfolio/portfolio'
import Contact from '../components/Contact/contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lander',
    name: 'Lander',
    component: Lander
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
