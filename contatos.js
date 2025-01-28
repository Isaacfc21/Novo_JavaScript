import {contatos} from "./bancoContatos.js";

let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato,destinoDOM){
        const cont={
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)

        destinoDOM.innerHTML=""
    
        contatos.forEach((c)=>{
            const div = document.createElement("div")
            div.setAttribute("class", "contato")
            const p_nome = document.createElement("p")
            p_nome.innerHTML=c.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML=c.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML=c.email
            const div2 = document.createElement("div")
            const btn_remover = document.createElement("button")
            btn_remover.setAttribute("class", "btn_remover")
            btn_remover.innerHTML="Remover"
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(div2)
            div.appendChild(btn_remover)
            destinoDOM.appendChild(div)

            btn_remover.addEventListener("click", () => {
                // Remover do array
                contatos.splice(contatos.indexOf(cont), 1)
                // Remover do DOM
                destinoDOM.removeChild(div)
                console.log(this.getTodosContatos())
            })
            
        })
    },
}

export default contato