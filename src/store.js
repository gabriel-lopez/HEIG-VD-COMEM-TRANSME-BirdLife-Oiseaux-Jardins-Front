import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import { BirdModel } from './models/BirdModel'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    birds: [],
    participation: {}
  },
  mutations: {
    addBird (state, bird) {
      let item = state.birds.find(function (item) {
        return item.id === bird.id
      })

      if (item) {
        item.counter++
      } else {
        state.birds.push(new BirdModel(bird))
      }
    }
  },
  actions: {

  },
  getters: {
    birds: state => state.birds
  }
})

export default store
