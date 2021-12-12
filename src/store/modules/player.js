/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-12-10 23:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\modules\player.js
 */
import Vue from "vue";

import * as types from "../mutationsTypes";

import { songDetailApi, songLyricApi } from "@/api/song.js";

const state = {
  // audio
  audio: null,
  audioInterval: null,
  audioStateInterval: null,

  // 歌曲
  playListSongs: {},
  // 歌词
  playListSongsLyric: {},
  // 歌曲id
  playListSongsId: [],

  // 当前播放歌曲列表索引
  currentPLayIndex: 0,

  // 当前播放歌曲时间
  audioCurrentTime: 0,

  // 播放歌曲索引历史
  playIndexHistory: [],

  currentPlayLink: {},
  playStatus: 0,
  playMode: "随机",

  volume: 0,

  // 播放列表
  playlistShow: false,
};

const getters = {
  /**
   * @description: 歌曲时长
   * @param {*} state
   * @return {*}
   */
  playSongDurationTime(state) {
    try {
      return state.playListSongs[getters.currentPlaySongId(state)]["dt"];
    } catch {
      return 0;
    }
  },

  /**
   * @description: 当前歌曲id
   * @param {*} state
   * @return {*}
   */
  currentPlaySongId(state) {
    try {
      return state.playListSongsId[state.currentPLayIndex];
    } catch {
      return 0;
    }
  },

  /**
   * @description: 当前歌名
   * @param {*} state
   * @return {*}
   */
  currentPLaySongName(state) {
    if (state.playListSongs.hasOwnProperty(getters.currentPlaySongId(state))) {
      return state.playListSongs[getters.currentPlaySongId(state)]["name"];
    } else {
      return "";
    }
  },

  /**
   * @description: 歌曲数
   * @param {*} state
   * @return {*}
   */
  playSongsCount(state) {
    return state.playListSongsId.length;
  },

  /**
   * @description: 歌曲播放历史数组长度
   * @param {*} state
   * @return {*}
   */
  playIndexHistoryCount(state) {
    return state.playIndexHistory.length;
  },
};

const mutations = {
  [types.INIT_PLAYER_AUDIO](state) {
    state.audio = new Audio();
  },

  [types.UPDATE_PLAYER_AUDIO_CONFIG](state, payload) {
    for (const key in payload) {
      if (Object.hasOwnProperty.call(payload, key)) {
        state.audio[key] = payload[key];
      }
    }
  },

  /**
   * @description: 更新歌单列表，
   * payload 为对象时，增加一首歌曲
   * @param {*} state
   * @param {*} payload 类型为array
   * @return {*}
   */
  [types.ADD_PLAYLIST_SONGS_INFO](state, payload) {
    let addSongs = [];
    if (Array.isArray(payload)) {
      addSongs = payload;
    } else {
      addSongs.push(payload);
    }

    addSongs.forEach((element) => {
      if (!state.playListSongs.hasOwnProperty(element.id)) {
        Vue.set(state.playListSongs, element.id, element);
        state.playListSongsId.push(element.id);
      } else {
        console.log("已添加到播放列表");
      }
    });
  },

  /**
   * @description: 删除歌单歌曲,
   * payload为null时删除所有歌曲
   * @param {*} state
   * @param {*} payload 歌曲id
   * @return {*}
   */
  [types.DELETE_PLAYLIST_SONGS_INFO](state, payload) {
    if (payload) {
      Vue.delete(state.playListSongs, payload);
      Vue.delete(state.playListSongsId, state.playListSongsId.indexOf(payload));
    } else {
      state.playListSongs = {};
      state.playListSongsId = [];
    }
  },

  /**
   * @description: 更新歌词
   * @param {*} state
   * @param {*} payload 对象，键名为id，值为歌词对象
   * @return {*}
   */
  [types.UPDATE_PLAYLIST_SONGS_LYRIC](state, payload) {
    Object.keys(payload).forEach((index) => {
      if (!state.playListSongsLyric.hasOwnProperty(index)) {
        Vue.set(state.playListSongsLyric, index, payload[index]);
      }
    });
  },

  [types.SWITCH_PLAY_STATUS](state) {
    if (state.playStatus) {
      state.playStatus = 0;
      state.audio.pause();
    } else {
      state.playStatus = 1;
      state.audio.play();
    }
  },

  /**
   * @description: 更新当前歌曲索引
   * 更新播放历史
   * @param {*} state
   * @param {*} payload
   * @return {*}
   */
  [types.UPDATE_CURRENT_PLAY_INDEX](state, payload) {
    if (payload == -1) {
      state.playIndexHistory.pop();
      state.currentPLayIndex =
        state.playIndexHistory[state.playIndexHistory.length - 1];
    } else {
      state.playIndexHistory.push(payload);
      state.currentPLayIndex = payload;
    }
  },

  /**
   * @description: 切换audio播放源
   * @param {*} state
   * @return {*}
   */
  [types.UPDATE_AUDIO_SRC](state) {
    if (state.audioStateInterval) {
      clearInterval(state.audioStateInterval);
    }
    state.audio.src = `https://music.163.com/song/media/outer/url?id=${getters.currentPlaySongId(
      state
    )}.mp3`;
    state.audioStateInterval = setInterval(() => {
      if (state.audio.readyState == 4 && state.playStatus) {
        state.audio.play();
        clearInterval(state.audioStateInterval);
      }
    }, 200);
  },

  /**
   * @description: 切换播放模式
   * @param {*} state
   * @return {*}
   */
  [types.SWITCH_PLAY_MODE](state) {
    switch (state.playMode) {
      case "循环":
        state.playMode = "随机";
        break;
      case "随机":
        state.playMode = "单曲循环";
        break;
      case "单曲循环":
        state.playMode = "循环";
        break;
    }
  },

  /**
   * @description: 更新歌曲播放时间
   * @param {*} state
   * @param {*} payload
   * @return {*}
   */
  [types.UPDATE_AUDIO_CURRENT_TIME](state, payload) {
    state.audioCurrentTime = payload;
  },

  [types.UPDATE_AUDIO_INTERVAL](state, payload) {
    state.audioInterval = payload || clearInterval(state.audioInterval);
  },

  [types.UPDATE_PLAYLIST_SHOW](state, payload) {
    state.playlistShow = payload;
  },
};

const actions = {
  /**
   * @description: 获取歌曲信息
   * @param {*} commit
   * @param {*} ids 数组或字符串
   * @return {*}
   */
  getSongsInfo({ state, commit, dispatch, rootState }, data) {
    songDetailApi(String(data)).then((response) => {
      commit(types.ADD_PLAYLIST_SONGS_INFO, response["data"]["songs"]);
      dispatch("updateCurrentPlaySong", state.currentPLayIndex);
    });

    if (Array.isArray(data)) {
      data.forEach((element) => {
        dispatch("getSongLyric", element);
      });
    }
  },

  /**
   * @description: 获取歌词
   * @param {*} commit
   * @param {*} data
   * @return {*}
   */
  getSongLyric({ commit }, data) {
    songLyricApi(String(data)).then((response) => {
      commit(
        types.UPDATE_PLAYLIST_SONGS_LYRIC,
        response["data"]["lrc"]["lyric"]
      );
    });
  },

  /**
   * @description: 更新播放历史
   * 更新播放索引
   * 更新播放源
   * @param {*} commit
   * @param {*} data
   * @return {*}
   */
  updateCurrentPlaySong({ commit }, data) {
    commit(types.UPDATE_CURRENT_PLAY_INDEX, data);
    commit(types.UPDATE_AUDIO_SRC);
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
