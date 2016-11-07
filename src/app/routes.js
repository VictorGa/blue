/**
 * Routes
 */
import Home from './page/home/home.vue'

export default [
  {
    name: 'root',
    path: '/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    children: [
      {
        name: 'home',
        path: '/',
        component: Home
      }
    ]
  },
  {
    path: '/*',
    redirect: '/en'
  }
]
