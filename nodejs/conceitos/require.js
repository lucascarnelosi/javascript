// módulos nativos
const path = require('path')

console.log(path.basename(__dirname))

// meus módulos
const myModule = require('./exports')

console.log(myModule)