export function songsList (list, rankcolor) {
  let lists = []
  list.forEach((item, index) => {
    let finName = ''
    let names = []
    item.ar.forEach(ar => {
      names.push(ar.name)
    })
    finName = names.join('/')
    let obj = {
      id: item.id,
      title: item.name,
      album: item.al.name,
      alias: item.alia[0],
      rank: index + 1,
      artists: finName,
      picUrl: item.al.picUrl
    }
    if (rankcolor) {
      if (index < 3) {
        obj.color = true
      }
      if (index < 9) {
        obj.rank = '0' + obj.rank
      }
    }
    lists.push(obj)
  })
  return lists
}
