console.log('Worker')

postMessage('First message')

onmessage = function (evt) {
  console.log('worker event', evt)
  console.log('window', typeof window)
  console.log('document', typeof document)
  console.log('URL', typeof URL)
  console.log('encodeURIComponent', encodeURIComponent)
  console.log('JSON', JSON)
  console.log('self', self)
  console.log('XMLHttpRequest', XMLHttpRequest)
}
