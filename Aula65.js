const pessoa={
    nome:"Bruno",
    canal:"CFB Cursos",
    curso: "Javascript",
    aulas:{
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional",
    }
}
const string_pessoa = '{"nome":"Bruno","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'
const s_json_pessoa = JSON.stringify(pessoa)//Converte objeto em uma string JSON
const a_json_pessoa = JSON.parse(s_json_pessoa)//Converte um string JSON em um Objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(a_json_pessoa)
// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas.aula01)