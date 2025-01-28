const palco = document.querySelector("#palco")
const num_objetos = document.querySelector("#num_objetos")
const txt_qtde= document.querySelector("#txt_qtde")
const btn_add = document.querySelector("#btn_add")
const btn_remover = document.querySelector("#btn_remover")

let larguraPalco=palco.offsetWidth
let alturaPalco=palco.offsetHeight
let bolas=[]
let numBola=0
// Função global para controlar todas as bolas
const atualizarBolas = () => {
    bolas.forEach((bola) => {
        bola.controle_bordas()
        bola.px += bola.dirx * bola.velx
        bola.py += bola.diry * bola.vely
        bola.eu.style.left = `${bola.px}px`
        bola.eu.style.top = `${bola.py}px`

        // Remover bola se sair dos limites
        if (bola.px > larguraPalco || bola.py > alturaPalco) {
            bola.remover()
        }
    })
}

// Intervalo global para animação
setInterval(atualizarBolas, 10)

class Bola{
    constructor(arrayBolas,palco){
        this.tam = Math.floor(Math.random()*15)+10
        this.r =  Math.floor(Math.random()*255)
        this.g =  Math.floor(Math.random()*255)
        this.b =  Math.floor(Math.random()*255)
        this.px = Math.floor(Math.random()*(larguraPalco-this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco-this.tam))
        this.velx = Math.random()*2+0.5
        this.vely = Math.random()*2+0.5
        this.dirx = Math.random()*10>5?1:-1
        this.diry = Math.random()*10>5?1:-1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + "_" + Math.random().toString(36).substr(2, 9)
        this.desenhar()
        // this.controle=setInterval(this.controlar,10) //10 millisegundos
        this.eu=document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML=numBola
    }
    remover=()=>{
        // clearInterval(this.controle)
        bolas=bolas.filter((b)=>{
            if(b.id!=this.id){
                return b
            } 
        })
        this.eu.remove()
        numBola--
        num_objetos.innerHTML=numBola
    }
    desenhar = () => {
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.style.cssText = `
            left: ${this.px}px;
            top: ${this.py}px;
            width: ${this.tam}px;
            height: ${this.tam}px;
            background-color: rgb(${this.r}, ${this.g}, ${this.b})
        `
        this.palco.appendChild(div)
    }

    controle_bordas=()=>{
        if(this.px + this.tam >= larguraPalco){
            this.dirx = -1
        }else if(this.px <= 0){
            this.dirx = 1
        }
        if(this.py + this.tam >= alturaPalco){
            this.diry = -1
        }else if(this.py <= 0){
            this.diry = 1
        }
    }
    // controlar=()=>{
    //     this.controle_bordas()
    //     this.px+=this.dirx*this.velx
    //     this.py+=this.diry*this.vely
    //     this.eu.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
    //     if((this.px > larguraPalco)||(this.py > alturaPalco)){ 
    //         this.remover()
    //     }
    // }
}

btn_add.addEventListener("click", (evt)=>{
    const qtde = txt_qtde.value
    for(let i=0;i<qtde;i++){
        //Instanciar novas bolinhas
        bolas.push(new Bola(bolas,palco))
    }
})
btn_remover.addEventListener("click", (evt)=>{
    bolas.map((b)=>{
        //Remover a bolinha
        b.remover()
        txt_qtde.value=0
    })
})
window.addEventListener("resize",(evt)=>{
    larguraPalco=palco.offsetWidth
    alturaPalco=palco.offsetHeight
})
    // class Bola {
    //     constructor(arrayBolas, palco) {
    //         this.tam = Math.floor(Math.random() * 15) + 10;
    //         this.r = Math.floor(Math.random() * 255);
    //         this.g = Math.floor(Math.random() * 255);
    //         this.b = Math.floor(Math.random() * 255);
    //         this.px = Math.floor(Math.random() * (larguraPalco - this.tam));
    //         this.py = Math.floor(Math.random() * (alturaPalco - this.tam));
    //         this.velx = Math.random() * 2 + 0.5;
    //         this.vely = Math.random() * 2 + 0.5;
    //         this.dirx = Math.random() > 0.5 ? 1 : -1;
    //         this.diry = Math.random() > 0.5 ? 1 : -1;
    //         this.palco = palco;
    //         this.arrayBolas = arrayBolas;
    //         this.id = Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    
    //         this.desenhar();
    //         this.eu = document.getElementById(this.id);
    //         numBola++;
    //         num_objetos.innerHTML = numBola;
    //     }
    
    //     remover = () => {
    //         bolas = bolas.filter((b) => b.id !== this.id);
    //         this.eu.remove();
    //         numBola--;
    //         num_objetos.innerHTML = numBola;
    //     };
    
    //     desenhar = () => {
    //         const div = document.createElement("div");
    //         div.setAttribute("id", this.id);
    //         div.setAttribute("class", "bola");
    //         div.style.cssText = `
    //             left: ${this.px}px;
    //             top: ${this.py}px;
    //             width: ${this.tam}px;
    //             height: ${this.tam}px;
    //             background-color: rgb(${this.r}, ${this.g}, ${this.b});
    //         `;
    //         this.palco.appendChild(div);
    //     };
    
    //     controle_bordas = () => {
    //         if (this.px + this.tam >= larguraPalco) {
    //             this.dirx = -1;
    //         } else if (this.px <= 0) {
    //             this.dirx = 1;
    //         }
    //         if (this.py + this.tam >= alturaPalco) {
    //             this.diry = -1;
    //         } else if (this.py <= 0) {
    //             this.diry = 1;
    //         }
    //     };
    // }
    
    // // Adicionar bolas
    // btn_add.addEventListener("click", () => {
    //     const qtde = txt_qtde.value;
    //     for (let i = 0; i < qtde; i++) {
    //         bolas.push(new Bola(bolas, palco));
    //     }
    // });
    
    // // Remover todas as bolas
    // btn_remover.addEventListener("click", () => {
    //     bolas.forEach((b) => b.remover());
    //     txt_qtde.value=0
    // });
    
    // // Atualizar dimensões do palco no redimensionamento
    // window.addEventListener("resize", () => {
    //     larguraPalco = palco.offsetWidth;
    //     alturaPalco = palco.offsetHeight;
    // });