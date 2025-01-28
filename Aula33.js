const divtodas=[...document.getElementsByTagName("div")]
const elementostodos=[...document.getElementsByClassName("elementos")]
const elementosc1=[...document.getElementsByClassName("c1")]
const elementosc2=[...document.getElementsByClassName("c2")]
const elementosespecial=document.getElementById("c1")

const query_divtodas= [...document.querySelectorAll("div[class]")]
const query_divtodas1= [...document.querySelectorAll("div,p")]
const query_divtodas2= [...document.querySelectorAll("div>p")]
const query_elementostodos= [...document.querySelectorAll('.elementos')]
const query_c1=[...document.querySelectorAll('.c1')]
const query_c2=[...document.querySelectorAll('.c2')]
const query_especial=document.querySelectorAll("#c1")[0]
const query_especial2=document.querySelector("#c1")

console.log(query_divtodas2)

// console.log(DivTodas)
// console.log(instrumentostodos)
// console.log(instrumentosc1)
// console.log(instrumentosc2)
// console.log(instrumentoespecial)

// instrumentosc1.map((e)=>{
//     e.classList.add("destaque")
// })