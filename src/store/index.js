import Vue from 'vue'
import Vuex from 'vuex'
// 主要有三个重要部分:state变量状态相当于组件中的data
// mutations提供方法相当于组件中method
// getters提供计算功能相当于组件中compute
// 为了书写规范,将三部分分离开
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
// 异步时 actions: {},
// 只要一个导出对象new Vuex.Store,引入的  state,mutations,getters都是在'当前'对象里的
export default new Vuex.Store({
  state,
  mutations,
  getters
})
