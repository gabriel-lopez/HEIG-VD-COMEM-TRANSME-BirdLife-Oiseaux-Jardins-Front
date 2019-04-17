import Vue from 'vue'
import './plugins/vuetify'
import './plugins/veevalidate'
import { i18n } from './plugins/vuei18n'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
