const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const display = document.querySelector(".display")
const tcpy = document.getElementById("tcpy")
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")
const tseparador = document.getElementById("tseparador")
const teste = document.getElementById("teste")
const calc_aba = document.getElementById("calc_aba")
const calc = document.getElementById("calc")
const img_aba_calc = document.getElementById("img_aba_calc")
let numMax = 18

let sinal = false
let decimal = false
let desligar = false


teclasNum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        if (display.innerHTML.length >= numMax) {
            alert("O número máximo de números foi atingido")
            return
        }
        sinal=false
        if(display.innerHTML==0){
            display.innerHTML=""
        }
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal = true
                if(display.innerHTML==0){
                    display.innerHTML="0,"
                }
                else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            display.innerHTML+=evt.target.innerHTML
        }
    })
})
teclasOp.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal=true
            decimal = false
            if(display.innerHTML==0){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML        
            }
        }
    })
})
tlimpar.addEventListener("click", (evt)=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
})
tigual.addEventListener("click", (evt)=>{
    sinal=false
    decimal=false
    const res = eval(display.innerHTML)
    display.innerHTML=res
})
tcpy.addEventListener("click", (evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
    // teste.select()
    // teste.setSelectionRange(0,99999999)//Mobile
    // navigator.clipboard.writeText(teste.value)
})
calc_aba.addEventListener("click", (evt)=>{
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        img_aba_calc.setAttribute("src","seta_para_esquerda.png")
    }else{
        img_aba_calc.setAttribute("src","seta_para_direita.png")
    }
})










// ton.addEventListener("click", (evt)=>{
    // display.innerHTML=0
    // if(!sinal){
    //     sinal=true
    //     if(display.innerHTML==0){
    //         display.innerHTML=""
    //     }
    //     if(evt.target.innerHTML=="x"){
    //         display.innerHTML+="*"
    //     }else{
    //         display.innerHTML+=evt.target.innerHTML        
    //     }
    // }
    





    // if(ton.innerHTML=="ON"){
    //     ton.innerHTML="OFF"
    //     ton.setAttribute("class", "off")    
    //     display.innerHTML=0
    // }
    // else if(ton.innerHTML=="OFF"){
    //     ton.innerHTML="ON"
    //     ton.setAttribute("class","teclaOp")   
    // }
    // const isOn = ton.classList.toggle("off")
    // ton.innerHTML = isOn ? "OFF" : "ON"
    // ton.classList.toggle("teclaOp", !isOn)
    
// })




// console.log(teclasNum)
// console.log(teclasOp)
// console.log(teclasRes)