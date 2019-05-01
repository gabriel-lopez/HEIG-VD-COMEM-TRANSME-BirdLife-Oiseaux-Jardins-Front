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
    setParticipationNpa (state, npa) {
      state.participation.npa = npa
    },
    setParticipationCity (state, city) {
      state.participation.city = city
    },

    setParticipationName (state, name) {
      state.participation.name = name
    },
    setParticipationSurname (state, surname) {
      state.participation.surname = surname
    },
    setParticipationEmail (state, email) {
      state.participation.email = email
    },
    setParticipationBirthday (state, birthday) {
      state.participation.birthday = birthday
    },

    setParticipationNewsletter (state, value) {
      state.participation.newsletter = value
    },
    setParticipationNewMember (state, value) {
      state.participation.newmember = value
    },
    setParticipationOrder (state, value) {
      state.participation.order = value
    }
  },
  getters: {
    birds: state => state.birds,
    language: state => state.language,
    participation: state => state.participation
  }
})

export default store
