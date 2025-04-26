const btn_cancelar = document.querySelector("#btn_cancelar");
const elementosForm = document.querySelector("#elementosForm");
const adicionar_c = document.querySelector(".adicionar_c");
const btn_gravar = document.querySelector("#btn_gravar");
const add_circle = document.querySelector("#add_circle");

const configdgv = {
    endpoint: "http://127.0.0.1:1880/dados_usuario",
}

const dgv_usuario = (configdgv) => {
    const dgvUsuario = document.getElementById("dgvUsuario");

        const dgvDados = document.createElement("div");
        dgvDados.setAttribute("id", "dgvDados");
        dgvDados.setAttribute("class", "dgvDados");
        dgvUsuario.appendChild(dgvDados);
        dgvDados.innerHTML = ""; // Limpa os dados antigos
    
        dgvUsuario.innerHTML="";

        const dgvTitulos = document.createElement("div");
        dgvTitulos.setAttribute("id", "dgvTitulos");
        dgvTitulos.setAttribute("class", "dgvTitulos");

        const id_usuario = document.createElement("div");
        id_usuario.setAttribute("class", "c1");
        id_usuario.innerHTML = "ID";
        dgvTitulos.appendChild(id_usuario);

        const nome_usuario = document.createElement("div");
        nome_usuario.setAttribute("class", "c2");
        nome_usuario.innerHTML = "Nome";
        dgvTitulos.appendChild(nome_usuario);

        const celular_usuario = document.createElement("div");
        celular_usuario.setAttribute("class", "c3");
        celular_usuario.innerHTML = "Celular";
        dgvTitulos.appendChild(celular_usuario);

        const email_usuario = document.createElement("div");
        email_usuario.setAttribute("class", "c4");
        email_usuario.innerHTML = "Email";
        dgvTitulos.appendChild(email_usuario);

        const data_n_usuario = document.createElement("div");
        data_n_usuario.setAttribute("class", "c5");
        data_n_usuario.innerHTML = "Data de Nascimento";
        dgvTitulos.appendChild(data_n_usuario);

        dgvUsuario.appendChild(dgvTitulos);


    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res =>{
        console.log(res)
        res.forEach(el=>{
           const dgvLinha = document.createElement("div");
           dgvLinha.setAttribute("class", "dgvLinha");

           const c1 = document.createElement("div");
           c1.setAttribute("class", " coluna c1");
           c1.innerHTML=el.n_id_usuario;
           dgvLinha.appendChild(c1);

           const c2 = document.createElement("div");
           c2.setAttribute("class", " coluna c2");
           c2.innerHTML=el.s_nome_usuario;
           dgvLinha.appendChild(c2);

           const c3 = document.createElement("div");
           c3.setAttribute("class", "coluna c3");
           c3.innerHTML=el.s_telefone_usuario;
           dgvLinha.appendChild(c3);

           const c4 = document.createElement("div");
           c4.setAttribute("class", "coluna c4");
           c4.innerHTML=el.s_email_usuario;
           dgvLinha.appendChild(c4);

           const c5 = document.createElement("div");
           c5.setAttribute("class", "coluna c5");
           c5.innerHTML=el.s_data_usuario;
           dgvLinha.appendChild(c5);

           dgvDados.appendChild(dgvLinha);
           dgvUsuario.appendChild(dgvDados);
        });
    });
};

btn_gravar.addEventListener("click", (evt) => {
    elementosForm.setAttribute("class", "ocultar");

    const id = document.querySelector("#f_id").value;
    const nome = encodeURIComponent(document.querySelector("#f_nome").value);
    const telefone = encodeURIComponent(document.querySelector("#f_celular").value);
    const email = encodeURIComponent(document.querySelector("#f_email").value);
    const data = encodeURIComponent(document.querySelector("#f_dtnasc").value);

    const endpoint = `http://127.0.0.1:1880/addusuario/${id}/${nome}/${telefone}/${email}/${data}`;
    
    fetch(endpoint)
        .then(res => {
            if (res.status == 200) {
                dgv_usuario(configdgv);
            } else {
                alert("Erro ao Calcular");
            }
        });
});

btn_cancelar.addEventListener("click", (evt)=> {
    elementosForm.setAttribute("class", "ocultar");
});

add_circle.addEventListener("click", (evt)=> {
    elementosForm.setAttribute("class", "elementosForm");
});
dgv_usuario(configdgv)
