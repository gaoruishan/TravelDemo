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
    getCity () {
      axios.get('/api/city.json')
        .then((res) => {
          console.log(res)
          if (res.status === 200 && res.data) {
            const data = res.data.data
            this.hotCities = data.hotCities
            this.cities = data.cities
          }
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
