const btn_cancelar = document.querySelector("#btn_cancelar")
const elementosForm = document.querySelector("#elementosForm")
const adicionar_c = document.querySelector(".adicionar_c")
const btn_gravar = document.querySelector("#btn_gravar")
const add_circle = document.querySelector("#add_circle")

const configdgv = {
    endpoint: "http://127.0.0.1:1880/dados_usuario",
}

const dgv_usuario = (configdgv) => {
    const dgvUsurio = document.getElementById("dgvUsuario")
    const dgvTitulos = document.createElement("div")
    dgvTitulos.setAttribute("id", "dgvTitulos")
    dgvTitulos.setAttribute("class", "dgvTitulos")

    const id = document.createElement("div")
    id.setAttribute("class", "c1")
    id.innerHTML="ID"
    dgvTitulos.appendChild(id)

    const nome = document.createElement("div")
    nome.setAttribute("class", "c2")
    nome.innerHTML="Nome"
    dgvTitulos.appendChild(nome)

    const celular = document.createElement("div")
    celular.setAttribute("class", "c3")
    celular.innerHTML="Celular"
    dgvTitulos.appendChild(celular)

    const email = document.createElement("div")
    email.setAttribute("class", "c4")
    email.innerHTML="Email"
    dgvTitulos.appendChild(email)

    const data_n = document.createElement("div")
    data_n.setAttribute("class", "c5")
    data_n.innerHTML="Data de Nascimento"
    dgvTitulos.appendChild(data_n)

    dgvUsurio.prepend(dgvTitulos)

    dgvDados.innerHTML="";
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res =>{
        console.log(res)
        res.forEach(el=>{
           const dgvLinha = document.createElement("div");
           dgvLinha.setAttribute("class", "dgvLinha");
           dgvDados.appendChild(dgvLinha);

           const c1 = document.createElement("div");
           c1.setAttribute("class", " coluna c1");
           c1.innerHTML=el.n_id_produto;
           dgvLinha.appendChild(c1);

           const c2 = document.createElement("div");
           c2.setAttribute("class", " coluna c2");
           c2.innerHTML=el.s_nome_produto;
           dgvLinha.appendChild(c2);

           const c3 = document.createElement("div");
           c3.setAttribute("class", "coluna c3");
           c3.innerHTML=el.s_marca_produto;
           dgvLinha.appendChild(c3);

           const c4 = document.createElement("div");
           c4.setAttribute("class", "coluna c4");
           c4.innerHTML=el.s_modelo_produto;
           dgvLinha.appendChild(c4);

           const c5 = document.createElement("div");
           c5.setAttribute("class", "coluna c5");
           dgvLinha.appendChild(c5);
        });
    });
};

btn_cancelar.addEventListener("click", (evt)=> {
    elementosForm.setAttribute("class", "ocultar")
})

btn_gravar.addEventListener("click", (evt)=> {
    elementosForm.setAttribute("class", "ocultar")
    adicionar_c.remove()
    dgv_usuario(configdgv)
})

add_circle.addEventListener("click", (evt)=> {
    elementosForm.setAttribute("class", "elementosForm")
})