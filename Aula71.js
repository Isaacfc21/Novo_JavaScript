const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")

let sinal = false


teclasNum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        if(display.innerHTML==0){
            display.innerHTML=""
        }
        display.innerHTML+=evt.target.innerHTML
    })
})
teclasOp.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal=true
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
    display.innerHTML=0
})
ton.addEventListener("click", (evt)=>{
    display.innerHTML=0





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
    
})




// console.log(teclasNum)
// console.log(teclasOp)
// console.log(teclasRes)