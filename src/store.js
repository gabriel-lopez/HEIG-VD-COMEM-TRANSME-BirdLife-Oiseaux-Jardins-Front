import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    birds: []
  },
  mutations: {
    addBird (state, bird) {
      state.birds.push(bird)
    }
  },
  actions: {

  },
  getters: {
    birds: state => state.birds
  }
})

export default store
