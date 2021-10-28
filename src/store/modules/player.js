/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-10-28 17:52:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\modules\player.js
 */
import Vue from "vue";

const state = {

  // audio
  audio: null,
  audioInterval: null,
  audioStateInterval: null,

  // 歌曲列表
  playListSongs: {},
  playListSongsId: [],

  // 当前播放歌曲列表索引
  currentPLayIndex: 0,

  // 当前播放歌曲时间
  currentPlayTime: 0,

  // 播放歌曲索引历史
  playIndexHistory: [],

  currentPlayLink: {},
  playStatus: 0,
  playMode: "随机",

  volume: 0,

  // 播放列表
  playlistShow: false
};

const mutations = {
  initAudioObject(state) {
    state.audio = new Audio();
  },
  updateAudioConfig(state, payload) {
    for (const key in payload) {
      if (Object.hasOwnProperty.call(payload, key)) {
        state.audio[key] = payload[key];
      }
    }
  },

  updateAudioInterval(state, payload) {
    if (payload) {
      state.audioInterval = payload;
    } else {
      clearInterval(state.audioInterval);
    }
  },


  /**
   * @description: 更新歌单列表
   * @param {*} state
   * @param {*} payload 类型为array
   * @return {*}
   */
  updatePlayListSongsAndId(state, payload) {

    let addSongs = []
    if (Array.isArray(payload)) {
      addSongs = payload
    } else {
      addSongs.push(payload)
    }

    if (addSongs) {
      addSongs.forEach((element) => {
        if (!state.playListSongs.hasOwnProperty(element.id)) {
          Vue.set(state.playListSongs, element.id, element);
          state.playListSongsId.push(element.id);
        } else {
          console.log('已添加到播放列表');
        }
      });
    } else {
      state.playListSongs = {}
      state.playListSongsId = []
    }
  },
  switchPlayStatus(state) {
    if (state.playStatus) {
      state.playStatus = 0
      state.audio.pause()
    } else {
      state.playStatus = 1
      state.audio.play()
    }
  },


  /**
   * @description: 切换当前歌曲索引，并切换audio播放源
   * @param {*} state
   * @param {*} payload
   * @return {*}
   */
  updateCurrentPLayIndex(state, payload) {
    state.currentPLayIndex = payload;
    mutations.updateAudioSrc(state)
  },

  /**
   * @description: 切换audio播放源
   * @param {*} state
   * @return {*}
   */
  updateAudioSrc(state) {
    if (state.audioStateInterval) {
      clearInterval(state.audioStateInterval)
    }
    state.audio.src = `https://music.163.com/song/media/outer/url?id=${getters.currentPlaySongId(state)}.mp3`

    state.audioStateInterval = setInterval(() => {
      if (state.audio.readyState == 4) {
        state.audio.play()
        clearInterval(state.audioStateInterval)
      }
    }, 100);
  },

  /**
   * @description: 更新播放歌曲索引历史，切换当前歌曲索引
   * @param {*} state
   * @param {*} payload
   * @return {*}
   */
  updateplayIndexHistory(state, payload) {
    if (payload == -1) {
      mutations.updateCurrentPLayIndex(state, state.playIndexHistory.pop())
    } else {
      state.playIndexHistory.push(payload);
    }
  },

  switchPlayMode(state) {
    switch (state.playMode) {
      case '循环':
        state.playMode = '随机'
        break;
      case '随机':
        state.playMode = '单曲循环'
        break;
      case '单曲循环':
        state.playMode = '循环'
        break;
    }
  },
  updateCurrentPlayTime(state, payload) {
    state.currentPlayTime = payload;
  },
  updatePlaylistShow(state, payload) {
    state.playlistShow = payload
  }
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
      return state.playListSongsId[state.currentPLayIndex]
    } catch {
      return 0
    }
  },

  /**
   * @description: 当前歌名
   * @param {*} state
   * @return {*}
   */
  currentPLaySongName(state) {
    if (state.playListSongs.hasOwnProperty(getters.currentPlaySongId(state))) {
      return state.playListSongs[getters.currentPlaySongId(state)]['name']
    } else {
      return ''
    }
  },

  /**
   * @description: 歌曲数
   * @param {*} state
   * @return {*}
   */
  playSongsCount(state) {
    return state.playListSongsId.length
  },

  /**
   * @description: 歌曲播放历史数组长度
   * @param {*} state
   * @return {*}
   */
  playIndexHistoryCount(state) {
    return state.playIndexHistory.length
  }
};

const actions = {};

// 最后统一导出
export default {
  state,
  getters,
  actions,
  mutations,
};
