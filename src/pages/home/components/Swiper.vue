<template>
  <div class="home-swiper">
    <mt-swipe :auto="autoPlay" v-if="showSwipe" >
      <mt-swipe-item v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      autoPlay: 3000
    }
  },
  computed: {
    showSwipe () {
      return this.swiperList.length
    }
  }
}
</script>
<!--保持图片宽高比显示-->
<style lang="stylus" scoped>
  @import "~@styles/varibles.styl"
  .home-swiper {
    width: 100%
    height 2.1rem
    margin-top $titleHeight
    .swiper-img {
      width: 100%
    }
  }

  //无法改变小圆点颜色
  .mt-swipe >>> .mint-swipe-indicator.is-active {
    background blue !important
  }
</style>
