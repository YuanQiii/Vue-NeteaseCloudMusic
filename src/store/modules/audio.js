const state = {
  audio: null,
  audioInterval: null,
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
