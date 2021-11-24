/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-11-24 14:59:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

import player from "./modules/player.js";
import login from "./modules/login.js";
import user from './modules/user.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMouseDown: false,
  },
  mutations: {
    updateIsMouseDown(state, payload) {
      state.isMouseDown = payload;
    },
  },
  actions: {},
  modules: {
    player,
    login,
    user
  },
});
