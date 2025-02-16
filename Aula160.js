const configdgv ={
    endpoint :"http://127.0.0.1:1880/produtos",
    idDestino: "dgvDados", 
};

const dgv = (configdgv) => {
    const dgvDados = document.getElementById(configdgv.idDestino)
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

           const imgDelete = document.createElement("img");
           imgDelete.setAttribute("class", "dgvIcone");
           imgDelete.setAttribute("src", "lixeira.svg");
           imgDelete.addEventListener("click", (evt) => {
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                const linha = evt.target.parentNode.parentNode;
                const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`;
                fetch(endpoint)
                .then(res=>{
                    if(res.status==200){
                        linha.remove();
                    };
                });
           });
           c5.appendChild(imgDelete);

           const imgEditar = document.createElement("img");
           imgEditar.setAttribute("class", "dgvIcone");
           imgEditar.setAttribute("src", "editar.svg");
           c5.appendChild(imgEditar);

           imgEditar.addEventListener("click", (evt) => {
                document.querySelector("#janelaEditar").classList.remove("ocultar");
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint = `http://127.0.0.1:1880/produto/${id}`;
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    document.querySelector("#f_ideditar").value=res[0].n_id_produto;
                    document.querySelector("#f_produtoeditar").value=res[0].s_nome_produto;
                    document.querySelector("#f_marcaeditar").value=res[0].s_marca_produto;
                    document.querySelector("#f_modeloeditar").value=res[0].s_modelo_produto;
                });
            });

           const imgExibir = document.createElement("img");
           imgExibir.setAttribute("class", "dgvIcone");
           imgExibir.setAttribute("src", "exibir.svg");
           c5.appendChild(imgExibir);

           imgExibir.addEventListener("click", (evt) => {
                document.querySelector(".janelaView").classList.remove("ocultar");
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint = `http://127.0.0.1:1880/produto/${id}`;
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    document.querySelector("#f_id").value=res[0].n_id_produto;
                    document.querySelector("#f_produto").value=res[0].s_nome_produto;
                    document.querySelector("#f_marca").value=res[0].s_marca_produto;
                    document.querySelector("#f_modelo").value=res[0].s_modelo_produto;
                });
           });

           const imgAdicionar = document.createElement("img");
           imgAdicionar.setAttribute("class", "dgvIcone");
           imgAdicionar.setAttribute("src", "adicionar.svg");
           c5.appendChild(imgAdicionar);

           imgAdicionar.addEventListener("click", (evt) => {
                document.querySelector("#janelaAdicionar").classList.remove("ocultar");
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint = `http://127.0.0.1:1880/produto/${id}`;
                fetch(endpoint)
                .then(res=>res.json())
                // .then(res=>{
                //     // document.querySelector("#f_idadicionar").value=res[0].n_id_produto;
                //     // document.querySelector("#f_produtoadicionar").value=res[0].s_nome_produto;
                //     // document.querySelector("#f_marcaadicionar").value=res[0].s_marca_produto;
                //     // document.querySelector("#f_modeloadicionar").value=res[0].s_modelo_produto;
                // });
           })
        })
    });
};
dgv(configdgv);

document.querySelector("#btn_ok").addEventListener("click", (evt) => {
    document.querySelector(".janelaView").classList.add("ocultar");
});
document.querySelector("#btn_cancelar1").addEventListener("click", (evt) => {
    document.querySelector("#janelaEditar").classList.add("ocultar");
});
document.querySelector("#btn_cancelar2").addEventListener("click", (evt) => {
    document.querySelector("#janelaAdicionar").classList.add("ocultar");
});
document.querySelector("#btn_gravar").addEventListener("click", (evt) => {
    const id = document.querySelector("#f_ideditar").value;
    const produto = document.querySelector("#f_produtoeditar").value;
    const marca = document.querySelector("#f_marcaeditar").value;
    const modelo = document.querySelector("#f_modeloeditar").value;
    const endpoint = `http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            document.querySelector("#janelaEditar").classList.add("ocultar");         
            dgv(configdgv);
        }else{
            alert("Erro ao atualizar");
        };
    })
});

document.querySelector("#btn_adicionar").addEventListener("click", (evt) => {
    const id = document.querySelector("#f_idadicionar").value;
    const produto = document.querySelector("#f_produtoadicionar").value;
    const marca = document.querySelector("#f_marcaadicionar").value;
    const modelo = document.querySelector("#f_modeloadicionar").value;
    const endpoint = `http://127.0.0.1:1880/adicionarproduto/${id}/${produto}/${marca}/${modelo}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            document.querySelector("#janelaAdicionar").classList.add("ocultar");         
            dgv(configdgv);
        }else{
            alert("Erro ao calcular");
        }
    })
});




// document.querySelector("#btn_adicionar").addEventListener("click", async () => {
//     const id = document.querySelector("#f_idadicionar").value.trim();
//     const produto = document.querySelector("#f_produtoadicionar").value.trim();
//     const marca = document.querySelector("#f_marcaadicionar").value.trim();
//     const modelo = document.querySelector("#f_modeloadicionar").value.trim();

//     if (!id || !produto || !marca || !modelo) {
//         alert("Preencha todos os campos antes de adicionar!");
//         return;
//     }

//     let existe = false;

//     // Percorre todas as linhas do DataGridView verificando se pelo menos um campo já existe
//     document.querySelectorAll("#dgvDados .dgvLinha").forEach(linha => {
//         const colunas = linha.querySelectorAll("div.coluna");
//         if (
//             colunas[0].innerText.trim() === id ||  // ID já existe
//             colunas[1].innerText.trim() === produto || // Produto já existe
//             colunas[2].innerText.trim() === marca || // Marca já existe
//             colunas[3].innerText.trim() === modelo // Modelo já existe
//         ) {
//             existe = true;
//         }
//     });

//     if (existe) {
//         alert("Erro: Pelo menos um dos campos já está cadastrado!");
//         return;
//     }

//     const endpoint = `http://127.0.0.1:1880/adicionarproduto/${id}/${produto}/${marca}/${modelo}`;
    
//     try {
//         const res = await fetch(endpoint);
        
//         if (res.ok) {
//             document.querySelector("#janelaAdicionar").classList.add("ocultar");
//             dgv(configdgv); // Atualiza o DataGridView
//         } else {
//             alert("Erro ao adicionar o produto!");
//         }
//     } catch (error) {
//         console.error("Erro na requisição:", error);
//         alert("Falha na conexão com o servidor.");
//     }
// });









{/* <div id="dgvLinha" class="dgvLinha">
<div class="c1">01</div>
<div class="c2">Processador</div>
<div class="c3">Intel</div>
<div class="c4">i7</div>
<div class="c5">D E V</div>
</div>  */}