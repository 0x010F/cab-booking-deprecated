import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/views/Home"
import Admin from "@/views/Admin"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      alias: '/book',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})