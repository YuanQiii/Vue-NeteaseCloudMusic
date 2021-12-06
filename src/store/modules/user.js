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

import * as types from "../mutationsTypes.js";

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
  // userProfile: {
  //   accountStatus: 0,
  //   accountType: 1,
  //   anchor: false,
  //   authStatus: 0,
  //   authenticated: false,
  //   authenticationTypes: 0,
  //   authority: 0,
  //   avatarDetail: null,
  //   avatarImgId: 18633423557581540,
  //   avatarUrl: "http://p2.music.126.net/GJ5qTHTRTHFWUX2u3-AfnA==/18633423557581539.jpg",
  //   backgroundImgId: 2002210674180203,
  //   backgroundUrl: "http://p1.music.126.net/bmA_ablsXpq3Tk9HlEg9sA==/2002210674180203.jpg",
  //   birthday: -2209017600000,
  //   city: 510100,
  //   createTime: 1466338928117,
  //   defaultAvatar: false,
  //   description: null,
  //   detailDescription: null,
  //   djStatus: 0,
  //   expertTags: null,
  //   experts: null,
  //   followed: false,
  //   gender: 0,
  //   lastLoginIP: "3.91.149.82",
  //   lastLoginTime: 1638757202499,
  //   locationStatus: 30,
  //   mutual: false,
  //   nickname: "农企要翻身",
  //   province: 510000,
  //   remarkName: null,
  //   shortUserName: "********873",
  //   signature: "",
  //   userId: 292515621,
  //   userName: "1_********873",
  //   userType: 0,
  //   vipType: 0,
  //   viptypeVersion: 1614443578814,
  // },
  userAccount: null,
  userProfile: null,
  userLogin: false,
};

const getters = {

};

const mutations = {
  updateUserAccount(state, payload){
    state.userAccount = payload
  },
  updateUserProfile(state, payload){
    state.userProfile = payload
  },

  [types.UPDATE_USER_LOGIN](state, payload) {
    state.userLogin = payload;
  },
   
};

const actions = {

  getLoginStatus({dispatch, commit}){
    return loginStatusApi().then(response => {
      console.log("🚀 ~ file: user.js ~ line 108 ~ returnloginStatusApi ~ response", response)
      if(response['data']['code'] == 200){
        commit('updateUserAccount', response['data']['account'])
        commit('updateUserProfile', response['data']['profile'])
        
        
      }
    })
  },

  getUserAccount({dispatch}){
    return userAccountApi().then(response => {
    console.log("🚀 ~ file: user.js ~ line 119 ~ returnuserAccountApi ~ response", response)
    dispatch('getUserDeatil')
    })
  },

  getUserDeatil({state}){
    return userDetailApi(state.userAccount['id']).then(response => {
    console.log("🚀 ~ file: user.js ~ line 126 ~ returnuserDetailApi ~ response", response)
    })
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
