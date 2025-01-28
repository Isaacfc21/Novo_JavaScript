const div_data = document.querySelector("#div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.querySelector("#btn_ativar")
const btn_desativar = document.getElementById("btn_desativar")
const tmp_alarme = document.querySelector("#tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.querySelector("#timer")

let som_alarme= new Audio("audio.mp3")
som_alarme.loop=-1

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener("click", (evt)=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual+(tmp_alarme.value*1000)
    alarme_ativado=true
    const dt_alarme = new Date(ts_alarme)
    let hor = dt_alarme.getHours()
    let min = dt_alarme.getMinutes()
    let seg = dt_alarme.getSeconds()
    seg = seg<10? "0" + seg:seg
    hor = hor<10? "0" + hor:hor
    min = min<10? "0" + min:min
    const alarme_c = "Hora do Alarme:"+hor+":"+min+":"+seg
    hora_alarme.innerHTML=alarme_c
})
btn_desativar.addEventListener("click", (evt)=>{
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML="Hora do Alarme:"
    tmp_alarme.value=0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0
})

const data = new Date()

let dia = data.getDate()
dia=dia<10? "0" + dia:dia
let mes = data.getMonth()
mes=mes<10? "0" + mes:mes
const data_r = dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML=data_r

const relogio = () =>{
    const data = new Date()
    let hora = data.getHours()
    hora=hora<10? "0" + hora:hora
    let minutos = data.getMinutes()
    minutos=minutos<10? "0" + minutos:minutos
    let segundos = data.getSeconds()
    segundos=segundos<10? "0" + segundos:segundos
    const hora_completa = hora+":"+minutos+":"+segundos
    div_relogio.innerHTML=hora_completa
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}
const intervalo = setInterval(relogio,1000)
relogio()




// console.log(new Date())
// console.log(Date.now()) //Timestemp

// console.log(data)
// console.log(`Dia: ${data.getDate()}`)
// console.log(data.getTime())
// console.log(data.toDateString())

// getDate() = Dia do Mês
// getDay() = Dia da Semana(número)
// GetFullYear() = Ano com 4 digitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos 
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define Horas
// setMinutes() = Define Minutos
// setSeconds() = Define Segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data