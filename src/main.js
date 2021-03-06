// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// =========================第三方库=========================
// 引入路由
import router from './router'
// 引入Vuex
import store from './store'
// 引入fastclick
import fastClick from 'fastclick'
// 引入Mint库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// =========================项目lib库=========================
// 引入reset样式重置
import './lib/reset.css'
// 1像素边框问题
import './lib/border.css'
// 引入iconfont
import '@styles/iconfont.css'

Vue.config.productionTip = false
// 移动端部分手机300毫秒延迟问题
fastClick.attach(document.body)
Vue.use(Mint)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  // 对应根目录中index.html中div的id
  el: '#app',
  router,
  store,
  // App组件里使用router-view路由控制
  components: {App},
  // 引入模板标签即组件的名字app
  template: '<App/>'
})
