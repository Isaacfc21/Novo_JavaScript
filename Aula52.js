const caixa=document.getElementById("caixa")
let cores=["Azul","Vermelho","Verde", ["claro","escuro","medio"]]
let cursos=["Isaac","Futebol","Esporte", cores]

console.log(cursos[3][3][2])

// cursos[0] = "C++"
// cursos.push("C++")
// cursos.unshift("Python")
// cursos.shift()
// cursos.pop()
// console.log(cursos[0])

for(let i=0;i<cursos.length;i++){
    let p=document.createElement("p")
    p.innerHTML=cursos[i]
    caixa.appendChild(p)
}


// cursos.forEach((el)=>{
//     console.log(el)
// })

// let meuArray = [1, 2, 3, 4, 5];


// let i = 0;

// while (i < meuArray.length) {
//     console.log(meuArray[i]); 
//     i++; 
// }
