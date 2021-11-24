/*
 * @Author: your name
 * @Date: 2021-11-22 09:30:54
 * @LastEditTime: 2021-11-24 14:54:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\store\modules\user.js
 */
/*
 * @Author: your name
 * @Date: 2021-11-11 09:10:23
 * @LastEditTime: 2021-11-21 17:21:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\modules\login.js
 */

import * as types from "../mutationsTypes.js";

const state = {
  userLoginInfo: null
};

const getters = {

};

const mutations = {
  [types.UPDATE_USER_LOGIN_INFO](state, payload) {
    state.userLoginInfo = payload
    console.log("🚀 ~ file: user.js ~ line 33 ~ state.userLoginInfo", state.userLoginInfo)
  }
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
