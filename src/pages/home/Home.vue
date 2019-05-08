<template>
  <div>
    <!--模板中使用小写,对应的HomeHeader-->
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <week-recommend :weekendList="weekendList"></week-recommend>
  </div>

</template>

<script>
// 引入其他组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import WeekRecommend from './components/WeekRecommend'
// 导入axios请求
import axios from 'axios'

// 导入测试数据
import localData from '../../../static/index'

export default {
  name: 'Home',
  // 使用引入的组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    WeekRecommend
  },
  data () {
    return {
      lastCity: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  computed: {
    city () {
      return this.$store.state.city
    }
  },
  methods: {
    // 处理数据
    handleData (res) {
      if (res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },
    getHomeInfos () {
      if (this.$store.state.test) {
        console.log('%s%o', '测试:', localData)
        this.handleData(localData)
        return
      }
      // 首页请求数据,这样会找到/static目录下index.json文件,来模拟数据,参数需要再加一个{},get拼接URL
      axios.get('/api/index.json')
        .then((res) => {
          console.log(res)
          this.handleData(res.data)
        })
    }
  },
  mounted () {
    this.lastCity = this.city
    console.log(this.city)
    this.getHomeInfos()
  },
  activated () {
    console.log(this.city)
    if (this.lastCity !== this.city) {
      this.getHomeInfos()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
