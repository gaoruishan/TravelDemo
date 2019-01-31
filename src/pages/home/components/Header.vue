<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">{{city}}
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
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
    display flex
    flex-direction row
    justify-content center
    align-items center
    height 0.86rem
    background-color $bgColor
    color white
    .header-left {
      margin 0.15rem
    }
    //height和line-height 组合使用 垂直居中
    .header-input {
      flex 1
      height 0.6rem
      line-height 0.6rem
      padding 0 0.15rem
      background-color white
      border-radius 0.12rem
      color #ccc
    }
    .header-right {
      margin 0.15rem
    }
  }

</style>
