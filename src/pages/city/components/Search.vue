<template>
  <div class="search">
    <input class="input" placeholder="输入城市名或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
  .search {
    position fixed
    width 100%
    z-index 99
    horizontalCenter()
    margin-top $titleHeight - .1rem
    background-color $bgColor
    .input {
      width 90%
      height $size06
      margin $baseMargin
      background white
      border-radius .08rem
      text-align center
    }
  }

</style>
