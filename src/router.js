import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/birds',
      name: 'birds',
      component: () => import(/* webpackChunkName: "birds" */ './views/Birds.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import(/* webpackChunkName: "game" */ './views/Game.vue')
    },
    {
      path: '/participate',
      name: 'participate',
      component: () => import(/* webpackChunkName: "participate" */ './views/Participate.vue')
    },
    {
      path: '/about',
      name: 'about_us',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
