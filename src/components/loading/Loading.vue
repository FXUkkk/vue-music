<template>
  <div class="loading-wrapper">
    <div class="loading">
      <img width="24" height="24" src="./loading.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .loading-wrapper
    position: relative
    width: 100%
    height: .4rem
    .loading
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
</style>
