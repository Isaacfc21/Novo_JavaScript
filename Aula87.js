const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click", (evt) =>{
    // console.log(url.value) //funciona com o form comentado
    window.location=url.value
    // window.location="Aula01.html"
    // window.location="https://www.google.com.br"
    // window.location.replace("https://www.google.com.br") //remove do histórico corrente
    // window.location.assign("https://www.google.com.br") //não remove
    // window.location.reload()
    // window.history.back()
    // window.history.forward()
    // window.history.go(1)
    // console.log(window.history.length)
})