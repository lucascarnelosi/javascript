let words = 'Programar é muito bacana'
console.log(word.toLowerCase())

let number = 1230
console.log(String(number).length)

let phrase = 'Eu quero viver o Amor!'
console.log(phrase.includes("Amor!"))

let word = "manipulação"
console.log(Array.from(word))

let techs = ["html", "css", "js"]
techs.push("nodejs") // adicionar item no final
techs.unshift("sql") // adicionar item no começo 
techs.pop() // remover último item
techs.shift() // remover do primeiro item

console.log(techs.slice(1, 3)) // pegar alguns elementos

techs.splice(1, 2) // remover 1 ou mais itens 

let index = techs.indexOf('html') // encontrar posição de um elemento
techs.splice(index, 1) // remoção do elemento encontrado

console.log(techs)
