const instrumentostodos=[...document.getElementsByClassName('elementos')]
const instrumentosc1=[...document.getElementsByClassName('c1')]
const instrumentosc2=[...document.getElementsByClassName('c2')]
const instrumentoespecial=document.getElementsByClassName('elementos')[0]
console.log(instrumentostodos)
console.log(instrumentosc1)
console.log(instrumentosc2)
console.log(instrumentoespecial)
// instrumentosc1.map((e)=>{
//     e.classList.add("destaque")
// })
instrumentosc1.forEach((el)=>{
    el.classList.add("destaque")
})