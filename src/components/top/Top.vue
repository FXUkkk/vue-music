<template>
  <div class="top">
    <div class="top-wrapper">
      <div class="top-content">
        <img class="img" src="./logo.svg" alt="">
        <div class="top-right border">
          <span>下载APP</span>
        </div>
      </div>
      <div class="bar">
        <tab bar-active-color="#d43c33" active-color="#d43c33" :line-width=2>
          <tab-item selected @on-item-click="setTab('Home')">推荐音乐</tab-item>
          <tab-item @on-item-click="setTab('HotSongs')">热歌榜</tab-item>
          <tab-item @on-item-click="setTab('Search')">搜索</tab-item>
        </tab>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem
  },
  methods: {
    setTab (val) {
      this.$parent.tabName = val
    }
  }
}
</script>

<style lang="stylus" scoped>
  .top
    height: 1.08rem
    .top-wrapper
      position: fixed
      z-index: 99
      top: 0
      left: 0
      width: 100%
      box-sizing: border-box
      .top-content
        display: flex
        height: .64rem
        background: #d43c33
        align-items: center
        justify-content: space-between
        padding: 0 .1rem
        .img
          width: 1.42rem
          height: .25rem
        .top-right
          position: relative
          top: 0
          right: 0
          font-size: 0
          &.border
            &:before
              border-color: #fff
              border-radius: 37%/100%
          span
            line-height: .3rem
            height: .3rem
            color: #fff
            font-size: .15rem
            padding: 0 .1rem
      .vux-tab
        height: .36rem
        .vux-tab-item
          font-size: .15rem
</style>
