const carro = document.getElementById("carro")
const btn_rodar = document.querySelector("#btn_rodar")
const btn_parar = document.querySelector("#btn_parar")


const init=()=>{
    // carro.style="position:relative;left:0px;"
    carro.style="position:relative;left:0px;width: 100px;height:40px;"
    tamCarro = parseInt(carro.style.width)
    tamMax =  window.innerWidth - tamCarro
}

let anima= null
let tamMax = null
let tamCarro = null
let dir = 0

const mover=()=>{
    if(parseInt(carro.style.left) >= tamMax){
       dir = -1
    }else if(parseInt(carro.style.left) <= 0){
        dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
    anima = setTimeout(mover,20)
}

btn_parar.addEventListener("click", (evt)=>{
    clearTimeout(anima)
})
btn_rodar.addEventListener("click", (evt) => {
    clearInterval(anima)
    mover()
})


window.onload=init()

window.addEventListener("resize", (evt) => {
    tamMax =  window.innerWidth - parseInt(carro.style.width)
})
window.addEventListener("keydown", (evt) => {
    if(evt.code === "ArrowUp"){
        carro.style.width = parseInt(carro.style.width) + 10 + "px"
        carro.style.height = parseInt(carro.style.height) + 10 + "px"
    }
    if(evt.code === "ArrowDown"){
        carro.style.width = parseInt(carro.style.width) - 10 + "px"
        carro.style.height = parseInt(carro.style.height) - 10 + "px"
    }
    if(parseInt(carro.style.width) <= 0 || parseInt(carro.style.height) <= 0){
        alert("Limite de tamanho atingido")
        carro.style.width= parseInt(carro.style.width) + 10 + "px"
        carro.style.height = parseInt(carro.style.height) + 10 + "px"
        return
    }
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
})