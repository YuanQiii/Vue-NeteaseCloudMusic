/*
 * @Author: your name
 * @Date: 2021-11-11 09:10:23
 * @LastEditTime: 2022-02-24 23:40:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\modules\login.js
 */

import * as types from "../mutationsTypes.js";
import { getValue } from "../../utils/hasOwn.js";

import {
  userDetailApi,
  userMsgPrivateApi,
  userPlaylistApi,
} from "@/api/user.js";
import { loginStatusApi } from "@/api/login.js";

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
    level: 9,
    listenSongs: 9205,
    userPoint: {
      userId: 292515621,
      balance: 1,
      updateTime: 1638843351729,
      version: 10,
      status: 0,
      blockBalance: 0,
    },
    mobileSign: false,
    pcSign: false,
    profile: {
      privacyItemUnlimit: {
        area: true,
        college: true,
        age: true,
        villageAge: true,
      },
      avatarDetail: null,
      avatarImgIdStr: "18633423557581539",
      backgroundImgIdStr: "2002210674180203",
      userId: 292515621,
      avatarImgId: 18633423557581540,
      birthday: -2209017600000,
      gender: 0,
      nickname: "农企要翻身",
      accountStatus: 0,
      avatarUrl:
        "http://p1.music.126.net/GJ5qTHTRTHFWUX2u3-AfnA==/18633423557581539.jpg",
      backgroundImgId: 2002210674180203,
      backgroundUrl:
        "http://p1.music.126.net/bmA_ablsXpq3Tk9HlEg9sA==/2002210674180203.jpg",
      djStatus: 0,
      province: 510000,
      vipType: 0,
      followed: false,
      city: 510100,
      createTime: 1466338928117,
      defaultAvatar: false,
      authStatus: 0,
      detailDescription: "",
      experts: {},
      expertTags: null,
      userType: 0,
      mutual: false,
      remarkName: null,
      description: "",
      signature: "",
      authority: 0,
      followeds: 9,
      follows: 14,
      blacklist: false,
      eventCount: 0,
      allSubscribedCount: 0,
      playlistBeSubscribedCount: 0,
      avatarImgId_str: "18633423557581539",
      followTime: null,
      followMe: false,
      artistIdentity: [],
      cCount: 0,
      sDJPCount: 0,
      playlistCount: 10,
      sCount: 0,
      newFollows: 14,
    },
    peopleCanSeeMyPlayRecord: true,
    bindings: [
      {
        userId: 292515621,
        expiresIn: 2147483647,
        refreshTime: 1466338726,
        bindingTime: 1466338726414,
        tokenJsonStr: null,
        expired: false,
        url: "",
        id: 2869502107,
        type: 1,
      },
      {
        userId: 292515621,
        expiresIn: 7776000,
        refreshTime: 1521359317,
        bindingTime: 1466338605466,
        tokenJsonStr: null,
        expired: true,
        url: "",
        id: 2869502108,
        type: 5,
      },
    ],
    adValid: true,
    code: 200,
    createTime: 1466338928117,
    createDays: 1997,
    profileVillageInfo: {
      title: "领取村民证",
      imageUrl: null,
      targetUrl: "https://sg.music.163.com/g/cloud-card?full_screen=true",
    },
  },
  userSubcount: {
    programCount: 0,
    djRadioCount: 2,
    mvCount: 1,
    artistCount: 4,
    newProgramCount: 0,
    createDjRadioCount: 0,
    createdPlaylistCount: 10,
    subPlaylistCount: 64,
    code: 200,
  },
  userMsgPrivate: {
    msgs: [
      {
        fromUser: {
          description: "歌手，制作人",
          avatarImgId: 109951164421204530,
          userType: 2,
          avatarDetail: {
            userType: 2,
            identityLevel: 1,
            identityIconUrl:
              "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4788940880/1a1f/68f5/b59a/b444b81b88567108ba88194fa29144f5.png",
          },
          nickname: "JFlaOfficial",
          djStatus: 0,
          followed: false,
          backgroundUrl:
            "https://p2.music.126.net/_JakqdkMRYGXwBJMYXC8aw==/109951164346505792.jpg",
          backgroundImgId: 109951164346505800,
          birthday: 550249200000,
          accountStatus: 0,
          city: 1002900,
          detailDescription: "歌手，制作人",
          defaultAvatar: false,
          userId: 632576974,
          avatarUrl:
            "https://p2.music.126.net/kECUWYA9Eu67HBVZ-kNV6Q==/109951164421204532.jpg",
          avatarImgIdStr: "109951164421204532",
          gender: 2,
          backgroundImgIdStr: "109951164346505792",
          authStatus: 1,
          expertTags: null,
          remarkName: null,
          vipType: 0,
          experts: null,
          mutual: false,
          province: 1000000,
          signature: "韩国歌手、创作人",
          authority: 0,
          blacklist: false,
          artistName: "J.Fla",
        },
        toUser: {
          description: "",
          avatarImgId: 18633423557581540,
          userType: 0,
          avatarDetail: null,
          nickname: "农企要翻身",
          djStatus: 0,
          followed: false,
          backgroundUrl:
            "https://p2.music.126.net/bmA_ablsXpq3Tk9HlEg9sA==/2002210674180203.jpg",
          backgroundImgId: 2002210674180203,
          birthday: -2209017600000,
          accountStatus: 0,
          city: 510100,
          detailDescription: "",
          defaultAvatar: false,
          userId: 292515621,
          avatarUrl:
            "https://p2.music.126.net/GJ5qTHTRTHFWUX2u3-AfnA==/18633423557581539.jpg",
          avatarImgIdStr: "18633423557581539",
          gender: 0,
          backgroundImgIdStr: "2002210674180203",
          authStatus: 0,
          expertTags: null,
          remarkName: null,
          vipType: 0,
          experts: null,
          mutual: false,
          province: 510000,
          signature: "",
          authority: 0,
        },
        noticeAccountFlag: false,
        noticeAccount: null,
        newMsgCount: 97,
        lastMsg:
          '{"msg":"我的最新MV《Feliz Navidad (Cover)》发布啦，快来看看吧！","newPub":true,"mv":{"id":14480404,"name":"Feliz Navidad (Cover)","status":0,"artist":{"name":"J.Fla","id":805090,"picId":0,"img1v1Id":18686200114669622,"briefDesc":"","picUrl":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","img1v1Url":"http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg","albumSize":0,"alias":[],"trans":"","musicSize":0,"topicPerson":0},"artistName":"J.Fla","imgurl":"http://p4.music.126.net/3_jWHjxCMaEpsBfN_KVhSA==/109951166686140381.jpg","imgurl16v9":"http://p4.music.126.net/JN8h_BFP4N6PhtqBmRz8cQ==/109951166686137494.jpg"},"type":7,"title":"分享MV"}',
        lastMsgTime: 1638534967877,
      },
    ],
    code: 200,
    more: false,
    newMsgCount: 202,
  },
  userPlaylist: [
    {
      subscribers: [],
      subscribed: false,
      creator: {
        defaultAvatar: false,
        province: 510000,
        authStatus: 0,
        followed: false,
        avatarUrl:
          "http://p1.music.126.net/GJ5qTHTRTHFWUX2u3-AfnA==/18633423557581539.jpg",
        accountStatus: 0,
        gender: 0,
        city: 510100,
        birthday: 0,
        userId: 292515621,
        userType: 0,
        nickname: "农企要翻身",
        signature: "",
        description: "",
        detailDescription: "",
        avatarImgId: 18633423557581540,
        backgroundImgId: 2002210674180203,
        backgroundUrl:
          "http://p1.music.126.net/bmA_ablsXpq3Tk9HlEg9sA==/2002210674180203.jpg",
        authority: 0,
        mutual: false,
        expertTags: null,
        experts: null,
        djStatus: 0,
        vipType: 0,
        remarkName: null,
        authenticationTypes: 0,
        avatarDetail: null,
        avatarImgIdStr: "18633423557581539",
        backgroundImgIdStr: "2002210674180203",
        anchor: false,
        avatarImgId_str: "18633423557581539",
      },
      artists: null,
      tracks: null,
      updateFrequency: null,
      backgroundCoverId: 0,
      backgroundCoverUrl: null,
      titleImage: 0,
      titleImageUrl: null,
      englishTitle: null,
      opRecommend: false,
      recommendInfo: null,
      subscribedCount: 0,
      cloudTrackCount: 0,
      userId: 292515621,
      totalDuration: 0,
      coverImgId: 109951165443758420,
      privacy: 0,
      trackUpdateTime: 1639453657156,
      trackCount: 763,
      updateTime: 1628754912961,
      commentThreadId: "A_PL_0_404318182",
      coverImgUrl:
        "https://p1.music.126.net/-QSQ1nT-nV6agAdWQIgURA==/109951165443758413.jpg",
      specialType: 5,
      anonimous: false,
      createTime: 1466291781102,
      highQuality: false,
      newImported: false,
      trackNumberUpdateTime: 1628754912961,
      playCount: 1422,
      adType: 0,
      description: null,
      tags: [],
      ordered: false,
      status: 0,
      name: "农企要翻身喜欢的音乐",
      id: 404318182,
      coverImgId_str: "109951165443758413",
      sharedUsers: null,
      shareStatus: null,
    },
  ],

  // userAccount: null,
  // userDetail: null,
  userLogin: true,

  userOperateSong: {},

  userOperateDetail: {},

  userOperateTypeIndex: 0,
  userOperateTypes: ["单曲", "歌单", "专辑", "mv", "djradio", "djprogram"],
  userOperateENTypes: [
    "song",
    "playlist",
    "album",
    "mv",
    "djradio",
    "djprogram",
  ],
};

const getters = {
  userId(state) {
    return getValue(state.userAccount, 'id')
  },
  userAvatarUrl(state) {
    return getValue(state.userDetail, "profile", "avatarUrl")
  },
  userNickname(state) {
    return getValue(state.userDetail, 'profile', 'nickname')
  },
  userVipLevel(state) {
    return getValue(state.userDetail, 'userPoint', 'balance')
  },
  userVipType(state) {
    return getValue(state.userDetail, 'profile', 'vipType')
  },
  userEventCount(state){
    return getValue(state.userDetail, 'profile', 'eventCount')
  },
  userFollows(state){
    return getValue(state.userDetail, 'profile', 'follows')
  },  
  userFolloweds(state){
    return getValue(state.userDetail, 'profile', 'followeds')
  },  
  userNewMsgCount(state) {
    return getValue(state.userMsgPrivate, 'newMsgCount')
  },
  userCreatedPlaylist(state, getters) {
    return state.userPlaylist.filter((value) => {
      return value["creator"]["userId"] == getters.userId;
    });
  },
  userOperateType(state) {
    return state.userOperateTypes[state.userOperateTypeIndex];
  },
  userOperateENType(state) {
    return state.userOperateENTypes[state.userOperateTypeIndex];
  },
  userOperateId(state, getters) {
    if (Object.keys(state.userOperateSong).length) {
      if (getters.userOperateENType == "song") {
        return state.userOperateSong["id"];
      }
    }
    return 0;
  },
  userOperateName(state, getters) {
    if (Object.keys(state.userOperateSong).length) {
      if (getters.userOperateENType == "song") {
        return state.userOperateSong["name"];
      }
    }
    return "";
  },
  userOperateCreator(state, getters) {
    if (Object.keys(state.userOperateSong).length) {
      if (getters.userOperateENType == "song") {
        return state.userOperateSong["ar"][0]["name"];
      }
    }
    return "";
  },
};

const mutations = {
  [types.UPDATE_USER_ACCOUNT](state, payload) {
    state.userAccount = payload;
  },
  [types.UPDATE_USER_DETAIL](state, payload) {
    state.userProfile = payload;
  },
  [types.UPDATE_USER_LOGIN](state, payload) {
    state.userLogin = payload;
  },
  [types.UPDATE_USER_SUBCOUNT](state, payload) {
    state.userSubcount = payload;
  },
  [types.UPDATE_USER_MSG_PRIVATE](state, payload) {
    state.userMsgPrivate = payload;
  },
  [types.UPDATE_USER_PLAYLIST](state, payload) {
    state.userPlaylist = payload;
  },
  [types.UPDATE_USER_OPERATE_SONG](state, payload) {
    state.userOperateSong = payload;
  },
  [types.UPDATE_USER_OPERATE_TYPE_INDEX](state, payload) {
    state.userOperateTypeIndex = payload;
  },
};

const actions = {
  getUserInfo({ commit, getters }) {
    loginStatusApi()
      .then((response) => {
        console.log(response);
        if (response["data"]["data"]["code"] == 200) {
          commit(
            types.UPDATE_USER_ACCOUNT,
            response["data"]["data"]["account"]
          );
          return userDetailApi(getters.userId);
        }
      })
      .then((response) => {
        console.log(response);
        if (response["data"]["code"] == 200) {
          commit(types.UPDATE_USER_DETAIL, response["data"]);
          return userMsgPrivateApi();
        }
      })
      .then((response) => {
        console.log(response);
        if (response["data"]["code"] == 200) {
          commit(types.UPDATE_USER_MSG_PRIVATE, response["data"]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getUserPlaylist({ commit, getters }) {
    userPlaylistApi(getters.userId)
      .then((response) => {
        if (response["data"]["code"] == 200) {
          console.log(response["data"]);
          commit(types.UPDATE_USER_PLAYLIST, response["data"]["playlist"]);
        } else {
          console.log("获取失败");
        }
        console.log(response["data"]["playlist"]);
      })
      .catch((error) => {
        console.log(error);
      });
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
