class Carro{
    time="Palmeiras"
    constructor(pnome,ptipo){
        this.nome = pnome
        this.time = "Barcelona"
        switch(ptipo){
            case 1:
                this.tipo ="Esportivo"
                this.velmax = 300
                break
            case 2:
                this.tipo="Utilitário"
                this.velmax = 100
                break
            case 3:
                this.tipo ="Passeio"
                this.velmax = 160
                break
            default:
                this.tipo ="Militar"
                this.velmax = 180
                break
        }
    }
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }
    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelMax(velmax){
        this.velmax=velmax
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Vel.Max: ${this.velmax}`)
        console.log(`Time: ${this.time}`)
        console.log('-----------------------')
    }
}

let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super Luxo",2)
let c3 = new Carro("Bombadão",4)
let c4 = new Carro("Carrego Tudo",3)

c1.setNome("Super Veloz")
c1.setVelMax(500)
c1.info()