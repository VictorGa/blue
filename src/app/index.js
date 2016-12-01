import Vue from 'vue'
import template from './index.html'

export default function (store, router) {
  const app = new Vue({
    template,
    store,
    router
  })

  // Vue.initI18nManager()

  document.addEventListener('DOMContentLoaded', function () {
    app.$mount('#app')
  })
}
