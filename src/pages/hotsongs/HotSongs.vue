<template>
  <div class="hotsong">
    <div class="image">
      <div class="hotsong">
        <div class="pic"></div>
        <div class="desc">跟新日期:04月16日</div>
      </div>
    </div>
    <loading v-if="!hotList.length"></loading>
    <song-list v-else :songsList="hotList"></song-list>
  </div>
</template>

<script>
import SongList from 'components/list/SongList'
import Loading from 'components/loading/Loading'
import { reqHotMusic } from '@/api'
import { songsList } from '@/common/js/list'
export default {
  data () {
    return {
      hotList: []
    }
  },
  components: {
    SongList,
    Loading
  },
  methods: {
    async _creatHotMusic () {
      const result = await reqHotMusic()
      if (result.code === 200) {
        this.hotList = songsList(result.playlist.tracks.slice(0, 15), true)
      }
    }
  },
  created () {
    setTimeout(() => {
      this._creatHotMusic()
    }, 300)
  }
}
</script>

<style lang="stylus" scoped>
  .hotsong
    width: 100%
    height: 100%
    .image
      position: relative
      padding-top: 38.9%
      overflow: hidden;
      background: url(../../assets/images/hot_bg.jpg) no-repeat
      background-size: contain
      .hotsong
        position: absolute
        display: flex
        flex-direction: column
        justify-content: center
        left: 0
        top: 0
        padding-left: .2rem
        z-index: 2
        .pic
          width: 1.42rem
          height: .67rem
          background: url(../../assets/images/hot_icon.png) no-repeat
          background-position: -.24rem -.30rem
          background-size: 1.66rem .97rem
        .desc
          margin-top: .1rem
          color: hsla(0,0%,100%,.8)
          font-size: .12rem
          transform: scale(.91)
          transform-origin: left top
</style>
