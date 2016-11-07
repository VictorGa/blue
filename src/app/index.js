import Vue from 'vue'
import VueI18nManager from 'vue-i18n-manager'
import template from './index.html'

export default function (store, router) {
  const app = new Vue({
    template,
    store,
    router
  })

  Vue.use(VueI18nManager, {
    store,
    router,
    config: {
      path: 'static/lang/'
    }
  })

  Vue.$i18n.init().then(() => app.$mount('#app'))
}
