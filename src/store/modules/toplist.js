/*
 * @Author: your name
 * @Date: 2022-02-11 16:48:24
 * @LastEditTime: 2022-02-11 17:03:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\store\modules\toplist.js
 */

import * as types from "../mutationsTypes";

const state = {
  toplist: [],
};

const getters = {};

const mutations = {
  [types.UPDATE_TOPLIST](state, payload) {
    state.toplist = payload;
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
