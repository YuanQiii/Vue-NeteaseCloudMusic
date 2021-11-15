/*
 * @Author: your name
 * @Date: 2021-11-11 09:10:23
 * @LastEditTime: 2021-11-15 10:31:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\modules\login.js
 */
const state = {
  loginWindowShow: false,
  loginWindowMove: false,

  loginMode: 'menu'
};

const mutations = {
  updateLoginState(state, payload) {
    Object.keys(payload).forEach(key => {
      if (state.hasOwnProperty(key)) {
        state[key] = payload[key]
      }
    });
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
