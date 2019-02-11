import storage from 'good-storage'

const SEARCH_KEY = 'search'
const SEARCH_MAX_LEN = 6

function setArray (arr, name, maxLen) {
  const index = arr.findIndex(el => el === name)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(name)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

export function saveSearch (name) {
  let searches = storage.get(SEARCH_KEY, [])
  setArray(searches, name, SEARCH_MAX_LEN)
  storage.set(SEARCH_KEY, searches)
  return searches
}

export function loadSearch () {
  return storage.get(SEARCH_KEY, [])
}

export function deleteSearch (name) {
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, name)
  storage.set(SEARCH_KEY, searches)
  return searches
}

function deleteFromArray (arr, name) {
  const index = arr.findIndex(el => el === name)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
