const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=document.querySelectorAll(".curso")
const c1_2=document.querySelector("#c1_2")
const cursos=["Medicina","Advogacia","Gastronomia","Progamação","TI","Veterinário","Engenharia"]
const btn_CursosSelecionados=document.getElementById("btnCursosSelecionados")
const btn_remover_curso=document.getElementById("btn_remover_curso")
const nomeCurso=document.getElementById("nomeCurso")
const btn_Adicionarnovocursoantes=document.getElementById("btn_Adicionar_novocursoantes")
const btn_Adicionarnovocursodepois=document.getElementById("btn_Adicionar_novocursodepois")
let indice=0
const maxCursos = 9

const Tirarselecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
         el.classList.remove("selecionado")
    })
}
const criarnovocurso=(curso)=>{
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id", "c" + indice)
        novoElemento.setAttribute("class", "curso c1")
        novoElemento.innerHTML=curso
        novoElemento.addEventListener("click",(evt)=>{
            Tirarselecao()
            evt.target.classList.toggle("selecionado")
        })
        return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarnovocurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})
const Cursoselecionado=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
        return cursosSelecionados[0]
}
btn_CursosSelecionados.addEventListener("click", (evt)=>{
   try{
    alert("Curso Selecionado: " + Cursoselecionado().innerHTML)
   }catch(ex){
    alert("Selecione um curso!")
   }
 
})
btn_remover_curso.addEventListener("click", (evt)=>{
    const cs=Cursoselecionado()
    if(cs!=undefined){
      cs.remove()
    }else{
      alert("Selecione um curso para ser removido!")
    }
})
btn_Adicionarnovocursoantes.addEventListener("click", (evt)=>{
    try{
        if(caixaCursos.childElementCount >= maxCursos){
            alert("Você atingiu o limite máximo de 9 cursos")
            return
        }
        if(nomeCurso.value!=""){
            const novoCurso=criarnovocurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,Cursoselecionado())
        }else{
            alert("Digite o nome do curso para ser inserido!")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
})
btn_Adicionarnovocursodepois.addEventListener("click", (evt)=>{
    try{
        if(caixaCursos.childElementCount >= maxCursos){
            alert("Você atingiu o limite máximo de 9 cursos")
            return
        }
        if(nomeCurso.value!=""){
            const novoCurso=criarnovocurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,Cursoselecionado().nextSibling)
        }else{
            alert("Digite o nome do curso para ser inserido!")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
})






 // const cursoselecionado=radiosselecionados.parentNode.parentNode.firstChild.textContent
    // console.log(cursoselecionado)
    // console.log(todosradios)
    // console.log(radiosselecionados)