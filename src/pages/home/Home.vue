<template>
  <div class="main">
    <navigation titletext="推荐歌单"></navigation>
    <rec-songs :recommendSongs="recommendSongs"></rec-songs>
    <navigation titletext="最新音乐"></navigation>
    <loading v-if="!songsList.length"></loading>
    <song-list v-else :songsList="songsList"></song-list>
    <home-footer></home-footer>
  </div>
</template>

<script>
import Loading from 'components/loading/Loading'
import { reqecommendSongs, reqNewMusic } from '@/api'
import { createdRecommendSong } from '@/common/js/recommend'
import Navigation from './components/Navigation'
import RecSongs from './components/RecSongs'
import SongList from 'components/list/SongList'
import HomeFooter from './components/Footer'
export default {
  data () {
    return {
      songsList: [],
      recommendSongs: []
    }
  },
  components: {
    Navigation,
    RecSongs,
    SongList,
    HomeFooter,
    Loading
  },
  methods: {
    async _getRecommendSong () {
      const result = await reqecommendSongs()
      if (result.code === 200) {
        this.recommendSongs = this._chaRecommendSong(result.result.slice(0, 6))
      }
    },
    async _reqNewMusic () {
      const result = await reqNewMusic()
      if (result.code === 200) {
        this.songsList = this._charSonglist(result.result)
      }
    },
    _charSonglist (list) {
      let songs = []
      list.forEach(song => {
        let artistsName = ''
        let names = []
        song.song.artists.forEach(el => {
          names.push(el.name)
        })
        artistsName = names.join('/')
        let obj = {
          id: song.id,
          title: song.name,
          artists: artistsName,
          album: song.song.album.name,
          alias: song.song.alias[0]
        }
        songs.push(obj)
      })
      return songs
    },
    _chaRecommendSong (list) {
      let ret = []
      list.forEach(item => {
        if (item.id) {
          ret.push(createdRecommendSong(item))
        }
      })
      return ret
    }
  },
  created () {
    this._getRecommendSong()
    setTimeout(() => {
      this._reqNewMusic()
    }, 300)
  }
}
</script>

<style lang="stylus" scoped>
  .main
    position relative
    padding-top: .3rem
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
