// const f= function(v1,v2){
//   return v1+v2
// }
// console.log(f(10,5))
// const f= function(...valores){
//     let tamanho= valores.length
//     let res= 0
//     for(let i= 0; i<tamanho; i++){
//         res+=valores[i]
//     }
//     return res
// }
// console.log(f(10,5))
// const f= function(...valores){
//     let res=0
//     for(let v of valores){
//        res+=v
//     }
//     return res
// }
// console.log(f(10,5,20,30))
const f= new Function("v1","v2","return v1+v2")
console.log(f(10,15))