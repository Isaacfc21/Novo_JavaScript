const div_data = document.querySelector("#div_data")
const div_relogio = document.getElementById("div_relogio")

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