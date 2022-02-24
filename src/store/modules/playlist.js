/*
 * @Author: your name
 * @Date: 2021-12-22 10:26:23
 * @LastEditTime: 2022-02-24 22:26:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\store\modules\playlist.js
 */
import * as types from "../mutationsTypes";

import { playlistDetailApi } from "@/api/playlist.js";


const state = {
  playlistDetail: {
      "code": 200,
      "relatedVideos": null,
      "playlist": {
          "id": 7125294123,
          "name": "demo",
          "coverImgId": 109951164444131700,
          "coverImgUrl": "https://p1.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg",
          "coverImgId_str": "109951164444131697",
          "adType": 0,
          "userId": 292515621,
          "createTime": 1639661680050,
          "status": 0,
          "opRecommend": false,
          "highQuality": false,
          "newImported": false,
          "updateTime": 1639661680344,
          "trackCount": 1,
          "specialType": 0,
          "privacy": 0,
          "trackUpdateTime": 1639661680405,
          "commentThreadId": "A_PL_0_7125294123",
          "playCount": 0,
          "trackNumberUpdateTime": 1639661680344,
          "subscribedCount": 0,
          "cloudTrackCount": 0,
          "ordered": false,
          "description": null,
          "tags": [],
          "updateFrequency": null,
          "backgroundCoverId": 0,
          "backgroundCoverUrl": null,
          "titleImage": 0,
          "titleImageUrl": null,
          "englishTitle": null,
          "officialPlaylistType": null,
          "subscribers": [],
          "subscribed": false,
          "creator": {
              "defaultAvatar": false,
              "province": 510000,
              "authStatus": 0,
              "followed": false,
              "avatarUrl": "http://p1.music.126.net/GJ5qTHTRTHFWUX2u3-AfnA==/18633423557581539.jpg",
              "accountStatus": 0,
              "gender": 0,
              "city": 510100,
              "birthday": 0,
              "userId": 292515621,
              "userType": 0,
              "nickname": "农企要翻身",
              "signature": "",
              "description": "",
              "detailDescription": "",
              "avatarImgId": 18633423557581540,
              "backgroundImgId": 2002210674180203,
              "backgroundUrl": "http://p1.music.126.net/bmA_ablsXpq3Tk9HlEg9sA==/2002210674180203.jpg",
              "authority": 0,
              "mutual": false,
              "expertTags": null,
              "experts": null,
              "djStatus": 0,
              "vipType": 0,
              "remarkName": null,
              "authenticationTypes": 0,
              "avatarDetail": null,
              "anchor": false,
              "avatarImgIdStr": "18633423557581539",
              "backgroundImgIdStr": "2002210674180203",
              "avatarImgId_str": "18633423557581539"
          },
          "tracks": [
              {
                  "name": "冬眠",
                  "id": 1398663411,
                  "pst": 0,
                  "t": 0,
                  "ar": [
                      {
                          "id": 28863695,
                          "name": "司南",
                          "tns": [],
                          "alias": []
                      }
                  ],
                  "alia": [],
                  "pop": 100,
                  "st": 0,
                  "rt": "",
                  "fee": 8,
                  "v": 8,
                  "crbt": null,
                  "cf": "",
                  "al": {
                      "id": 82655016,
                      "name": "冬眠",
                      "picUrl": "http://p3.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg",
                      "tns": [],
                      "pic_str": "109951164444131697",
                      "pic": 109951164444131700
                  },
                  "dt": 269583,
                  "h": {
                      "br": 320000,
                      "fid": 0,
                      "size": 10785480,
                      "vd": -21403
                  },
                  "m": {
                      "br": 192000,
                      "fid": 0,
                      "size": 6471306,
                      "vd": -18804
                  },
                  "l": {
                      "br": 128000,
                      "fid": 0,
                      "size": 4314218,
                      "vd": -17128
                  },
                  "a": null,
                  "cd": "01",
                  "no": 1,
                  "rtUrl": null,
                  "ftype": 0,
                  "rtUrls": [],
                  "djId": 0,
                  "copyright": 1,
                  "s_id": 0,
                  "mark": 8192,
                  "originCoverType": 1,
                  "originSongSimpleData": null,
                  "single": 0,
                  "noCopyrightRcmd": null,
                  "mst": 9,
                  "cp": 1416678,
                  "mv": 0,
                  "rtype": 0,
                  "rurl": null,
                  "publishTime": 1571932800000
              }
          ],
          "videoIds": null,
          "videos": null,
          "trackIds": [
              {
                  "id": 1398663411,
                  "v": 9,
                  "t": 0,
                  "at": 1639661680344,
                  "alg": null,
                  "uid": 292515621,
                  "rcmdReason": ""
              }
          ],
          "shareCount": 0,
          "commentCount": 0,
          "remixVideo": null,
          "sharedUsers": null,
          "historySharedUsers": null
      },
      "urls": null,
      "privileges": [
          {
              "id": 1398663411,
              "fee": 8,
              "payed": 0,
              "realPayed": 0,
              "st": 0,
              "pl": 128000,
              "dl": 0,
              "sp": 7,
              "cp": 1,
              "subp": 1,
              "cs": false,
              "maxbr": 999000,
              "fl": 128000,
              "pc": null,
              "toast": false,
              "flag": 260,
              "paidBigBang": false,
              "preSell": false,
              "playMaxbr": 999000,
              "downloadMaxbr": 999000,
              "rscl": null,
              "freeTrialPrivilege": {
                  "resConsumable": false,
                  "userConsumable": false
              },
              "chargeInfoList": [
                  {
                      "rate": 128000,
                      "chargeUrl": null,
                      "chargeMessage": null,
                      "chargeType": 0
                  },
                  {
                      "rate": 192000,
                      "chargeUrl": null,
                      "chargeMessage": null,
                      "chargeType": 1
                  },
                  {
                      "rate": 320000,
                      "chargeUrl": null,
                      "chargeMessage": null,
                      "chargeType": 1
                  },
                  {
                      "rate": 999000,
                      "chargeUrl": null,
                      "chargeMessage": null,
                      "chargeType": 1
                  }
              ]
          }
      ],
      "sharedPrivilege": null,
      "resEntrance": null
  },
};

const getters = {
  playlist(state){
    return state["playlistDetail"]['playlist']
  },
  privileges(state){
    return state['privileges']
  },
  playlistTrackIds(state){
    return state['playlistDetail']['playlist']['trackIds']
  }
};

const mutations = {
 [types.UPDATE_PLAYLIST_DETAIL](state, payload){
   state.playlist = payload
 }
};

const actions = {
  getPlaylistDetail({commit}, data){
    return playlistDetailApi(data).then(response => {
      if(response['data']['code'] == 200){ 
        console.log(response['data']);
        commit(types.UPDATE_PLAYLIST_DETAIL, response['data'])
      }
    })
    .catch(error => {
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
