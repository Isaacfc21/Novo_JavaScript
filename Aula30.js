const dc1=document.getElementById("c1")
const dc2=document.getElementById("c2")
const dc3=document.getElementById("c3")
const dc4=document.getElementById("c4")
const dc5=document.getElementById("c5")
const dc6=document.getElementById("c6")

const arrayelementos=[dc1,dc2,dc3,dc4,dc5,dc6]
// for (d of arrayelementos)
//     d.innerHTML= "isaac"
// console.log(arrayelementos)
// arrayelementos.map((e)=>{
//    e.innerHTML= "Isaac"
//     console.log(e)
// })

for(let i=0; i<arrayelementos.length;i++){
    arrayelementos[i].innerHTML="Futebol"
    console.log(arrayelementos[i])
}

// const dc1=document.getElementById("c1")
// console.log(dc1)
// console.log(dc1.id)
// console.log(dc1.innerHTML)