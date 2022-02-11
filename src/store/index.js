/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2022-02-11 16:49:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

import * as types from "@/store/mutationsTypes.js";

import playlist from "./modules/playlist.js";
import toplist from "./modules/toplist.js";
import player from "./modules/player.js";
import login from "./modules/login.js";
import user from "./modules/user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMouseDown: false,
    messageTipInfo: {
      text: "",
      type: "correct",
      show: false,
    },
    popupType: "",
    popupData: {
      download: {
        title: "下载",
        style: {
          width: "418px",
        },
      },
      addToPlaylist: {
        title: "添加到歌单",
        style: {
          width: "480px",
        },
      },
      createPlaylist: {
        title: "新建歌单",
        style: {
          width: "480px",
        },
      },
      share: {
        title: "分享",
        style: {
          width: "530px",
        },
      },
    },
  },
  mutations: {
    updateIsMouseDown(state, payload) {
      state.isMouseDown = payload;
    },
    [types.UPDATE_POPUP_TYPE](state, payload) {
      state.popupType = payload;
    },
    [types.UPDATE_MESSAGE_TIP_INFO](state, payload) {
      state.messageTipInfo = payload;
      setTimeout(() => {
        Vue.set(state.messageTipInfo, "show", false);
      }, 1000);
    },
  },
  getters: {
    popupInfo(state) {
      if (state.popupType) {
        return state.popupData[state.popupType];
      } else {
        return null;
      }
    },
  },
  actions: {},
  modules: {
    playlist,
    toplist,
    player,
    login,
    user,
  },
});
