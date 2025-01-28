const f_nome = document.querySelector("#f_nome")
const f_descricao = document.querySelector("#f_descricao")
const f_valor = document.querySelector("#f_valor")
const f_tipoSim = document.querySelector("#f_tipoSim")
const f_tipoNao = document.querySelector("#f_tipoNao")
const btn_addProduto = document.querySelector("#btn_addProduto") 
const produtos = document.querySelector("#produtos") 
let a_produtos = []

const gerenciarExibicaoProdutos = () => {
    a_produtos.sort((a, b) => a.valor - b.valor)

    produtos.innerHTML = ""
    a_produtos.forEach((p) => {
        const div = document.createElement("div")
        div.setAttribute("class", "produto")
        div.innerHTML = `Nome: ${p.nome} <br/>`
        div.innerHTML += `Descrição: ${p.descricao} <br/>`
        div.innerHTML += `Valor: ${p.valor} <br/>`
        div.innerHTML += `Disponivel: ${p.disponivel} <br/>`

        const btnCadastrar = document.createElement("button")
        btnCadastrar.innerHTML = "Cadastrar"
        btnCadastrar.setAttribute("class", "btnCadastrar")
        btnCadastrar.addEventListener("click", (evt) => {
            f_nome.value = p.nome
            f_descricao.value = p.descricao
            f_valor.value = p.valor
            f_tipoSim.checked = p.disponivel === "Sim"
            f_tipoNao.checked = p.disponivel === "Não"
        })
        div.appendChild(btnCadastrar)
        produtos.appendChild(div)
    })
}

btn_addProduto.addEventListener("click", (evt)=>{
    evt.preventDefault()
    if(a_produtos.length==6){
        alert("Limite máximo de produtos atingido")
        return
    }
    if(
        f_nome.value.trim() === "" || 
        f_descricao.value.trim() === "" || 
        isNaN(parseFloat(f_valor.value)) || 
        parseFloat(f_valor.value) <= 0
    ){
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    const disponivel = f_tipoSim.checked ? "Sim" : "Não"

    const produto = new Produto(
        f_nome.value.trim(),
        f_descricao.value.trim(),
        parseFloat(f_valor.value),
        disponivel
    )

    a_produtos.push(produto)
    gerenciarExibicaoProdutos()

    f_nome.value = ""
    f_descricao.value = ""
    f_valor.value = ""

})


class Produto{  
    constructor(nome,descricao,valor,disponivel){
        this.nome = nome
        this.descricao = descricao
        this.valor = valor
        this.disponivel = disponivel
    }
}