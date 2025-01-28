const p_array=document.querySelector("#array")
const btn_reduzir=document.querySelector("#btnReduzir")
const p_resultado=document.querySelector("#resultado")

const elementosarray=[1,2,3,4,5]
let ant=[]
let atu=[]
let dob=[]

p_array.innerHTML="["+elementosarray+"]"

btn_reduzir.addEventListener('click',(evt)=>{
    dob.push(elementosarray[0]*2)
     p_resultado.innerHTML=elementosarray.reduce((anterior,atual,posicao)=>{
        ant.push(anterior)
        atu.push(atual)
        dob.push(atual*2)
          return atual+anterior
     })
     p_resultado.innerHTML+= "<br/>V.anterior :" + ant+ "<br/>V.atual: " + atu + "<br/>dobro : " + dob
})