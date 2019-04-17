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
    participation: {},
    language: 'fr'
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
    },
    setLanguage (state, lang) {
      state.language = lang
    }
  },
  getters: {
    birds: state => state.birds,
    language: state => state.language
  }
})

export default store
