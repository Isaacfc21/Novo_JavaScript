const p_array=document.querySelector("#array")
const btn_verificar=document.querySelector("#btnVerificar")
const p_resultado=document.querySelector("#resultado")

const elementosarray=[16,15,14,1,4,7,18]
p_array.innerHTML="["+elementosarray+"]"

btn_verificar.addEventListener("click", (evt)=>{
    const ret=elementosarray.some((e,i)=>{
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
