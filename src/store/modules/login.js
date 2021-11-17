/*
 * @Author: your name
 * @Date: 2021-11-11 09:10:23
 * @LastEditTime: 2021-11-17 11:40:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\modules\login.js
 */

import * as types from '../mutationsTypes.js';

const state = {
  loginWindowShow: false,
  loginWindowMove: false,
  loginMode: 'menu',
  loginModeTitle: {
    menu: '登录',
    QRCode: '登录',
    email: '邮箱登录',
    phone: '手机号登录',
    register: '手机号注册',
    reset: '重设密码'
  },
  loginPolicyShow: false
};

const getters = {
  loginTitle(state) {
    return state.loginModeTitle[state.loginMode]
  }
};

const mutations = {
  [types.UPDATE_LOGIN_WINDOW_SHOW](state, payload) {
    state.loginWindowShow = payload
  },
  [types.UPDATE_LOGIN_WINDOW_MOVE](state, payload) {
    state.loginWindowMove = payload
  },
  [types.UPDATE_LOGIN_MODE](state, payload) {
    state.loginMode = payload
  },
  [types.UPDATE_LOGIN_POLICY_SHOW](state, payload) {
    state.loginPolicyShow = payload
  },

};

const actions = {};

// 最后统一导出
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
