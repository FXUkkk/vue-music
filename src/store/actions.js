import * as types from './mutation-type'
import { saveSearch, deleteSearch } from '@/common/js/cache'

export const saveSearchHistory = function ({ commit }, name) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(name))
}

export const deleteSearchHistory = function ({ commit }, name) {
  commit(types.SET_SEARCH_HISTORY, deleteSearch(name))
}
