<template>
  <div>
    <div class="block"/>
    <div ref="wrapper">
      <div class="list">
        <div class="currentCity">
          <div class="cityTab">当前城市</div>
          <div class="cityBox">
            <div class="cityName">
              <span> {{this.$store.state.city}}</span>
            </div>
          </div>
        </div>
        <div class="hotCity">
          <div class="cityTab">热门城市</div>
          <div class="cityBox">
            <div class="cityName" @click="selectCity(item.name)" v-for="item of hotCities"
                 :key="item.id">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
        <div class="listCity" v-show="!keyword" v-for="(arr,key) of cities" :key="key">
          <div class="cityTab" :ref="key">{{key}}</div>
          <div class="alphabetList">
            <div class="alphabetCity border-bottom" @click="selectCity(item.name)"
                 v-for="item of arr"
                 :key="item.id">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alphabet">
      <div class="alp" @click="handleClick" v-for="(arr,key) of cities" :key="key">
        {{key}}
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'List',
  props: {
    hotCities: Array,
    cities: Object,
    keyword: String
  },
  methods: {
    handleClick (e) {
      let alp = e.target.innerText
      var element = this.$refs[alp][0]
      this.scroll.scrollToElement(element)
    },
    selectCity (city) {
      // 提交,调用方法
      this.$store.commit('changeCity', city)
      // 手动push切换路由
      this.$router.push('/')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BetterScroll(this.$refs.wrapper)
      console.log(this.$refs.wrapper)
    })
  }
}
</script>

<style lang="stylus" scoped>
  //<!--导入变量-->
  @import "~@styles/varibles.styl"
  .block {
    height $titleHeight * 2
  }

  .alphabet {
    position fixed
    right 0
    top $titleHeight* 3
    .alp {
      font-size .28rem
      font-weight bold
      padding .05rem $baseMargin
      color $bgColor
    }
  }

  .list {
    width 100%
    overflow: hidden
    position: absolute
    .cityTab {
      width 100%
      background-color $darkColor
      padding $baseMargin
    }
    .cityBox {
      display flex
      flex-direction row
      flex-wrap wrap
      width 100%
      .cityName {
        width 26%
        margin $baseMargin
        padding .1rem 0
        border .01rem solid $darkColor
        border-radius .08rem
        text-align center
      }
    }
    .listCity {
      .alphabetCity {
        padding .2rem $baseMargin
        background-color white
      }
    }
  }

</style>
