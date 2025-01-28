// let n= 0
// let max= 1000

// while(n<1000){
//     console.log("Isaac - " + n)
//     if(n>10){
//         break
//     }
//     n++
// }
// console.log("Fim do Progama")
let n= 0
let max= 1000
let pares= 0

for(let i=n; i<max; i++){
    console.log("Isaac - " + i)
    if(i%2!=0){
        continue
    }
    pares++
}    
console.log("Quantidade de pares: " + pares)
console.log("Fim do Progama")
