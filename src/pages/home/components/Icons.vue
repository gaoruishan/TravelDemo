<template>
  <!--autoPlay设置自动播放时间,0表示不自动播放,continuous设置是否循环播放-->
  <mt-swipe class="icons" :auto="autoPlay" :continuous="false">
    <mt-swipe-item v-for="(page,i) of countPages" :key="i">
      <div class="icon-page">
        <div class="icons-img" v-for="item of page" :key="item.id">
          <img :src="item.imgUrl"/>
          <span>{{item.desc}}</span>
        </div>
      </div>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    iconList: Array
  },
  data () {
    return {
      autoPlay: 0
    }
  },
  // computed定义方法,模板中可以直接使用'变量'
  computed: {
    countPages () {
      const pages = []
      console.log(this.iconList)
      this.iconList.forEach((item, i) => {
        // 每8个一组
        const index = Math.floor(i / 8)
        // 是否包含下标
        if (!pages[index]) {
          pages[index] = []
        }
        pages[index].push(item)
      })
      return pages
    }

  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/mixins.styl"
  .icons {
    width 100%
    height 3.75rem
    .icon-page {
      display flex
      flex-direction row
      flex-wrap wrap
      .icons-img {
        display flex
        flex-direction column
        width 25%
        height 1.7rem
        justify-content center
        align-items center
        overflow hidden
        > img {
          width 1rem
          height 1rem
          margin .15rem
        }
        > span {
          width 100%
          text-align center
          font-size .32rem
          ellipse()
        }
      }
    }
  }
</style>
