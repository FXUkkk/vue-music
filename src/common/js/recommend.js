export class Recommend {
  constructor ({id, copywriter, name, picUrl, playCount}) {
    this.id = id
    this.copywriter = copywriter
    this.name = name
    this.picUrl = picUrl
    this.playCount = playCount
  }
}

export function createdRecommendSong (res) {
  return new Recommend({
    id: res.id,
    copywriter: res.copywriter,
    name: res.name,
    picUrl: res.picUrl,
    playCount: filterplayCount(res.playCount)
  })
}

function filterplayCount (playCount) {
  let langt = parseInt(playCount).toString()
  if (langt.length < 6) {
    return langt
  }
  if (langt.length > 8) {
    let decimal = langt.substring(langt.length - 8, langt.length - 7)
    return parseFloat(parseInt(langt / 100000000) + '.' + decimal) + '亿'
  }
  if (langt.length > 5) {
    let decimal = langt.substring(langt.length - 4, langt.length - 3)
    return parseFloat(parseInt(langt / 10000) + '.' + decimal) + '万'
  }
}
