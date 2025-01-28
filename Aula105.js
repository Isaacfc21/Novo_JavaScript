let nome = new String("Isaac Dias Luz Caraça")
console.log(nome)

console.log(nome.search("isaac"))
console.log(nome.search(/dias/i))

console.log(nome.match('a'))
console.log(nome.match(/a/g))
// console.log(nome.match(/A/ig))

console.log(nome.replace(/dias/i, "Teste"))
console.log(nome.replace(/a/g, "Teste"))