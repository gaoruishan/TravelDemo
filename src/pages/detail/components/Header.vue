<template>
  <div class="header">
    <div class="header-abs" @click="handleClose" v-show="scrollStatus" :style="headerOpacityAsb">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-fixed" v-show="!scrollStatus" :style="headerOpacity">
      <div class="title">详情页</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      scrollStatus: Boolean,
      headerOpacity: {
        opacity: 0
      },
      headerOpacityAsb: {
        opacity: 1
      }
    }
  },
  methods: {
    handleScroll () {
      const offSet = document.documentElement.scrollTop
      const start = 50
      const end = 150
      if (offSet >= start) {
        let opacity = offSet / (end - start) > 1 ? 1 : offSet / (end - start)
        console.log(opacity)
        this.headerOpacity = {
          opacity
        }
        this.scrollStatus = false
      } else {
        let opacity = offSet / start > 1 ? 0 : 1 - offSet / start
        this.headerOpacityAsb = {
          opacity
        }
        this.scrollStatus = true
      }
    },
    handleClose () {
      this.$router.push('/')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/varibles.styl"
  .header {
    .header-abs {
      position absolute
      height $titleHeightSmall
      line-height $titleHeightSmall
      width $titleHeightSmall
      text-align center
      border-radius $titleHeightSmall
      color white
      margin $baseMargin
      background rgba(0, 0, 0, 0.5)
    }
    .header-fixed {
      position fixed
      width 100%
      height $titleHeight
      background-color $bgColor
      text-align center
      z-index 99
      .title {
        font-size .32rem
        color white
        height $titleHeight
        line-height $titleHeight
      }
    }
  }
</style>
