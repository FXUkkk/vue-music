<template>
  <div class="player" v-show="playId && playsong[0].picUrl">
    <div class="player-wrapper">
      <div class="background">
        <div class="filter"></div>
        <img width="100%" height="100%" :src="playsong[0].picUrl" alt="">
      </div>
      <div class="middle">
        <div @click.stop="player" class="img-wrapper">
          <div class="img" :class="animation">
            <img :src="playsong[0].picUrl" alt="">
          </div>
          <div  v-show="play" class="icon"><span class="iconfont">&#xe760;</span></div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-top">
          <h3 class="title">{{playsong[0].title}}</h3>
          <h3 class="des">{{playsong[0].artists}}</h3>
        </div>
        <div class="bottom-bottom">
          <span class="left border" @click.stop="setsong">打开</span>
          <span class="right">下载</span>
        </div>
      </div>
    </div>
    <audio ref="audio" :src="playId" autoplay></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      currentTime: 0,
      play: false
    }
  },
  computed: {
    ...mapGetters(['playId', 'playsong']),
    animation () {
      return this.play ? 'play paused' : 'play'
    }
  },
  methods: {
    ...mapMutations({
      setsongsss: 'RECEIVE_REC_ID'
    }),
    setsong () {
      this.setsongsss(null)
    },
    player () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.play = false
      } else {
        this.$refs.audio.pause()
        this.play = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .player
    .player-wrapper
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      z-index: 150
      .background
        position: absolute
        left: -50%
        top: -50%;
        width: 300%
        height: 300%
        z-index: -1
        opacity: 0.8
        filter: blur(.3rem)
        .filter
          position: absolute
          width: 100%
          height: 100%
          background: black
          opacity: 0.6
      .middle
        display: flex
        align-items: center
        position: fixed
        width: 100%
        top: 0
        bottom: 1.7rem
        white-space: nowrap
        font-size: 0
        .img-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          width: 100%
          height: 0
          padding-top: 80%
          .img
            position: absolute
            left: 10%
            top: 0
            width: 80%
            height: 100%
            &.play
              animation: rotate 10s linear infinite
            &.paused
              animation-play-state: paused
            &:before
              content: " "
              position: absolute
              left: 0
              right: 0
              top: 0
              bottom: 0
              z-index: 2
              background: url(//s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48) no-repeat
              background-size: contain
            img
              position: absolute
              left: 20%
              top: 20%
              width: 60%
              height: 60%
              border-radius: 50%
          .icon
            position: absolute
            width: .5rem
            height: .5rem
            left: 50%
            top: 50%
            transform: translate(-50%,-50%)
            z-index: 10
            text-align: center
            .iconfont
              font-size: .4rem
              color: rgb(254, 254, 254)
              line-height: .5rem
      .bottom
        position: absolute
        left: 0
        bottom: 0
        display: flex
        align-items: center
        flex-flow: column
        color: rgb(254, 254, 254)
        padding: .12rem 0 .15rem 0
        width: 100%
        .bottom-top
          margin-bottom: 1.3rem
          text-align: center
          .title
            font-size: .18rem
            line-height: .4rem
          .des
            font-size: .16rem
            color: rgba(255, 255, 255, 0.6)
        .bottom-bottom
          display: flex;
          padding: 0 .1rem
          width: 90%
          .left
            display: inline-block
            height: .4rem
            line-height: .4rem
            padding: 0 .06rem
            border-radius: .4rem
            font-size: .18rem
            text-align: center
            box-sizing: border-box
            flex: 1 1 auto
            width: 1%
            color: #d33a31
            &.border
              &:before
                border-color: #d33a31
                border-radius: .4rem
          .right
            display: inline-block
            height: .4rem
            flex: 1 1 auto
            width: 1%
            margin-left: 10px
            line-height: .4rem
            padding: 0 .06rem
            border-radius: .4rem
            font-size: .18rem
            background-color: #d33a31
            text-align: center
            box-sizing: border-box
  @keyframes rotate
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
</style>
