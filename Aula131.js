import { Cxmsg } from "./cxmsg.js"

const config ={
    cor: "#080"
}

Cxmsg.config(config)


const timer = document.querySelector("#timer")
const btn_iniciar = document.getElementById("btn_iniciar")
const btn_parar = document.getElementById("btn_parar")
const btn_zerar = document.getElementById("btn_zerar")
const divTimer = document.getElementById("divTimer")
const div_Parcial = document.getElementById("div_Parcial")

let intervalo = null

let tmpini = null


const contador = () => {
    const tmpatual = Date.now() 
    let seg = (tmpatual - tmpini)/1000
    timer.innerHTML=converter(seg)
}

const converter = (seg) => {
    let hora = Math.floor(seg/3600)
    let resto = seg%3600
    let minuto = Math.floor(resto/60)
    let segundo = Math.floor(resto%60)
    let tempoFormatado = (hora<10? "0"+hora:hora) + ":" + (minuto<10? "0"+minuto:minuto) + ":" + (segundo<10? "0"+segundo:segundo)

    return tempoFormatado
}

btn_iniciar.addEventListener("click", (evt) => {
    tmpini = Date.now()
    intervalo = setInterval(contador,1000)      
})

btn_parar.addEventListener("click", (evt) => {
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click", (evt) => {
    tmpini = Date.now()
    timer.innerHTML="00:00:00"
    clearInterval(intervalo)
    div_Parcial.innerHTML=""
    i = 0
    Cxmsg.mostrar("Cronomêtro", "O Cronomêtro foi zerado")
    
})

let i = 0

btn_parciais.addEventListener("click", (evt) => {
    if(intervalo){
        const p = document.createElement("p")
        p.innerHTML=`Parcial: ${i+=1} `
        const div = document.createElement("div")
        div.setAttribute("id", "divParcial")
        div.setAttribute("class", "div_Parcial")
        div.innerHTML= timer.innerHTML
        div_Parcial.appendChild(p)
        div_Parcial.appendChild(div)  
    }
})