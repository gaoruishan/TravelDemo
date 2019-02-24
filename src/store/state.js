let defaultCity = '青岛'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}
// 使用 this.$store.state.***
export default {
  city: defaultCity
}
