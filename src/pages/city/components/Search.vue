<template>
  <div class="search">
    <div class="search-input">
      <input class="input" v-model="keyword" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-container" v-show="keyword">
      <div class="alphabetList">
        <div class="alphabetCity border-bottom" @click="selectCity(item.name)"
             v-for="(item,index) in arr"
             :key="index">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      arr: [],
      timer: null
    }
  },
  methods: {
    selectCity (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  // watch是对data中的keyword监听变化
  watch: {
    keyword () {
      // 传个父类
      this.$emit('searchKeyWord', this.keyword)
      if (!this.keyword) {
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.arr = []
      this.timer = setTimeout(() => {
        console.log(this.keyword)
        for (let i in this.cities) { // 先遍历对象
          // 再遍历数组
          this.cities[i].forEach((val) => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              this.arr.push(val)
            }
          })
        }
      }, 200)
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/varibles.styl"
  .search {
    position absolute
    width 100%
    .search-input {
      position fixed
      width 100%
      z-index 50
      text-align center
      margin-top $titleHeight
      background-color $bgColor
      .input {
        width 90%
        height $size06
        margin $baseMargin
        background white
        border-radius .08rem
        text-align center
      }
    }
    .search-container {
      width 100%
      z-index 1
      overflow: hidden
      position: absolute
      top $titleHeight* 2
      background-color green
      .alphabetCity {
        padding .2rem $baseMargin
        background-color white
      }
    }
  }

</style>
