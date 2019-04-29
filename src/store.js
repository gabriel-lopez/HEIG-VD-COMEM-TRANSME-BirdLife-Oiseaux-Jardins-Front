import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import { BirdModel } from './models/BirdModel'
import { ParticipationModel } from './models/ParticipationModel'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    language: 'fr',
    birds: [],
    participation: new ParticipationModel()
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
    },
    setParticipationDate (state, date) {
      state.participation.date = date
    },
    setParticipationTime (state, time) {
      state.participation.time = time
    },
    setParticipationUser (state, user) {
      state.participation.user = user
    },
    setParticipationUserPlace (state, userPlace) {
      state.participation.userPlace = userPlace
    }
  },
  getters: {
    birds: state => state.birds,
    language: state => state.language,
    participation: state => state.participation
  }
})

export default store
