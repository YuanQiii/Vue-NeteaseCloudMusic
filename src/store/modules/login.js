const state = {
  loginWindowShow: false,
};

const mutations = {
  updateLoginWindowShow(state, payload) {
    state.loginWindowShow = payload;
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
