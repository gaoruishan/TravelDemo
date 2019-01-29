import Vue from 'vue'
//  导入 vue-router 包
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
// 手动安装Router
Vue.use(Router)
// 创建路由对象并默认导出
export default new Router({
  // 定义多个路由规则
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
