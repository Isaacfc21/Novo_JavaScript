class Carro{
    constructor(tipo,estagioTurbo){
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
        console.log("--------------------")
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
        this.tipoInfo = 2
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

c1.info()
c2.info()
c3.info()
