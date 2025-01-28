const p_array=document.querySelector("#array")
const btn_verificar=document.querySelector("#btnVerificar")
const p_resultado=document.querySelector("#resultado")

const elementosarray=[16,20,30,40,50,60,70]
p_array.innerHTML="["+elementosarray+"]"

btn_verificar.addEventListener("click", (evt)=>{
    const ret=elementosarray.every((e,i)=>{
        let indice_inicia= i+1
        if(e<18){
            p_resultado.innerHTML= "Array não conforme na posição: " + indice_inicia
        }
        return e>=18
    })
    if(ret){
        p_resultado.innerHTML= "OK"                                                                                                                                           
    }
})
