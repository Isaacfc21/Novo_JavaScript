const carro = document.getElementById("carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const btn_parar = document.querySelector("#btn_parar")


const init=()=>{
    // carro.style="position:relative;left:0px;"
    carro.style="position:relative;left:0px;width: 100px;"
    tamMax =  window.innerWidth - parseInt(carro.style.width)
}

let anima= null
let tamMax = null

const mover=(dir)=>{
    if(dir > 0){
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
            anima = setTimeout(mover,20,dir)        
        }else{
            clearTimeout(anima)        
        }
    }
    else if(dir < 0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
            anima = setTimeout(mover,20,dir)        
        }else{
            clearTimeout(anima)
        }
    }
}

btn_parar.addEventListener("click", (evt)=>{
    clearTimeout(anima)
})

btn_esquerda.addEventListener("click", (evt)=>{
    clearTimeout(anima)
    mover(-1)
})

btn_direita.addEventListener("click", (evt)=>{
    clearTimeout(anima)
    mover(1)
}) 

window.onload=init()

window.addEventListener("resize", (evt) => {
    tamMax =  window.innerWidth - parseInt(carro.style.width)
})

// const carroPos = parseInt(carro.style.left)
// const carroWidth = carro.offsetWidth
// const windowWidth = window.innerWidth

// if ((dir === -1 && carroPos <= 0) || (dir === 1 && carroPos + carroWidth >= windowWidth)){
//     clearTimeout(anima)
//     return
// }
// console.log(carroWidth)
// anima = setTimeout(mover,20,dir)
// carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"