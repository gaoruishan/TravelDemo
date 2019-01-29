<template>
  <div class="home-swiper">
    <!--不显示小圆点-->
    <!--<swiper :options="swiperOption">-->
    <!--<swiper-slide  v-for="(slide, index) in swiperSlides" :key="index">-->
    <!--<img class="swiper-img" :src="slide" />-->
    <!--</swiper-slide>-->
    <!--<div class="swiper-pagination" slot="pagination"></div>-->
    <!--</swiper>-->

    <!--可以显示-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in swiperSlides" :key="index">
        <img :src="item"/>
      </mt-swipe-item>
      <!--<mt-swipe-item>2</mt-swipe-item>-->
      <!--<mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          loop: true
        }
      },
      swiperSlides: ['http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg',
        'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/e9b6ede83785c7673eb1bcda5a78f123.jpg_750x200_0e6d0de9.jpg']
    }
  }
}
</script>
<!--保持图片宽高比显示-->
<style lang="stylus" scoped>
  .home-swiper {
    width: 100%
    height 2.1rem
  }
  //无法改变小圆点颜色
  .mint-swipe-indicator {
    background blue
  }
</style>
