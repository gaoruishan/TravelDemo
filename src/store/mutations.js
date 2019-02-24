
// this.$store.commit('方法的名称', '按需传递唯一的参数')
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}
