import VueRouter from 'vue-router'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './store'

/**
 * Router
 */
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})

sync(store, router)
