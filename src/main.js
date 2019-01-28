// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 对应根目录中index.html中div的id
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
