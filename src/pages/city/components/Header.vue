<template>
  <div class="header">
    <div @click="onBack" class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="title">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    onBack () {
      // 调用push返回指定路径
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  /* 别名导入 @import "~@styles/varibles.styl"*/
  //相对路径导入
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
  .header {
    position fixed
    width 100%
    z-index 99
    horizontalCenter()
    height $titleHeight
    align-items center
    background-color $bgColor
    .header-left {
      left $baseMargin
      position absolute
      line-height $titleHeight
      color white
    }
    .title {
      text-align center
      font-size .32rem
      color white
    }
  }
</style>
