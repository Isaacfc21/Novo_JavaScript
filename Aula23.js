// function soma(...valores){
//     let tamanho=valores.length
//     let res= 0
//     for(let i=0;i<tamanho;i++){
//         res+=valores[i]
//     }
//     return res
// }
// console.log(soma(10,5,15,20))
function soma(...valores){
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(soma(10,5,15,20))