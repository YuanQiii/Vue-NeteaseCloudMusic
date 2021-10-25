import Vue from "vue";
import Vuex from "vuex";

import navigation from "./modules/navigation.js";
import player from "./modules/player.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMouseDown: false
  },
  mutations: {
    updateIsMouseDown(state, payload) {
      state.isMouseDown = payload
    }
  },
  actions: {},
  modules: {
    navigation,
    player,
  },
});
