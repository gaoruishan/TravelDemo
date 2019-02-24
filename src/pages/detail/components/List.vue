<template>
  <div class="container">
    <div v-for="(item,index) in categoryList" :key="index">
      <div class="item">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <!--判断是否有数据,调用自己<datail-list />递归-->
      <div v-if="item.children" class="item-children">
        <datail-list :categoryList="item.children"></datail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatailList',
  props: {
    categoryList: Array
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/varibles.styl"
  .item {
    height $titleHeightSmall
    .item-icon {
      position: relative
      left: .06rem
      top: .06rem
      display: inline-block
      width: .3rem
      height: .3rem
      margin-right: .1rem
      background url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -.45rem no-repeat
    }
  }

  .item-children {
    padding 0 .3rem
  }
</style>
