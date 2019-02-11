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
  }
}

export default mutations
