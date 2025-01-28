class Pessoa{
    constructor(pnome){
        this.nome = pnome
    }
}

let p1 = new Pessoa("Isaac")
let p2 = new Pessoa("Bruno")
let p3 = new Pessoa(10)

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)


// class Pessoa{
//     constructor(){
//         this.nome = 'Isaac'
//     }
// }

// let p1 = new Pessoa()
// let p2 = new Pessoa()
// let p3 = new Pessoa()

// console.log(p1.nome)
// console.log(p2.nome)
// console.log(p3.nome)
