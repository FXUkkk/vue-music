<template>
  <div class="footer">
    <div class="content">
      <div class="title">
      <img src="./foot.svg" alt="">
      </div>
      <div class="desc border">
        打开APP，发现更多好音乐 >
      </div>
      <p class="xxxxs">网易公司版权所有©1997-2018   杭州乐读科技有限公司运营</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .footer
    position: relative
    background: url(footbg.png) no-repeat
    background-size: contain
    padding-bottom: 53.3%
    .content
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: 0
      text-align: center
      z-index: 1
      .title
        padding-top: 16.9%
        img
          display: block
          margin: 0 auto
          width: 2.3rem
          height: .44rem
      .desc
        line-height: .38rem
        margin: .15rem .37rem .05rem
        font-size: .16rem
        color: #d33a31
        &.border
            &:before
              border-color: #d33a31
              border-radius: .38rem
      .xxxxs
        color: #888
        font-size: .12rem
        line-height: .16rem
        transform: scale(.75)
</style>
