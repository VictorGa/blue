import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import Vuex from 'vuex'

import routes from './app/routes'
import store from './app/store'
import app from './app'

/**
* Initialize the main sass file of the application style
*/
require('./asset/style/app.scss')

/**
 * Initialize vue-resource plugin to manage http requests
 */
Vue.use(VueResource)

Vue.http.headers.common.Accept = 'application/json'

/**
 * Initialize vue-resource plugin to manage application routing
 */
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

/**
 * The debug mode is available globally in the Vue.config.debug property
 */
 Vue.config.debug = process.env.debug

 console.log('process.env', process.env)

/**
 * Bootstrap the application
 */
export default app(store, router);
