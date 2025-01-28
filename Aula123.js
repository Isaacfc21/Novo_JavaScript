const p_temp = document.querySelector("#p_temp")
const p_nivel = document.querySelector("#p_nivel")
const p_press = document.querySelector("#p_press")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click", (evt) => {
    obterDados()
})
const obterDados = () =>{
    const endpoint = "https://e988789c-33e5-4fc7-9a80-d61d281f0568-00-2suihr0g45i9h.worf.replit.dev/"
    fetch(endpoint)

    .then(res=>{
        return res.json()
    })

    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML = `Temperatura: ${dados.temperatura}`
        p_nivel.innerHTML = `Nível: ${dados.nivel}`
        p_press.innerHTML = `Pressão: ${dados.pressao}`

    })
}
// let intervalo = setInterval(obterDados,3000)
