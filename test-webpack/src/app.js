var mod = require('./module')

var elCont1

document.addEventListener('DOMContentLoaded', init)

doSomething()

function init () {
  console.log('INIT')
  getDomElements()
  sync()
}

function doSomething () {
  console.log('doSomething')
  console.log('result', mod.someModule())
}

function sync () {
  if (elCont1) {
    elCont1.innerHTML = ''
  }
}

function getDomElements () {
  elCont1 = document.getElementById('cont1')
}
