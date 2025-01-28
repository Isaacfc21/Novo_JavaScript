class Npc{
    static alerta= false
    constructor(energia){
        this.energia = energia
    }
    info(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? "Sim":"Não")}`)
        console.log("-----------------------------------------")
    }
    static setalertar=function(){
        Npc.alerta= true
    }
}
const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.setalertar()
// Npc.alerta = true
// npc1.alerta = true
// npc2.alerta = true
// npc3.alerta = true


npc1.info()
npc2.info()
npc3.info()