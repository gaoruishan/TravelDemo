<template>
  <div class="container" @click="handleClose">
    <div class="wapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in gallaryImgs" :key="index">
          <img class="sw-img" :src="slide"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container {
    overflow inherit
  }

  .container {
    position fixed
    z-index 99
    display flex
    justify-content center
    align-items center
    top 0
    bottom 0
    left 0
    right 0
    background rgba(0, 0, 0, 0.8)
    .wapper {
      height: 0
      width: 100%
      padding-bottom: 100%
      .sw-img {
        width 100%
      }
      .swiper-pagination {
        color: #fff
        bottom: -1rem
      }

    }

  }
</style>
