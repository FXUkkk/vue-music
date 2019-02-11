export class Songs {
  constructor ({id, name, alias}) {
    this.id = id
    this.name = name
    this.alias = alias[0]
  }
}

export function takeItOff (list) {
  let ret = []
  list.forEach(item => {
    if (item.id) {
      ret.push(createdSongs(item))
    }
  })
  return ret
}

export function createdSongs (list) {
  return new Songs({
    id: list.id,
    name: list.name,
    alias: list.alias[0]
  })
}
