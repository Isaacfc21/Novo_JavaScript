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

const criarnovocurso=(curso)=>{
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id", "c" + indice)
        novoElemento.setAttribute("class", "curso c1")
        novoElemento.innerHTML=curso
    
        const comandos=document.createElement("div")
        comandos.setAttribute('class', 'comandos')
        
        const rb=document.createElement("input")
        rb.setAttribute("type","radio")
        rb.setAttribute("name","rb_curso")
    
        comandos.appendChild(rb)
    
        novoElemento.appendChild(comandos)
        return novoElemento
}
cursos.map((el,chave)=>{
    const novoElemento=criarnovocurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})
const Radioselecionado=()=>{
    const todosradios=[...document.querySelectorAll("input[type=radio]")]
    const radioselecionados=todosradios.filter((ele,ind,array)=>{
         return ele.checked
     })
        return radioselecionados[0]
}

btn_CursosSelecionados.addEventListener("click", (evt)=>{
   const RsSelecionados=Radioselecionado()
   try{
    const cursoselecionado=RsSelecionados.parentNode.previousSibling.textContent
    alert("Curso Selecionado: " + cursoselecionado)
   }catch(ex){
    alert("Selecione um curso!")
   }
 
})
btn_remover_curso.addEventListener("click", (evt)=>{
    const RsSelecionados=Radioselecionado()
    if(RsSelecionados!=undefined){
      const cursoselecionado=RsSelecionados.parentNode.parentNode
      cursoselecionado.remove()
    }else{
      alert("Selecione um curso para ser removido!")
    }
})
btn_Adicionarnovocursoantes.addEventListener("click", (evt)=>{
    const RsSelecionados=Radioselecionado()
    try{
        if(nomeCurso.value!=""){
            const cursoselecionado=RsSelecionados.parentNode.parentNode
            const novoCurso=criarnovocurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoselecionado)
        }else{
            alert("Digite o nome do curso para ser inserido!")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
})
btn_Adicionarnovocursodepois.addEventListener("click", (evt)=>{
    const RsSelecionados=Radioselecionado()
    try{
        if(nomeCurso.value!=""){
            const cursoselecionado=RsSelecionados.parentNode.parentNode
            const novoCurso=criarnovocurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoselecionado.nextSibling)
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