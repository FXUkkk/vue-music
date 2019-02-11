import { loadSearch } from '@/common/js/cache'

const state = {
  song: {},
  search: loadSearch(),
  playId: ''
}

export default state
