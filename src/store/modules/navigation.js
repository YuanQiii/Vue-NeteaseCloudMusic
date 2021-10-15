const state = {
    currentPageName: 'Recommend'
}

const mutations = {
    changeCurrentPageName(state, payload) {
        state.currentPageName = payload
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