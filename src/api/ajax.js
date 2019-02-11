import axios from 'axios'
export default function ajax (url) {
  return new Promise(function (resolve, reject) {
    let promise
    promise = axios.get(url)
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
