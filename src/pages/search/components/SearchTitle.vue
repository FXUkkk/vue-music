<template>
  <div class="hot-search-title">{{searchTitle}}</div>
</template>

<script>
export default {
  props: {
    searchTitle: String
  }
}
</script>

<style lang="stylus" scoped>
  .hot-search-title
    font-size: .12rem
    line-height: .12rem
    color: #666
</style>
