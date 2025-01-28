const btn_soma=document.querySelector("#btn_soma")
const btn_subtracao=document.querySelector("#btn_subtracao")
const btn_mult=document.querySelector("#btn_mult")
const btn_divisao=document.querySelector("#btn_divisao")
const res=document.querySelector("#res")

const op=[
    ()=>{
        const valor1 = Number(document.querySelector("#valor1").value)
        const valor2 = Number(document.querySelector("#valor2").value)
        res.value= valor1 + valor2
    },
    ()=>{
        const valor1 = Number(document.querySelector("#valor1").value)
        const valor2 = Number(document.querySelector("#valor2").value)
        res.value= valor1-valor2
    },
    ()=>{
        const valor1 = Number(document.querySelector("#valor1").value)
        const valor2 = Number(document.querySelector("#valor2").value)
        res.value= valor1*valor2
    },
    ()=>{
        const valor1 = Number(document.querySelector("#valor1").value)
        const valor2 = Number(document.querySelector("#valor2").value)
        res.value= valor1/valor2
    }
]
btn_soma.addEventListener("click",op[0])
btn_subtracao.addEventListener("click",op[1])
btn_mult.addEventListener("click",op[2])
btn_divisao.addEventListener("click",op[3])



// const op=[
//     ()=>{
//         const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
//         res.value=Number(val[0])+Number(val[1])
//     },
//     ()=>{
//         const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
//         res.value=Number(val[0])-Number(val[1])
//     },
//     ()=>{
//         const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
//         res.value=Number(val[0])*Number(val[1])
//     },
//     ()=>{
//         const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
//         res.value=Number(val[0])/Number(val[1])
//     }
// ]
// btn_soma.addEventListener("click",op[0])
// btn_subtracao.addEventListener("click",op[1])
// btn_mult.addEventListener("click",op[2])
// btn_divisao.addEventListener("click",op[3])


// let valores=[1,2]
// const op=[
//     (val)=>{
//        let res=0
//        for(v of val){
//           res+=v
//        }
//        return res
//     },
//     (val)=>{
//         let res=1
//         for(v of val){
//            res*=v
//         }
//         return res
//     },
//     (val)=>{
//         for(v of val){
//           console.log(v)
//         }
      
//     },


// ]
// // console.log(op[0](valores))
// op[2](valores)