<template>
  <div class="recommend-container border-bottom">
    <span>热销推荐</span>
    <router-link tag="div" :to="'/detail/'+item.id" class="rem-item border-bottom"
                 v-for="item of recommendList" :key="item.id">
      <img :src="item.imgUrl"/>
      <div class="rem-item-right">
        <p class="title">{{item.title}}</p>
        <p class="content">{{item.desc}}</p>
        <div class="price">
          <p>¥69</p>起
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: Array
  },
  data () {
    return {}
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
      flex-direction row
      height 1.5rem
      padding .15rem
      align-items center
      > img {
        width 1.2rem
        height 1.2rem
      }
      .rem-item-right {
        margin 0 .2rem
        /*最小宽度 0 实现超出屏幕...*/
        min-width 0
        .title {
          /*width 70%*/
          font-size .32rem
          font-weight bold
          ellipse()
        }
        .content {
          margin .08rem 0
          color #888
          ellipse()
        }
        .price {
          display flex
          flex-direction row
          color #888
          > p {
            color red
            font-weight bold
            font-size .34rem
          }
        }
      }

    }
  }
</style>
