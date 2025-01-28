const endpoint = "https://e988789c-33e5-4fc7-9a80-d61d281f0568-00-2suihr0g45i9h.worf.replit.dev/"

fetch(endpoint)

.then(res=>{
    return res.json()
})

.then(dados=>{
    console.log(dados)
})