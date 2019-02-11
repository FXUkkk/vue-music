<template>
  <div class="playlist">
    <loading :show="loadingShow"></loading>
    <div v-if="!loadingShow" class="playlist-wrapper">
      <div class="playlist-content">
        <div class="content">
          <img :src="song.picUrl" alt="">
          <span class="iconfont">&#xe681;&nbsp;{{song.playCount}}</span>
          <span class="songlist">歌单</span>
        </div>
        <div class="desss"><h2>{{listDetail.name}}</h2></div>
      </div>
      <div class="bg">
        <img width="100%" height="100%" :src="song.picUrl" alt="">
      </div>
    </div>
    <div v-if="!loadingShow" class="label-wrapper">
      <div class="lable-top">
        标签：<span v-for="(tag, index) of listDetail.tags" :key="index" class="tag border">{{tag}}</span></div>
      <div class="lable-bottom">简介：{{listDetail.des}}</div>
    </div>
    <div v-if="!loadingShow" class="title">歌曲列表</div>
    <song-list v-if="!loadingShow" :songsList="listDetail.music"></song-list>
  </div>
</template>

<script>
import { Loading } from 'vux'
import SongList from 'components/list/SongList'
import { mapGetters } from 'vuex'
import { reqecommendSongsList } from '../api'
import { songsList } from '../common/js/list'
export default {
  data () {
    return {
      listDetail: {},
      loadingShow: true
    }
  },
  components: {
    SongList,
    Loading
  },
  computed: {
    ...mapGetters(['song'])
  },
  methods: {
    _check () {
      if (!this.song.id) {
        this.$router.push('/')
        return
      }
      this._getSongDetail()
    },
    async _getSongDetail () {
      const result = await reqecommendSongsList(this.song.id)
      if (result.code === 200) {
        this.loadingShow = false
        let result2 = songsList(result.playlist.tracks.slice(0, 25))
        this.listDetail = {
          tags: result.playlist.tags,
          des: result.playlist.description,
          music: result2,
          name: result.playlist.name,
          imgUrl: result.playlist.coverImgUrl
        }
      }
    }
  },
  created () {
    this._check()
  }
}
</script>

<style lang="stylus" scoped>
  .playlist
    min-height: 100%
    background-color: #f8f8f8
    .playlist-wrapper
      position relative
      padding: .3rem .1rem .3rem .15rem
      overflow: hidden
      .playlist-content
        font-size: 0
        position relative
        display: flex
        z-index: 2
        .content
          width: 1.26rem
          flex: 0 0 1.26rem
          position relative
          img
            width: 100%
          &:after
            content: " "
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: .2rem
            z-index: 3
            background-image: linear-gradient(90deg,transparent,rgba(0,0,0,.2))
          .songlist
            position: absolute
            z-index: 3
            top: .1rem
            left: 0
            height: .17rem
            width: .34rem
            color: #fff;
            font-size: .09rem
            text-align: center
            line-height: .17rem
            background-color: rgba(217, 48, 48, .8)
            border-top-right-radius: .17rem
            border-bottom-right-radius: .17rem
          span
            position: absolute
            right: .05rem
            top: .05rem
            z-index: 5
            font-size: .12rem
            color: #fff
        .desss
          margin-left: .16rem
          flex: 1
          h2
            padding-top: .01rem
            font-size: .17rem
            line-height: 1.3
            color: #fefefe
            height: .44rem
      .bg
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 1
        filter: blur(0.2rem)
        transform: scale(1.5)
    .label-wrapper
      padding: .1rem .1rem .1rem .15rem
      .lable-top
        font-size: .14rem
        margin-bottom: .1rem
        line-height: .2rem
        color: #666
        .tag
          display: inline-block
          margin-right: .1rem
          padding: .01rem .08rem
          font-size: .12rem
          &.border
            &:before
              border-color: #666
              border-radius: .22rem
      .lable-bottom
        font-size: .14rem
        line-height: .19rem
    .title
      height: .23rem
      line-height: .23rem
      padding: 0 .1rem
      font-size: .14rem
      color: #666
      background-color: #eeeff0
</style>
