class Carro{  //Classe Pai
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}
class Militar extends Carro{ //Classe Filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function(){
        if(this.municao>0){
            this.municao--
        }
    }
}
class Esportivo extends Carro{ //Classe Filho
    constructor(nome,portas,potencia,arrancada){
        super(nome,portas)
        this.potencia = potencia
        this.arrancada = arrancada
        this.setCor("Vermelho")
    }
    arrancar = function(){
        for(let i = 0; i<50;this.arrancada++){
            let resultado = this.arrancada*this.potencia
            if(resultado==100){
                break
            }
            console.log(resultado)  
        }
    }
    
}

const c1 = new Carro("Normal", 4)
const c2 = new Militar("Lutador", 6,100,50)
const c3 = new Esportivo("Veloz", 4,2,10)

c1.ligar()
c1.setCor("Preto")

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado ? "Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)

console.log("--------------------------------------")

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado ? "Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)

console.log("--------------------------------------")

c3.arrancar()

console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Ligado: ${(c3.ligado ? "Sim":"Não")}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Potência: ${c3.potencia}`)
console.log(`Arrancada: ${c3.arrancada}`)
console.log(`Cor: ${c3.cor}`)