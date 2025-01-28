const caixa1= document.querySelector("#caixa1")
const caixa2= document.querySelector("#caixa2")
const btn_transferir= document.querySelector("#btn_transferir")
const todosinstrumentos=[...document.querySelectorAll(".instrumentos")]

todosinstrumentos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const instrumentos= evt.target
        instrumentos.classList.toggle("selecionado")
    })
})
btn_transferir.addEventListener("click", ()=>{
    const instrumentosselecionados= [...document.querySelectorAll('.selecionado')]
    const instrumentosnaoselecionados= [...document.querySelectorAll('.instrumentos:not(.selecionado)')]
        instrumentosselecionados.map((el)=>{ 
        caixa2.appendChild(el)
    })
    instrumentosnaoselecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})


