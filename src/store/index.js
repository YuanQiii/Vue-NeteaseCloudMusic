import Vue from 'vue'
import Vuex from 'vuex'
import navigation from './modules/navigation.js'
import player from './modules/player.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    navigation,
    player
  }
})
