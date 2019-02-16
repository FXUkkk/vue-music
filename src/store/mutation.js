import * as types from './mutation-type'

const mutations = {
  [types.RECEIVE_REC_SONGS] (state, song) {
    state.song = song
  },
  [types.SET_SEARCH_HISTORY] (state, search) {
    state.search = search
  },
  [types.RECEIVE_REC_ID] (state, playId) {
    state.playId = playId
  },
  [types.RECEIVE_REC_PLAY_SONG] (state, playsong) {
    state.playsong = playsong
  }
}

export default mutations
