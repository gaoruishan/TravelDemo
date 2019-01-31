<template>
  <div class="recommend-container border-bottom">
    <span>周末去哪儿</span>
    <div class="rem-item border-bottom" v-for="item of weekendList" :key="item.id">
      <img :src="item.imgUrl"/>
      <div class="rem-item-right">
        <p class="title">{{item.title}}</p>
        <p class="content">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeekRecommend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      recommendList: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/mixins"
  .recommend-container {
    display flex
    flex-direction column
    > span {
      padding .15rem
      background-color #eaeaea
    }
    .rem-item {
      display flex
      flex-direction column
      margin 0 0 0.1rem 0
      > img {
        width 100%
        height 2rem
      }
      .rem-item-right {
        margin .2rem
        /*最小宽度 0 实现超出屏幕...*/
        min-width 0
        .title {
          /*width 70%*/
          font-size .32rem
          ellipse()
        }
        .content {
          margin .08rem 0
          color #888
        }
      }

    }
  }
</style>
