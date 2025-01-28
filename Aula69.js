class CarroPadrao{
    constructor(){
        //Classes abstratas
        if(this.constructor===CarroPadrao){
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        if(this.ligar===undefined){
            throw new TypeError("É obrigatório implementar o método ligar")
        }
        // if(this.desligar===undefined){
        //     throw new TypeError("É obrigatório implementar o método desligar")
        // }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}


class Carro extends CarroPadrao{
    constructor(tipo,estagioTurbo){
        super()
        this.turbo = new Turbo(estagioTurbo)
        switch(tipo){
            case 1:
                this.velMax=120
                this.nome = "Normal"
                break
            case 2:
                this.velMax=160
                this.nome = "Esportivo"
                break
            case 3:
                this.velMax = 200
                this.nome = "Super Esportivo"
                break
        }
        this.velMax+=this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.portas)
        console.log(this.rodas) 
        console.log((this.ligado ? "Sim":"Não"))
        console.log("--------------------")
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.desligado = true
    }
}

class Turbo{
    constructor(e){
        switch(e){
            case 0:
                this.pot = 0
                break
            case 1:
                this.pot=50
                break
            case 2:
                this.pot=75
                break
            case 3:
                this.pot=100
                break
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo = 1
        this.velMax = 300 + this.turbo.pot
        this.nome = "Carro Especial"
    }
    info(){
        if(this.tipoInfo==1){
            super.info()
        }else{
        console.log(`Nome: ${this.nome}`)
        console.log(`Vel.Max: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.pot}`)
        // super.info()
        }
    }
}

const c1 = new Carro(1,0)
const c2 = new Carro(1,1)
const c3 = new CarroEspecial(3)
// const c4 = new CarroPadrao()

c1.ligar()
c1.info()
c2.info()
c3.info()