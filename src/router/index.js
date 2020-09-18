import Vue from 'vue'
import VueRouter from 'vue-router'
import Lander from '../components/Lander/lander.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lander',
    name: 'Lander',
    component: Lander
  }
]

const router = new VueRouter({
  routes
})

export default router
