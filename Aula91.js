const objetos = document.querySelector("#objetos")

const computador={
    cpu:"",
    ram:"",
    hd:"",
    info: function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}
const c2= Object.create(computador)
c2.cpu = "i9"
c2.ram = "32Gb"
c2.hd = "2Tb"
c2.info()

    // let resultado = false
    // c2.cpu = "i9"
    // c2.ram = "32Gb"
    // c2.hd = "2Tb"
    // c2.info()


computador["monitor"] = "22pol"
computador.placaVideo = "RTX3060"
delete(computador.hd)
// console.log(computador)

// console.log(computador["monitor"])

const c1 = Object.assign({},computador)
// c1.info()

const o1={obj1:"1"}
const o2={obj2:"2"}
const o3={obj3:"3"}
const o4=Object.assign(o1,o2,o3)
console.log(o4)

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