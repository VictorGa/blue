import Vue from 'vue'
import VueI18nManager from 'vue-i18n-manager'
import template from './index.html'

export default function (store, router) {
  const app = new Vue({
    template,
    store,
    router
  })

  const path = `${process.env.publicPath}static/lang`

  Vue.use(VueI18nManager, {
    store,
    router,
    config: { path }
  })

  return Vue.initI18nManager().then(() => app.$mount('#app'))
}
