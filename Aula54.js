const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "Javascript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("canal", 100)

console.log(mapa)

let pes = 10
let res = ""
const chave_e = "A chave existe na coleção: " + mapa.get(pes)
const chave_n = "A chave não existe na coleção"

if(mapa.has(pes)){
    res= chave_e
}else{
    res=chave_n
}

mapa.delete(1)

res +="<br/> O tamanho da coleção é " + mapa.size
caixa.innerHTML=res

mapa.forEach((el)=>{
    console.log(el)
})


// if(mapa.has("curso")){
//     caixa.innerHTML= chave_e
// }else{
//     caixa.innerHTML=chave_n
// }

// caixa.innerHTML=mapa.get("curso")