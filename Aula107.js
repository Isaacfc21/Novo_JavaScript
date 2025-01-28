const carro = document.getElementById("carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")

const init=()=>{
    // carro.style.position="relative"
    // carro.style.left="0px"
    carro.style="position:relative;left:0px;"
}

btn_esquerda.addEventListener("click", (evt)=>{
    let pos= parseInt(carro.style.left)
    if(pos>0){
        pos-=10
        carro.style=`position:relative;left:${pos}px;` 
    }
})

btn_direita.addEventListener("click", (evt)=>{
    let pos= parseInt(carro.style.left)
    pos+=10
    carro.style=`position:relative;left:${pos}px;`
    // console.log(pos)
})


window.onload=init()
// window.addEventListener("load",init())