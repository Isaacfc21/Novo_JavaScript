const lati = document.getElementById("lati")
const long = document.getElementById("long")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao,erroLocalizacao)
}else{
    console.log("Geolocalização não suportada")
}

function mostrarLocalizacao(pos){
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
}

function erroLocalizacao(){
    console.log("Erro ao obter a localização")
}
