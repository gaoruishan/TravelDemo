
// this.$store.commit('方法的名称', '按需传递唯一的参数')
export default {
  // 第一参数自带的state
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}
