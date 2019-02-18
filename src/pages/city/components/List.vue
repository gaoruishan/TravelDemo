<template>
  <div>
    <div class="block"/>
    <div ref="wrapper">
      <div class="list">
        <div class="currentCity">
          <div class="cityTab">当前城市</div>
          <div class="cityBox">
            <div class="cityName">北京</div>
          </div>
        </div>
        <div class="hotCity">
          <div class="cityTab">热门城市</div>
          <div class="cityBox">
            <div class="cityName" v-for="item of hotCities" :key="item.id">{{item.name}}</div>
          </div>
        </div>
        <div class="listCity" v-for="(arr,key) of cities" :key="key">
          <div class="cityTab" :ref="key">{{key}}</div>
          <div class="alphabetList">
            <div class="alphabetCity border-bottom" v-for="item of arr" :key="item.id">
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
    cities: Object
  },
  methods: {
    handleClick (e) {
      let alp = e.target.innerText
      var element = this.$refs[alp][0]
      this.scroll.scrollToElement(element)
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .block {
    height $titleHeight * 2 - .1rem
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
    overflow: hidden
    position: absolute
    width 100%
    .cityTab {
      width 100%
      background-color $darkColor
      padding $baseMargin
    }
    .cityBox {
      display flex
      flex-direction row
      flex-wrap wrap
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
