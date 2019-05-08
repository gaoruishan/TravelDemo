<template>
  <div class="layout">
    <city-header></city-header>
    <city-search @searchKeyWord="getSearchKeyWord" :cities="cities"></city-search>
    <city-list :keyword="keyword" :hotCities="hotCities"
               :cities="cities">
    </city-list>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import axios from 'axios'
// 导入测试数据
import localData from '../../../static/city'

export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      keyword: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  methods: {
    handleData (res) {
      const data = res.data
      this.hotCities = data.hotCities
      this.cities = data.cities
    },
    getCity () {
      if (this.$store.state.test) {
        console.log('%s%o', '测试:', localData)
        this.handleData(localData)
        return
      }
      axios.get('/api/city.json')
        .then((res) => {
          console.log(res)
          this.handleData(res.data)
        })
    },
    getSearchKeyWord (keyword) {
      console.log(keyword)
      this.keyword = keyword
    }
  },
  created () {
    this.getCity()
  }
}
</script>

<style lang="stylus" scoped>
</style>
