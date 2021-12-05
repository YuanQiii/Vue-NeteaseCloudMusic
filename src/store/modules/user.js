/*
 * @Author: your name
 * @Date: 2021-11-22 09:30:54
 * @LastEditTime: 2021-12-04 23:05:52
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
  userLoginInfo: {
    loginType: 1,
    code: 200,
    account: {
      id: 292515621,
      userName: "1_18908077873",
      type: 1,
      status: 0,
      whitelistAuthority: 0,
      createTime: 1466338605305,
      salt: "[B@b94250d",
      tokenVersion: 2,
      ban: 0,
      baoyueVersion: -1,
      donateVersion: 0,
      vipType: 0,
      viptypeVersion: 1614443578814,
      anonimousUser: false,
    },
    token:
      "ec298cb182ba5efee545c7a618c952170ad612707baeb750e136da7a596af7da1e8907c67206e1edd78b6050a17a35e705925a4e6992f61d07c385928f88e8de",
    profile: {
      userType: 0,
      vipType: 0,
      gender: 0,
      accountStatus: 0,
      avatarImgId: 18633423557581540,
      nickname: "农企要翻身",
      backgroundImgId: 2002210674180203,
      birthday: -2209017600000,
      city: 510100,
      avatarUrl:
        "https://p3.music.126.net/GJ5qTHTRTHFWUX2u3-AfnA==/18633423557581539.jpg",
      defaultAvatar: false,
      province: 510000,
      expertTags: null,
      experts: {},
      mutual: false,
      remarkName: null,
      authStatus: 0,
      djStatus: 0,
      detailDescription: "",
      followed: false,
      backgroundUrl:
        "https://p3.music.126.net/bmA_ablsXpq3Tk9HlEg9sA==/2002210674180203.jpg",
      userId: 292515621,
      description: "",
      avatarImgIdStr: "18633423557581539",
      backgroundImgIdStr: "2002210674180203",
      signature: "",
      authority: 0,
      avatarImgId_str: "18633423557581539",
      followeds: 9,
      follows: 14,
      eventCount: 0,
      avatarDetail: null,
      playlistCount: 10,
      playlistBeSubscribedCount: 0,
    },
    bindings: [
      {
        bindingTime: 1466338726414,
        tokenJsonStr:
          '{"countrycode":"","cellphone":"18908077873","hasPassword":true}',
        expiresIn: 2147483647,
        refreshTime: 1466338726,
        userId: 292515621,
        expired: false,
        url: "",
        id: 2869502107,
        type: 1,
      },
      {
        bindingTime: 1466338605466,
        tokenJsonStr:
          '{"access_token":"916FE87C49493E9C7C8483A5FBB8EE46","openid":"923A529900CE4DFA6403D4A5C986AAF5","query_authority_cost":138,"nickname":"爽歪歪","partnerType":"0","expires_in":7776000,"login_cost":44,"authority_cost":1476}',
        expiresIn: 7776000,
        refreshTime: 1521359317,
        userId: 292515621,
        expired: true,
        url: "",
        id: 2869502108,
        type: 5,
      },
    ],
    cookie:
      "MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/api/clientlog;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/neapi/clientlog;;NMTID=00OB1xhP8o5vncsYEZOkx7D-qAgsSYAAAF9PdFYCg; Max-Age=315360000; Expires=Tue, 18 Nov 2031 14:47:49 GMT; Path=/;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/neapi/feedback;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/neapi/feedback;;__remember_me=true; Max-Age=1296000; Expires=Sun, 5 Dec 2021 14:47:49 GMT; Path=/;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/eapi/feedback;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/weapi/feedback;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/api/feedback;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/wapi/clientlog;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/api/feedback;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/api/clientlog;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/eapi/feedback;;MUSIC_U=ec298cb182ba5efee545c7a618c952170ad612707baeb750e136da7a596af7da1e8907c67206e1edd78b6050a17a35e705925a4e6992f61d07c385928f88e8de; Max-Age=1296000; Expires=Sun, 5 Dec 2021 14:47:49 GMT; Path=/;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/wapi/clientlog;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/eapi/clientlog;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/weapi/clientlog;;__csrf=e8ce432cb776a8e0f222de1431b125e3; Max-Age=1296010; Expires=Sun, 5 Dec 2021 14:47:59 GMT; Path=/;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/wapi/feedback;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/weapi/feedback;;MUSIC_R_T=1466338928117; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/wapi/feedback;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1466338605305; Max-Age=2147483647; Expires=Thu, 8 Dec 2089 18:01:56 GMT; Path=/openapi/clientlog;",
  },
  userLogin: false,
};

const getters = {
  userNickname(state) {
    return state.userLoginInfo["profile"]["nickname"];
  },
};

const mutations = {
  [types.UPDATE_USER_LOGIN_INFO](state, payload) {
    state.userLoginInfo = payload;
    console.log(
      "🚀 ~ file: user.js ~ line 33 ~ state.userLoginInfo",
      state.userLoginInfo
    );
  },
  [types.UPDATE_USER_LOGIN](state, payload) {
    state.userLogin = payload;
    console.log(
      "🚀 ~ file: user.js ~ line 128 ~ state.userLogin",
      state.userLogin
    );
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
