import Vue from "vue";

const state = {

  // audio
  audio: null,
  audioInterval: null,

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
  updateAudioSrc(state) {
    state.audio.src = `https://music.163.com/song/media/outer/url?id=${getters.currentPlaySongId(state)}.mp3`
    state.audio.play()
  },
  updateAudioInterval(state, payload) {
    if (payload) {
      state.audioInterval = payload;
    } else {
      clearInterval(state.audioInterval);
    }
  },

  updatePlayListSongsAndId(state, payload) {
    if (payload) {
      payload.forEach((element) => {
        Vue.set(state.playListSongs, element.id, element);
        state.playListSongsId.push(element.id);
      });
    } else {
      state.playListSongs = {}
      state.playListSongsId = []
    }
  },
  switchPlayStatus(state) {
    state.playStatus = state.playStatus ? 0 : 1;
  },
  updateCurrentPLayIndex(state, payload) {
    state.currentPLayIndex = payload;
  },
  updateCurrentPlayTime(state, payload) {
    state.currentPlayTime = payload;
  },
  updateplayIndexHistory(state, payload) {
    if (payload == -1) {
      state.playIndexHistory.pop();
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

  updatePlaylistShow(state, payload) {
    state.playlistShow = payload
  }
};

const getters = {
  playSongDurationTime(state) {
    try {
      return state.playListSongs[getters.currentPlaySongId(state)]["dt"];
    } catch {
      return 0;
    }
  },
  // 当前歌曲id
  currentPlaySongId(state) {

    try {
      return state.playListSongsId[state.currentPLayIndex]
    } catch {
      return 0
    }
  },
  // 当前歌名
  currentPLaySongName(state) {

    if (state.playListSongs.hasOwnProperty(getters.currentPlaySongId(state))) {
      return state.playListSongs[getters.currentPlaySongId(state)]['name']
    } else {
      return ''
    }
  },
  playSongsCount(state) {
    return state.playListSongsId.length
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
