<template>
  <div class="songlist">
    <div
      @click="playSong(song.id)"
      v-for="song of songsList"
      :key="song.id"
      :class="!song.rank?'border-bottom':''"
      class="songs"
    >
      <p :class="song.color?'rank':'dark'" v-if="song.rank">{{song.rank}}</p>
      <div :class="song.rank?'border-bottom':''" class="left">
        <div class="text">
          <h2 class="title">{{song.title}}</h2>
          <h2 v-if="song.alias" :class="song.rank?'darkk':''" class="name">({{song.alias}})</h2>
        </div>
        <p class="artists">
          <span class="iconfont">&#xe600;</span> {{song.artists}}-{{song.album}}
        </p>
      </div>
      <div :class="song.rank?'border-bottom':''" class="right">
        <span class="iconfont">&#xe618;</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reqSongplay, reqSongDetail } from '@/api'
import { mapMutations } from 'vuex'
import { songsList } from '@/common/js/list'
export default {
  props: {
    songsList: Array
  },
  methods: {
    ...mapMutations({
      setURL: 'RECEIVE_REC_ID',
      setPLA: 'RECEIVE_REC_PLAY_SONG'
    }),
    async playSong (id) {
      const result = await reqSongplay(id)
      const result2 = await reqSongDetail(id)
      if (result.code === 200 && result2.code === 200) {
        this.setURL(result.data[0].url)
        this.setPLA(songsList(result2.songs))
      }
    }
  }
}
</script>

<style lang="stylus" scpoed>
  .songlist
    position: relative
    width: 100%
    height: 100%
    .songs
      padding-left: .1rem
      display: flex
      .rank
        flex: 0 0 .25rem
        width: .25rem
        line-height: .56rem
        font-size: .17rem
        color: #df3436
      .dark
        flex: 0 0 .25rem
        width: .25rem
        line-height: .56rem
        font-size: .17rem
        color: #999
      .left
        flex: 1
        padding: .06rem 0
        overflow: hidden
        .text
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          font-size: .17rem
          line-height: .25rem
          .title
            color: rgb(51, 51, 51)
            display: inline-block
          .name
            color: rgb(136, 136, 136)
            display: inline-block
            &.darkk
              color: rgb(51, 51, 51)
        .artists
          line-height: .18rem
          font-size: .12rem
          color: rgb(136, 136, 136)
          .iconfont
            color: red
            font-size: .12rem
            display: inline-block
            vertical-align: top
      .right
        flex: 0 0 .42rem
        width: .42rem
        text-align: center
        .iconfont
          font-size: .28rem
          color: rgba(136, 136, 136, 0.3)
          height: .55rem
          line-height: .55rem
</style>
