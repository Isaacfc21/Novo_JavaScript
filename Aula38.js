const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.instrumentos')]
const c1_2=document.querySelector('#c1_2')
console.log(c1_2.parentNode.parentNode.children[3])
console.log(caixa1.children[1].innerHTML="TESTE")




// console.log(caixa1.children[1].innerHTML= "Isaac")
// console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")
// if(caixa1.children.length > 0){
//     console.log("Este elemento possui filhos")
// }else{
//     console.log("Este elemento não possui filhos")
// }
// console.log(btn_c[0].children)
// console.log(btn_c[0].hasChildNodes())
console.log(caixa1.hasChildNodes())