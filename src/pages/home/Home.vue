<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <!--<div>home</div>-->
      <!--路由跳转 不用a标签-->
      <!--<router-link to="/list">列表页</router-link>-->
      <!--模板中使用小写,对应的HomeHeader-->
    </div>

</template>

<script>
// 引入其他组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  // 使用引入的组件
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="stylus" scoped>

</style>
