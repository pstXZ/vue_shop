import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import LoginVuetify from '../components/Login_vuetify.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/login_2', component: LoginVuetify }
]

const router = new VueRouter({
  routes
})

export default router
