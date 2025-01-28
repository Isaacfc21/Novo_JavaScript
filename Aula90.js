const objetos = document.querySelector("#objetos")

const computador={
    cpu:"i9",
    ram:"64Gb",
    hd:"2Tb",
    info: function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}
computador["monitor"] = "22pol"
computador.placaVideo = "RTX3060"
console.log(computador["monitor"])
const computadores=[
    {
        cpu:"i9",
        ram:"64Gb",
        hd:"2Tb"
    },
    {
        cpu:"i7",
        ram:"32Gb",
        hd:"2Tb"
    },
    {
        cpu:"i5",
        ram:"16Gb",
        hd:"1Tb"
    }

]
computadores.forEach((c) =>{
    // console.log(c)
    const div = document.createElement("div")
    div.setAttribute("class", "computador")
    div.innerHTML=c.cpu + "<br/>" + c.ram + "<br/>" + c.hd
    objetos.appendChild(div)
})
// computador.info()
// console.log(computador)
// console.log(computadores)
// objetos.innerHTML= JSON.stringify(computador)