<template>
  <div class="container">
    <div @click="handleImg" class="img">
      <img :src="datas.bannerImg"/>
    </div>
    <div class="detail-info">
      <div class="title">{{datas.sightName}}</div>
      <div class="info-right">
        <span class="iconfont">&#xe692;</span>
        {{gallaryImgs}}
      </div>
    </div>
    <fade-animation>
      <gallary :gallaryImgs="datas.gallaryImgs" @close="gallaryClose"
               v-show="showGallary">
      </gallary>
    </fade-animation>
  </div>
</template>

<script>
import Gallary from '../../../common/gallary/Gallary'
import FadeAnimation from '../../../common/anim/FadeAnimation'

export default {
  name: 'DetailBanner',
  components: {
    FadeAnimation,
    Gallary
  },
  props: {
    datas: Object
  },
  data () {
    return {
      showGallary: false
    }
  },
  computed: {
    gallaryImgs () {
      if (this.datas.gallaryImgs) {
        return this.datas.gallaryImgs.length
      }
    }
  },
  methods: {
    gallaryClose () {
      this.showGallary = false
    },
    handleImg () {
      this.showGallary = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container {
    .img {
      height 0
      z-index 99
      padding-bottom 55%
      img {
        width 100%
      }
    }
    .detail-info {
      position relative
      display flex
      height 1rem
      top -1rem
      margin 0 .15rem
      flex-direction row
      justify-content space-between
      align-items center
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .title {
        color white
      }
      .info-right {
        text-align center
        height .5rem
        width 1.2rem
        line-height .5rem
        border-radius .5rem
        background: rgba(0, 0, 0, 0.5)
        color white
      }
    }
  }

</style>
