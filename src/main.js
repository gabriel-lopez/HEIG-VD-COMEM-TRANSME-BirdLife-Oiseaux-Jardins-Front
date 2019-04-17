import Vue from 'vue'
import './plugins/vuetify'
import './plugins/veevalidate'
import './plugins/vuei18n'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
