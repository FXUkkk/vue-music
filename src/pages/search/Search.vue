<template>
  <div class="search">
    <div class="search-input border-bottom">
      <div class="input-wrapper">
        <span class="iconfont left">&#xe64f;</span>
        <input class="s-input"
          @click="erredffgv"
          v-model="searchText"
          @keyup="format"
          type="text"
          placeholder="搜索歌曲、歌手、专辑"
        >
        <span
          class="iconfont right"
          @click="dellist"
          v-show="searchTextShow"
        >&#xe620;
        </span>
      </div>
    </div>
    <loading v-show="loadingShow"></loading>
    <div
      v-show="hotSearchShow"
      class="hot-search"
    >
      <SearchTitle :searchTitle="'热门搜索'"></SearchTitle>
      <ul class="tags-wrapper">
        <li
          @click="searchType(item.tag)"
          v-for="item of tags"
          :key="item.id"
          class="tags border"
          >{{item.tag}}</li>
      </ul>
      <search-item
        @searchType="searchType"
        @deleSearch="deleSearch"
        :type="1"
        :searchList="search"
      ></search-item>
    </div>
    <div
      v-show="SearchShow"
      class="hot-search-continued"
    >
      <h3
        @click="searchType(searchText)"
        class="search-tagsss border-bottom"
      >
      搜索"{{searchText}}"
      </h3>
      <search-item
        @searchType="searchType"
        :type="0"
        :searchList="searchList"
      ></search-item>
    </div>
    <song-list
      :songsList="searchSongList"
      v-show="songListShow"
    ></song-list>
  </div>
</template>

<script>
import Loading from 'components/loading/Loading'
import SearchTitle from './components/SearchTitle'
import SearchItem from './components/SearchItem'
import SongList from 'components/list/SongList'
import { reqSearch, reqMultimatch, reqSuggestSong } from '@/api'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      loadingShow: true,
      tags: [],
      searchText: '',
      searchList: [],
      searchSongList: []
    }
  },
  components: {
    Loading,
    SearchTitle,
    SearchItem,
    SongList
  },
  methods: {
    ...mapActions(['saveSearchHistory', 'deleteSearchHistory']),
    async _getTags () {
      const result = await reqSearch()
      if (result.code === 200) {
        this.loadingShow = false
        this.tags = this.setTags(result.result.hots)
      }
    },
    setTags (list) {
      const umr = []
      list.forEach((el, index) => {
        let obj = {
          tag: el.first,
          id: index
        }
        umr.push(obj)
      })
      return umr
    },
    format (e) {
      this.searchText = e.target.value
      this.getSearchList(this.searchText)
    },
    _setSearchList (list) {
      let umr = []
      list.forEach(el => {
        umr.push(el.keyword)
      })
      return umr
    },
    dellist () {
      this.searchText = ''
      this.searchList = []
      this.searchSongList = []
    },
    async searchType (name) {
      this.loadingShow = true
      this.searchText = name
      this.saveSearchHistory(name)
      const result = await reqSuggestSong(name)
      if (result.code === 200) {
        this.loadingShow = false
        this.searchSongList = this._setSearchSongList(result.result)
      }
    },
    deleSearch (name) {
      this.deleteSearchHistory(name)
    },
    _setSearchSongList (list) {
      let songs = []
      list.songs.forEach(song => {
        let artistsName = ''
        let names = []
        song.artists.forEach(el => {
          names.push(el.name)
        })
        artistsName = names.join('/')
        let obj = {
          id: song.id,
          title: song.name,
          artists: artistsName,
          album: song.album.name,
          alias: song.alias[0]
        }
        songs.push(obj)
      })
      return songs
    },
    erredffgv () {
      this.getSearchList(this.searchText)
      this.searchSongList = []
    },
    async getSearchList (name) {
      if (name.length > 0) {
        const result = await reqMultimatch(name)
        if (result.code === 200) {
          if (result.result.allMatch) {
            this.searchList = this._setSearchList(result.result.allMatch)
          }
        }
      } else {
        this.searchList = []
      }
    }
  },
  computed: {
    ...mapGetters(['search']),
    searchTextShow () {
      return this.searchText.length > 0
    },
    hotSearchShow () {
      return !this.loadingShow && this.searchText.length === 0
    },
    SearchShow () {
      return this.searchText.length > 0 && this.searchSongList.length === 0 && !this.loadingShow
    },
    songListShow () {
      return this.searchSongList.length > 0 && !this.loadingShow
    }
  },
  created () {
    this._getTags()
  }
}
</script>

<style lang="stylus" scoped>
  .search
    .search-input
      padding: .15rem .1rem
      .input-wrapper
        position: relative
        background: pink
        height: .3rem
        padding: 0 .3rem
        box-sizing: border-box
        background: #ebecec
        border-radius: .3rem
        color: #c9c9c9
        .s-input
          font-size: .14rem
          background: transparent
          height: .3rem
          line-height: .18rem
          width: 100%
        .left
          position: absolute
          left: .09rem
          top: .09rem
        .right
          position: absolute
          right: .08rem
          top: .08rem
    .hot-search
      padding: .15rem .1rem 0 .1rem
      .tags-wrapper
        margin: .1rem 0
        .tags
          display: inline-block
          height: .32rem
          margin-right: .08rem
          margin-bottom: .08rem
          padding: 0 .14rem
          font-size: .14rem
          line-height: .32rem
          color: #333
          &.border
            &:before
              border-radius: .3rem
              border-color: rgb(211, 212, 218)
    .hot-search-continued
      padding-left: .1rem
      .search-tagsss
        height: .5rem
        padding-right: .1rem
        font-size: .15rem
        line-height: .5rem
        color: #507daf
</style>
