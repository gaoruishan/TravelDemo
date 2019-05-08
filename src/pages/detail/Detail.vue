<template>
  <div class="container">
    <detail-header></detail-header>
    <detail-banner :datas="bannerData"></detail-banner>
    <detail-list :categoryList="categoryList"></detail-list>
    <div class="test" style="height: 20rem">
      世界说来烧烤少四级考试第三季度吉林省就当练手就当练手世界说来烧烤少四级考试第三季度吉林省就当练手就当练手世界说来烧烤少四级考试第三季度吉林省就当练手就当练手世界说来烧烤少四级考试第三季度吉林省就当练手就当练手世界说来烧烤少四级考试第三季度吉林省就当练手就当练手
    </div>
  </div>

</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
// 导入测试数据
import localData from '../../../static/detail'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerData: {},
      categoryList: []
    }
  },
  methods: {
    handleData (res) {
      const data = res.data
      this.bannerData = data
      this.categoryList = data.categoryList
    },
    getDetailInfo () {
      if (this.$store.state.test) {
        console.log('%s%o', '测试:', localData)
        this.handleData(localData)
        return
      }
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then((res) => {
          console.log(res)
          this.handleData(res.data)
        })
    }
  },
  mounted () {
    this.getDetailInfo()
  }

}
</script>

<style lang="stylus" scoped>

  .test {
    text-indent .2rem
    letter-spacing .1rem
    line-height .5rem
  }
</style>
