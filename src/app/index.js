import Vue from 'vue'
import template from './index.html'

export default function (store, router) {
  const app = new Vue({
    template,
    store,
    router
  })

  app.$mount('#app')

  return app
}
