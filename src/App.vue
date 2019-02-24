<template>
  <div id="app">
    <!--缓存,exclude:去除指定页面-->
    <keep-alive :exclude="excludePage">
      <!--当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      excludePage: ['Detail']
    }
  }
}
</script>

<style>

</style>
