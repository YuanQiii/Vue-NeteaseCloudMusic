/*
 * @Author: your name
 * @Date: 2021-11-11 09:10:23
 * @LastEditTime: 2021-11-11 09:20:36
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\modules\login.js
 */
const state = {
  loginWindowShow: false,
  loginWindowMove: false
};

const mutations = {
  updateLoginWindowShow(state, payload) {
    state.loginWindowShow = payload;
  },
  updateLoginWindowMove(state, payload) {
    state.loginWindowMove = payload
  }
};

const getters = {};

const actions = {};

// 最后统一导出
export default {
  state,
  getters,
  actions,
  mutations,
};
