const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".instrumentos")]
const instrumentos=["Guitarra", "Piano", "Teclado", 'Bateria', "Sanfona", "Flauta", "Isaac"]

instrumentos.map((el, chave)=>{
    console.log(chave)
    const novoElemento= document.createElement("div")
    novoElemento.setAttribute("id" , "c" +chave)
    novoElemento.setAttribute("class" , "instrumentos c1")
    novoElemento.innerHTML= el

    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src","./ícone_lixeira.png")
    btn_lixeira.setAttribute('class',"btn_lixeira")
    btn_lixeira.addEventListener("click",(evt)=>{
         caixa1.removeChild(evt.target.parentNode)   
    })
     novoElemento.appendChild(btn_lixeira)
     caixa1.appendChild(novoElemento)
})

// const novoElemento= document.createElement("div")
// caixa1.appendChild(novoElemento)
// novoElemento.setAttribute("id" , "c7")
// novoElemento.setAttribute("class" , "instrumentos c1")
// novoElemento.innerHTML= 'Isaac'
