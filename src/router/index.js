import Vue from 'vue'
//  导入 vue-router 包
import Router from 'vue-router'
// 这个地方使用了@符号,就相当于./不能少好像是'./src/pages/home/Home'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
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
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // 这里的:id用于传值得
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 页面切换时滚到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
