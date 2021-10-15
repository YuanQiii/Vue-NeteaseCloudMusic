const state = {
    playListSongs: {},

    playListSongsId: [1, 2, 3, 4, 5],
    currentPLayIndex: 0,

    currentPlayLink: {},
    playStatus: 0,
    playMode: '随机',
    playModeHistory: [],

    pipStatus: 0,
    volume: 0,

}

const mutations = {
    updatePlayListSongs(state, payload) {
        payload.forEach(element => {
            state.playListSongs[element.id] = element
            state.playListSongsId.push(element.id)
        })
    },
    switchPlayStatus(state) {
        state.playStatus = state.playStatus ? 0 : 1
    },
    updateCurrentPLayIndex(state, payload) {
        state.currentPLayIndex = payload
    },
    updatePlayModeHistory(state, payload) {
        if (payload == -1) {
            state.playModeHistory.pop()
        } else {
            state.playModeHistory.push(payload)
        }
    }



}

const getters = {

}

const actions = {

}


// 最后统一导出
export default {
    state,
    getters,
    actions,
    mutations
}