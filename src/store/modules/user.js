/*
 * @Author: your name
 * @Date: 2021-11-22 09:30:54
 * @LastEditTime: 2021-12-06 17:40:56
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

import {UPDATE_USER_LOGIN, UPDATE_USER_ACCOUNT, UPDATE_USER_DETAIL} from "../mutationsTypes.js";

import {userAccountApi, userDetailApi} from '@/api/user.js'
import {loginStatusApi} from '@/api/login.js'

const state = {
  // userAccount: {
  //   anonimousUser: false,
  //   ban: 0,
  //   baoyueVersion: -1,
  //   createTime: 1466338605305,
  //   donateVersion: 0,
  //   id: 292515621,
  //   paidFee: false,
  //   status: 0,
  //   tokenVersion: 4,
  //   type: 1,
  //   userName: "1_********873",
  //   vipType: 0,
  //   whitelistAuthority: 0,
  // },
  userAccount: null,
  userDetail: null,
  userLogin: false,
};

const getters = {

};

const mutations = {
  [UPDATE_USER_ACCOUNT](state, payload){
    state.userAccount = payload
  },
  [UPDATE_USER_DETAIL](state, payload){
    state.userProfile = payload
  },

  [UPDATE_USER_LOGIN](state, payload) {
    state.userLogin = payload;
  },
   
};

const actions = {

  getUserInfo({commit}) {
    loginStatusApi()
      .then((response) => {
        console.log(response);
        if (response["data"]["code"] == 200) {
          commit(UPDATE_USER_ACCOUNT, response["data"]["account"])
          // this.UPDATE_USER_ACCOUNT(response["data"]["account"]);
          return userDetailApi();
        }
      })
      .then((response) => {
        console.log(response);
        if (response["data"]["code"] == 200) {
          commit(UPDATE_USER_DETAIL, response["data"])
          // this.UPDATE_USER_DETAIL(response["data"]);
        }
      });
  }
};

// 最后统一导出
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
