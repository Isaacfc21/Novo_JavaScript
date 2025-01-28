const caixaCursos=document.querySelector("#caixacursos")
const btn_c=document.querySelectorAll(".curso")
const c1_2=document.querySelector("#c1_2")
const cursos=["Medicina","Advogacia","Gastronomia","Progamação","TI","Veterinário","Engenharia"]
const btn_CursosSelecionados=document.getElementById("btnCursosSelecionados")

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
btn_CursosSelecionados.addEventListener("click", (evt)=>{
    const todosradios=[...document.querySelectorAll("input[type=radio]")]
    let radiosselecionados=todosradios.filter((ele,ind,array)=>{
            return ele.checked
    })
    radiosselecionados=radiosselecionados[0]
    const cursoselecionado=radiosselecionados.parentNode.previousSibling.textContent
    alert("Curso Selecionado: " + cursoselecionado)
})
    // const cursoselecionado=radiosselecionados.parentNode.parentNode.firstChild.textContent
    // console.log(cursoselecionado)
    // console.log(todosradios)
    // console.log(radiosselecionados)

// parentNode
//childNodes[nodenumber]
//firstChild
//LastChild
//nextSibling
//previousSibling

