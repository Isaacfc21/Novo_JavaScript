const Pessoa={
    nome:"",
    idade:"",
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome=nome
    },
    setIdade:function(idade){
        this.idade=idade
    }
}

let pessoas = [];
const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const addPessoa = () => {
    res.innerHTML = "";
    pessoas.forEach((pessoa) => {
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome: ${pessoa.nome}<br/>Idade: ${pessoa.idade}`;
        res.appendChild(div);
    });
};


btn_add.addEventListener("click", () => {
    const f_nome = document.querySelector("#f_nome");
    const f_idade = document.querySelector("#f_idade");

    const novaPessoa = {
        nome: f_nome.value,
        idade: f_idade.value,
    };

    pessoas.push(novaPessoa);

    f_nome.value = "";
    f_idade.value = "";
    f_nome.focus();
    addPessoa();
});








// const Pessoa={
//     nome:"Isaac",
//     getNome:function(){
//         return this.nome
//     },
//     setNome:function(nome){
//         this.nome = nome
//     }
// }

// const p2 = Pessoa
// const p3 = Pessoa

// p3.nome = "Anibal"
// p2["nome"]="Bridgertrudinsolmelda"

// p2.setNome("Raí")

// console.log(Pessoa.nome)
// console.log(p2.nome)
// console.log(p2.getNome())
// console.log(p3.nome)