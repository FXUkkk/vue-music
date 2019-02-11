<template>
  <div class="recsongs">
    <ul class="song-wrapper">
      <li
        v-for="song of one"
        :key="song.id"
        @click="pushList(song)"
        class="song"
      >
        <div class="content">
          <img :src="song.picUrl" alt="">
          <span class="iconfont">&#xe681;&nbsp;{{song.playCount}}</span>
        </div>
        <p>{{song.name}}</p>
      </li>
    </ul>
    <ul class="song-wrapper">
      <li
        v-for="song of two"
        :key="song.id"
        @click="pushList(song)"
        class="song"
      >
        <div class="content">
          <img :src="song.picUrl" alt="">
          <span class="iconfont">&#xe681;&nbsp;{{song.playCount}}</span>
        </div>
        <p>{{song.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  props: {
    recommendSongs: Array
  },
  methods: {
    ...mapActions(['getCommendSongsDetail']),
    ...mapMutations({
      setSong: 'RECEIVE_REC_SONGS'
    }),
    pushList (song) {
      this.$router.push({
        path: '/playlist',
        query: { id: song.id }
      })
      this.setSong(song)
    }
  },
  computed: {
    one () {
      return this.recommendSongs.slice(0, 3)
    },
    two () {
      return this.recommendSongs.slice(3)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recsongs
    padding-bottom: .18rem
    .song-wrapper
      display: flex
      flex-flow: wrap
      justify-content: space-between
      padding-bottom: .16rem
      .song
        width: 32.8%
        .content
          position relative
          font-size: 0
          &:after
            content: " "
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: .2rem
            z-index: 2
            background-image: linear-gradient(180deg,rgba(0,0,0,.2),transparent)
          img
            width: 100%
            height: 100%
          span
            position: absolute
            right: .05rem
            top: .05rem
            z-index: 3
            font-size: .12rem
            color: #fff
        p
          padding: .06rem .02rem 0 .06rem
          font-size: .13rem
          line-height: .14rem
</style>
