import Vue from 'vue';

const state = {

  // 歌曲列表
  playListSongs: {},
  playListSongsId: [346089, 346576],

  // 当前播放歌曲id
  currentPLayIndex: 346089,

  // 当前播放歌曲时间
  currentPlayTime: 0,

  // 播放歌曲索引历史
  playIndexHistory: [],


  currentPlayLink: {},
  playStatus: 0,
  playMode: "随机",

  pipStatus: 0,
  volume: 0,
};

const mutations = {
  updatePlayListSongsAndId(state, payload) {
    payload.forEach((element) => {
      Vue.set(state.playListSongs, element.id, element)
      state.playListSongsId.push(element.id);
    });
  },
  switchPlayStatus(state) {
    state.playStatus = state.playStatus ? 0 : 1;
  },
  updateCurrentPLayIndex(state, payload) {
    state.currentPLayIndex = payload;
  },
  updateCurrentPlayTime(state, payload) {
    state.currentPlayTime = payload
  },
  updateplayIndexHistory(state, payload) {
    if (payload == -1) {
      state.playIndexHistory.pop();
    } else {
      state.playIndexHistory.push(payload);
    }
  },
};

const getters = {};

const actions = {};

// 最后统一导出
export default {
  state,
  getters,
  actions,
  mutations,
};
