/*
 * @Author: your name
 * @Date: 2021-11-22 09:30:54
 * @LastEditTime: 2021-12-07 11:23:09
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

import { userDetailApi} from '@/api/user.js'
import {loginStatusApi} from '@/api/login.js'

const state = {
  userAccount: {
    anonimousUser: false,
    ban: 0,
    baoyueVersion: -1,
    createTime: 1466338605305,
    donateVersion: 0,
    id: 292515621,
    paidFee: false,
    status: 0,
    tokenVersion: 4,
    type: 1,
    userName: "1_********873",
    vipType: 0,
    whitelistAuthority: 0,
  },
  userDetail: {
    "level": 9,
    "listenSongs": 9205,
    "userPoint": {
        "userId": 292515621,
        "balance": 1,
        "updateTime": 1638843351729,
        "version": 10,
        "status": 0,
        "blockBalance": 0
    },
    "mobileSign": false,
    "pcSign": false,
    "profile": {
        "privacyItemUnlimit": {
            "area": true,
            "college": true,
            "age": true,
            "villageAge": true
        },
        "avatarDetail": null,
        "avatarImgIdStr": "18633423557581539",
        "backgroundImgIdStr": "2002210674180203",
        "userId": 292515621,
        "avatarImgId": 18633423557581540,
        "birthday": -2209017600000,
        "gender": 0,
        "nickname": "农企要翻身",
        "accountStatus": 0,
        "avatarUrl": "http://p1.music.126.net/GJ5qTHTRTHFWUX2u3-AfnA==/18633423557581539.jpg",
        "backgroundImgId": 2002210674180203,
        "backgroundUrl": "http://p1.music.126.net/bmA_ablsXpq3Tk9HlEg9sA==/2002210674180203.jpg",
        "djStatus": 0,
        "province": 510000,
        "vipType": 0,
        "followed": false,
        "city": 510100,
        "createTime": 1466338928117,
        "defaultAvatar": false,
        "authStatus": 0,
        "detailDescription": "",
        "experts": {},
        "expertTags": null,
        "userType": 0,
        "mutual": false,
        "remarkName": null,
        "description": "",
        "signature": "",
        "authority": 0,
        "followeds": 9,
        "follows": 14,
        "blacklist": false,
        "eventCount": 0,
        "allSubscribedCount": 0,
        "playlistBeSubscribedCount": 0,
        "avatarImgId_str": "18633423557581539",
        "followTime": null,
        "followMe": false,
        "artistIdentity": [],
        "cCount": 0,
        "sDJPCount": 0,
        "playlistCount": 10,
        "sCount": 0,
        "newFollows": 14
    },
    "peopleCanSeeMyPlayRecord": true,
    "bindings": [
        {
            "userId": 292515621,
            "expiresIn": 2147483647,
            "refreshTime": 1466338726,
            "bindingTime": 1466338726414,
            "tokenJsonStr": null,
            "expired": false,
            "url": "",
            "id": 2869502107,
            "type": 1
        },
        {
            "userId": 292515621,
            "expiresIn": 7776000,
            "refreshTime": 1521359317,
            "bindingTime": 1466338605466,
            "tokenJsonStr": null,
            "expired": true,
            "url": "",
            "id": 2869502108,
            "type": 5
        }
    ],
    "adValid": true,
    "code": 200,
    "createTime": 1466338928117,
    "createDays": 1997,
    "profileVillageInfo": {
        "title": "领取村民证",
        "imageUrl": null,
        "targetUrl": "https://sg.music.163.com/g/cloud-card?full_screen=true"
    }
},
  
  // userAccount: null,
  // userDetail: null,
  userLogin: false,
};

const getters = {
  userId(state){
    return state.userAccount['id']
  }
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
  getUserInfo({commit, getters}) {
    loginStatusApi()
      .then((response) => {
        console.log(response);
        if (response["data"]['data']["code"] == 200) {
          commit(UPDATE_USER_ACCOUNT, response["data"]['data']["account"])
          return userDetailApi(getters.userId);
        }
      })
      .then((response) => {
        console.log(response);
        if (response["data"]["code"] == 200) {
          commit(UPDATE_USER_DETAIL, response["data"])
        }
      }).catch(error => {
        console.log(error);
      })
  },

};

// 最后统一导出
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
