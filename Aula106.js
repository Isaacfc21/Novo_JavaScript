let nome = new String("Isaaccccccc Dias Luz Caraça 2008")
let email = "Isaac@gmail.com"
let numeros = "1, 10, 100, 1000"

console.log(nome)

console.log(nome.match(/[as]/ig))
console.log(nome.match(/[a-ç]/ig))
console.log(nome.match(/[a-ç|0-9]/ig))
console.log(nome.match(/[a-g|h-ç|0-9]/ig))

//Metacaracteres
console.log(nome.match(/\d/ig)) //Números
console.log(nome.match(/\s/ig)) //Espaços
console.log(nome.match(/\ba/ig)) //A Letra

//Quantificadores
console.log(nome.match(/c+/ig)) //Agrupa
console.log(nome.match(/ac*/ig)) //Correspondência Maior
console.log(numeros.match(/10?/ig)) // Correspondência Menor
console.log(numeros.match(/10*/ig))

// console.log(nome.search("isaac"))
// console.log(nome.search(/dias/i))

// console.log(nome.match('a'))
// console.log(nome.match(/a/g))
// // console.log(nome.match(/A/ig))

// console.log(nome.replace(/dias/i, "Teste"))
// console.log(nome.replace(/a/g, "Teste"))
