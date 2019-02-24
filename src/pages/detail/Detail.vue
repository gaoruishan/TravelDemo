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
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then((res) => {
          if (res.status === 200 && res.data.data) {
            const data = res.data.data
            this.bannerData = data
            this.categoryList = data.categoryList
          }
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
