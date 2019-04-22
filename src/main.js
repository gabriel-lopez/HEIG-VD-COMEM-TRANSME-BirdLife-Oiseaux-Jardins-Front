import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/vuetify'
import './plugins/veevalidate'
import './plugins/vuemeta'
import { i18n } from './plugins/vuei18n'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
