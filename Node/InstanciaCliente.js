const contadorA = require('./InstanciaUnica.js')
const contadorB = require('./InstanciaUnica.js')

const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)