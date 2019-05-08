// 使用 this.$store.getters.*** 相当于 computed计算属性，也相当于 filters
export default {
  // 方法有计算,逻辑操作
  doubleCity (state) {
    return state.city + '-' + state.city
  }
}
