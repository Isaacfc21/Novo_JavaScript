const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const altura = document.getElementById("altura")
const largura = document.getElementById("largura")

q1.accessKey="b"
q2.accessKey="n"


console.log(`q1: ${q1.accessKey}`)
console.log(`q2: ${q2.accessKey}`)

const info = (el) =>{
    let DOMRect_q = el.getBoundingClientRect()
    posx.innerHTML= `posx:${Math.round(DOMRect_q.x)}`
    posy.innerHTML= `posy:${Math.round(DOMRect_q.y)}`
    largura.innerHTML= `largura:${Math.round(DOMRect_q.width)}`
    altura.innerHTML= `altura:${Math.round(DOMRect_q.height)}` 
}
q1.addEventListener("click", (evt) => {
    info(evt.target)    
})

q2.addEventListener("click", (evt) => {
    info(evt.target)
})