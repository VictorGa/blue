/**
 * Routes
 */
import Home from './page/home/home.vue'

export default [
  {
    name: 'home',
    path: '/',
    component: Home
  }

  // {
  //   path: '/',
  //   redirect: '/:lang?/home'
  // },
  // {
  //   path: '/*',
  //   redirect: '/:lang?/'
  // }
]
