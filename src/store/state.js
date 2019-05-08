/* 用于打包测试,加载本地数据 */
const test = true
let defaultCity = '青岛'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}
// 使用 this.$store.state.***
export default {
  city: defaultCity,
  test
}
