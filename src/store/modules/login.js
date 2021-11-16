/*
 * @Author: your name
 * @Date: 2021-11-11 09:10:23
 * @LastEditTime: 2021-11-16 17:50:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\modules\login.js
 */
const state = {
  windowShow: false,
  windowMove: false,

  mode: 'menu'
};

const mutations = {
  updateState(state, payload) {
    Object.keys(payload).forEach(key => {
      if (state.hasOwnProperty(key)) {
        state[key] = payload[key]
      }
    });
  },
  updateWindowShow(state, payload) {
    state.windowShow = payload
  }
};

const getters = {};

const actions = {};

// 最后统一导出
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
