import ajax from './ajax'
const base = '/api'

export const reqecommendSongs = () => ajax(`${base}/personalized`)
export const reqNewMusic = () => ajax(`${base}/personalized/newsong`)
export const reqHotMusic = () => ajax(`${base}/top/list?idx=1`)
export const reqecommendSongsList = (id) => ajax(`${base}/playlist/detail?id=${id}`)
export const reqSearch = () => ajax(`${base}/search/hot`)
export const reqMultimatch = (keyword) => ajax(`${base}/search/suggest?keywords=${keyword}&type=mobile`)
export const reqSuggestSong = (keyword) => ajax(`${base}/search?keywords=${keyword}`)
export const reqSongplay = (id) => ajax(`${base}/song/url?id=${id}`)
export const reqSongDetail = (id) => ajax(`${base}/song/detail?ids=${id}`)
