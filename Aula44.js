const caixaCursos=document.querySelector("#caixacursos")
const btn_c=document.querySelectorAll(".curso")
const c1_2=document.querySelector("#c1_2")
const cursos=["Medicina","Advogacia","Gastronomia","Progamação","TI","Veterinário","Engenharia"]
const btn_CursosSelecionados=document.getElementById("btnCursosSelecionados")
const btn_remover_curso=document.getElementById("btn_remover_curso")

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute('class', 'comandos')
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)

  
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
 





 // const cursoselecionado=radiosselecionados.parentNode.parentNode.firstChild.textContent
    // console.log(cursoselecionado)
    // console.log(todosradios)
    // console.log(radiosselecionados)