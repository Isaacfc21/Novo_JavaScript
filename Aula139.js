import { Cxmsg } from "./cxmsg.js"

const config ={
    cor: "#48f",
    tipo: "ok", //tipos: ok, sn,
    textos: ['SIM', 'NÃO'], 
    comando_sn: () => {}
}

const f_sim = () => {
    console.log("Botão SIM pressionado")
}

// const cxmsg = new Cxmsg(config)

const btn_mostrarcxmsg1 = document.querySelector("#btn_mostrarcxmsg1")
const btn_mostrarcxmsg2 = document.querySelector("#btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.querySelector("#btn_mostrarcxmsg3")


btn_mostrarcxmsg1.addEventListener("click", (evt) => {
    config.tipo='ok'
    Cxmsg.mostrar(config,"CFB Cursos", "Curso de JavaScript")
})  

btn_mostrarcxmsg2.addEventListener("click", (evt) => {
    config.tipo='sn'
    config.comando_sn = () => {f_sim()}
    Cxmsg.mostrar(config,"Youtube", "Canal com cursos de progamação")
})  

btn_mostrarcxmsg3.addEventListener("click", (evt) => {
    config.tipo='sn'
    config.textos=["OK","CANCELA"]
    config.comando_sn = () => {}
    Cxmsg.mostrar(config,"JavaScript", "Aula 136") 
})  