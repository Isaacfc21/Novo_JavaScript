let colocacao= "Carlos"

switch(colocacao){
    case "Isaac":
        console.log("Primeiro lugar")
        break
    case "Marcos":
        console.log("Segundo lugar")
        break
    case "Fernando":
        console.log("Terceiro lugar")
        break
    case "Thiago": case "Carlos": case "Gustavo":
        console.log("Prêmio de participação")
        break
    default:
        console.log("Não subiu ao pódio")
        break
}