import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import 'vuetify/src/stylus/app.styl'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {
  iconfont: 'fa', /* old md */
  theme: {
    primary: '#ea5a28',
    secondary: '#e57373',
    accent: '#9c27b0',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})
