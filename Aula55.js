const caixa = document.querySelector('#caixa')

let musicas = new Set(['musica 1', 'musica boa', 'musica 10'])

musicas.add('musica muito legal')
musicas.add('musica 1')
musicas.add('musica 1')
musicas.add('musica 10')

musicas.delete('musica 1')
musicas.clear()

console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML+=el + '<br/>' 
// })

for(m of musicas){
    caixa.innerHTML+=m + '<br/>'
}
