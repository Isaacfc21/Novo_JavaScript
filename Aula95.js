import c  from "./cursos4.js";

console.log(c.getTodosCursos())
console.log("Aguarde...")

const promessa = () =>{
    return new Promise((resolve,reject)=>{
        let resultado = false 
        let tempo = 3000
        setTimeout(()=>{
            resultado = true
            if(resultado){
                resolve(c.addCurso("Photoshop"))
                resolve(c.getTodosCursos())
                resolve("Deu tudo certo")
            }else{
                reject("Deu tudo errado")
            }  
        }, tempo)
    })
}
promessa()
    .then((cursos) => {
        console.log("Cursos atualizados:", c.getTodosCursos())
    })
    .catch((erro) => {
        console.error(erro)
    });
// c.addCurso("isaac")
// console.log(c.getTodosCursos())