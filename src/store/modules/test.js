import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  namespaced: true,
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    }
  }
})
