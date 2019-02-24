import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
// 异步时 actions: {},

export default new Vuex.Store({
  state,
  mutations,
  getters
})
