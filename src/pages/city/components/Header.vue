<template>
  <div class="header">
   城市选择
   <router-link to="/">
     <div class="iconfont header-back">&#xe624;</div>
   </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles_alias/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background: $bgColor
    font-size: .32rem
    .header-back
      width: .64rem
      text-align: center
      position: absolute
      top: 0
      left: 0
      font-size: .4rem
      color: #fff
</style>
