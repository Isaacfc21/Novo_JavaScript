const carro = document.getElementById("carro")
const btn_play = document.querySelector("#btn_play")
const btn_stop = document.querySelector("#btn_stop")

const init=()=>{
    // carro.style="position:relative;left:0px;"
    carro.style="position:relative;left:0px;width: 100px;"
    tamMax =  window.innerWidth - parseInt(carro.style.width)
}

let anima= null
let tamMax = null
let direcao_atual = 1

const mover=(dir)=>{
    if(dir > 0){
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
            anima = setTimeout(mover,20,dir)         
        }
        else{
            dir = -1
            anima = setTimeout(mover,20,dir)
        }     
    }
    else if(dir < 0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
            anima = setTimeout(mover,20,dir)        
        }
        else{
            dir = 1
            anima = setTimeout(mover,20,dir)
        }      
    }
    direcao_atual = dir
}

btn_play.addEventListener("click", (evt)=>{
    clearTimeout(anima)
    mover(direcao_atual)
    btn_play.setAttribute("disabled", "disabled")
    btn_stop.removeAttribute("disabled")        
})

btn_stop.addEventListener("click", (evt)=>{
    clearTimeout(anima)
    btn_play.removeAttribute("disabled")
    btn_stop.setAttribute("disabled", "disabled")
}) 

window.onload=init()

window.addEventListener("resize", (evt) => {
    tamMax =  window.innerWidth - parseInt(carro.style.width)
})