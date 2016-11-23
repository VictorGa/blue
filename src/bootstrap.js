import Vue from 'vue'
import VueResource from 'vue-resource'
import VueSocial from 'vue-social'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import { sync } from 'vuex-router-sync'

import routes from './app/routes'
import store from './app/store'
import app from './app'

/**
* Initialize base application styles
*/
require('./asset/style/base.css')

/**
 * The debug mode is available globally in the Vue.config.debug property
 */
Vue.config.debug = process.env.debug

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
  mode: 'hash',
  routes
})

sync(store, router)

/**
 * Analytics
 */
Vue.use(VueAnalytics, { router })

/**
 * Social
 */
Vue.use(VueSocial, {
  // Provide this config when you want to use social login
  // auth: {
  //   linkedin: `${domain}/auth/linkedin`,
  //   facebook: `${domain}/auth/facebook`
  // }
})

/**
 * Bootstrap the application
 */
export default app(store, router)
