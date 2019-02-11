<template>
  <div class="title">
    <h2 class="text">{{titletext}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    titletext: String
  }
}
</script>

<style lang="stylus" scoped>
  .title
    height: .2rem
    width: 100%
    padding-bottom: .14rem
    .text
      position: relative
      padding-left: .1rem
      font-size: .17rem
      &:after
        content: " "
        position: absolute
        left: 0
        top: .01rem
        width: .02rem
        height: .17rem
        background-color: #d33a31
</style>
