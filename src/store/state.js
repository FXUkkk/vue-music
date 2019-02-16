import { loadSearch } from '@/common/js/cache'

const state = {
  song: {},
  search: loadSearch(),
  playId: '',
  playsong: []
}

export default state
