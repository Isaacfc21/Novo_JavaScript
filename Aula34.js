// const c1=document.getElementById("c1")ou
const elementos=[...document.querySelectorAll(".elementos")]
        elementos.map((el)=>{
            el.addEventListener('click',(evt)=>{
            const el= evt.target
            el.classList.add("destaque")
            alert(el.id + ' foi clicado ')
            // alert(el.innerHTML + ' foi clicado ')
            console.log(evt.target)
        })
    })

// const msg=()=>{
//     alert("clicou")
// }


        

   
// 

// elementos.addEventListener("click",(evt)=>{
//    const el= evt.target
//    el.classList.add("destaque")
// })