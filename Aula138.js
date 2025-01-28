import { Cxmsg } from "./cxmsg.js"

const config ={
    cor: "#48f"
}

Cxmsg.config(config)


// const cxmsg = new Cxmsg(config)

const btn_mostrarcxmsg1 = document.querySelector("#btn_mostrarcxmsg1")
const btn_mostrarcxmsg2 = document.querySelector("#btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.querySelector("#btn_mostrarcxmsg3")

btn_mostrarcxmsg1.addEventListener("click", (evt) => {
    Cxmsg.mostrar("CFB Cursos", "Curso de JavaScript")
})  

btn_mostrarcxmsg2.addEventListener("click", (evt) => {
    Cxmsg.mostrar("Youtube", "Canal com cursos de progamação")
})  

btn_mostrarcxmsg3.addEventListener("click", (evt) => {
    Cxmsg.mostrar("JavaScript", "Aula 136")
})  