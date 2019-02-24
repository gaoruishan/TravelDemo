<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <!--跳转城市选择界面-->
    <router-link to="/city">
      <div class="header-right">{{city}}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  computed: {
    city () {
      return this.$store.state.city
    }
  },
  mounted () {
    // 直接调用 不能加doubleCity()
    console.log(this.$store.getters.doubleCity)
  }
}
</script>
<!--scoped只对当前组件有效-->
<!--移动端布局采用rem,设计稿宽750 2倍稿; 在rest.css中使用font-size=50px; 1rm在html中对应50px;
 结论: 对应86px的尺寸==0.86rem
 -->
<!--省略写法~@styles自定义别名 代表src/assets/styles目录下的 -->
<style lang="stylus" scoped>
  @import "~@styles/varibles.styl"
  .header {
    position fixed
    top 0
    z-index 99
    width 100%
    display flex
    flex-direction row
    justify-content center
    align-items center
    height $titleHeight
    background-color $bgColor
    color white
    .header-left {
      margin $baseMargin
    }
    //height和line-height 组合使用 垂直居中
    .header-input {
      flex 1
      height 0.6rem
      line-height 0.6rem
      padding 0 $baseMargin
      background-color white
      border-radius 0.12rem
      color $darkColor
    }
    .header-right {
      margin $baseMargin
      color white
    }
  }

</style>
