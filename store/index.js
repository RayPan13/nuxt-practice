const state = () => {
    return {
        isNavActive: false,
    }
}

const actions = {
    updateNavActive(context, status) {
        context.commit('toggleNav', status)
    },
}

const mutations = {
    toggleNav(state, payload) {
        state.isNavActive = payload
    },
}

const getters = {}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
