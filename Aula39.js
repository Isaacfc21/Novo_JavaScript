const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".instrumentos")]
const instrumentos=["Guitarra", "Piano", "Teclado", 'Bateria', "Sanfona", "Flauta", "Isaac"]

instrumentos.map((el, chave)=>{
    console.log(chave)
    const novoElemento= document.createElement("div")
    caixa1.appendChild(novoElemento)
    novoElemento.setAttribute("id" , "c" + chave)
    novoElemento.setAttribute("class" , "instrumentos c1")
    novoElemento.innerHTML= el
})
// for(let i=0;i<instrumentos.length;i++){
//     console.log(instrumentos[i])
//     const novoElemento = document.createElement("div")
//     caixa1.appendChild(novoElemento)
//     novoElemento.setAttribute("id", "c" + i)
//     novoElemento.setAttribute("class", "instrumentos c1")
//     novoElemento.innerHTML= instrumentos[i]

// }

// const novoElemento= document.createElement("div")
// caixa1.appendChild(novoElemento)
// novoElemento.setAttribute("id" , "c7")
// novoElemento.setAttribute("class" , "instrumentos c1")
// novoElemento.innerHTML= 'Isaac'
