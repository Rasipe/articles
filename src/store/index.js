import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const GET_ARTICLE = 'GET_ARTICLE'
export const SET_ARTICLE = 'SET_ARTICLE'
export const SET_MUTATION_ARTICLE = 'SET_MUTATION_ARTICLE'

export default new Vuex.Store({
  state: {
    article: {},
    file: {}
  },
  getters: {
    [GET_ARTICLE]: (state) => state.article
  },
  mutations: {
    [SET_MUTATION_ARTICLE] (state, value) {
      state.article = value
    }
  },
  actions: {
    [SET_ARTICLE] (store, value) {
      store.commit(SET_MUTATION_ARTICLE, value)
    },
    
  },
  modules: {
  }
})
