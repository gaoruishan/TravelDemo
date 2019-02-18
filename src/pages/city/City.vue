<template>
  <div class="layout">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities">
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
      cities: {}
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
    }
  },
  created () {
    this.getCity()
  }
}
</script>

<style lang="stylus" scoped>
</style>
