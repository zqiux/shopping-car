import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Login from '../views/login/index'
// import List from '../views/list/index'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
