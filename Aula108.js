const carro = document.getElementById("carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const btn_parar = document.querySelector("#btn_parar")


const init=()=>{
    carro.style="position:relative;left:0px;"
}

let anima= null

const mover=(dir)=>{
    const carroPos = parseInt(carro.style.left)
    const carroWidth = carro.offsetWidth
    const windowWidth = window.innerWidth

    if ((dir === -1 && carroPos <= 0) || (dir === 1 && carroPos + carroWidth >= windowWidth)){
        clearInterval(anima)
        return
    }
    carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
}

btn_parar.addEventListener("click", (evt)=>{
    clearInterval(anima)
})

btn_esquerda.addEventListener("click", (evt)=>{
    clearInterval(anima)
    anima=setInterval(mover,20,-1)    
})

btn_direita.addEventListener("click", (evt)=>{
    clearInterval(anima)
    anima=setInterval(mover,20,1)    
}) 


window.onload=init()
