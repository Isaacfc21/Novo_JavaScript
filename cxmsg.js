class Cxmsg{
    static cor="#888"
    static destino=null
    static divmsg=null
    static tipo = null
    static comando_sn = null
    static textos = []

    static mostrar=(config,titulo,texto)=>{
        this.titulo= titulo
        this.destino= document.body
        this.textos = config.textos
        this.texto= texto
        this.cor=config.cor
        this.tipo = config.tipo
        this.comando_sn = () => {config.comando_sn()}
        this.divmsg = document.createElement("div")
        const estilo_divmsg = 
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.5);"+
            "z-index: 9999999";+
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const areaCxmsg= document.createElement("div")

        const estilo_areaCxmsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"

        areaCxmsg.setAttribute("id", "areaCxmsg")
        areaCxmsg.setAttribute("style", estilo_areaCxmsg)
        this.divmsg.appendChild(areaCxmsg)

        const tituloCxmsg = document.createElement("div")

        const estilo_tituloCxmsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: "+this.cor+";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"

        tituloCxmsg.setAttribute("id", "tituloCxmsg")
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg)
        tituloCxmsg.innerHTML=this.titulo
        areaCxmsg.appendChild(tituloCxmsg)

        const corpoCxmsg = document.createElement("div")

        const estilo_corpoCxmsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;"

        corpoCxmsg.setAttribute("id", "corpoCxmsg")
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg)
        corpoCxmsg.innerHTML=this.texto
        areaCxmsg.appendChild(corpoCxmsg)

        const rodapeCxmsg = document.createElement("div")

        const estilo_rodapeCxmsg = 
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"
            
        rodapeCxmsg.setAttribute("id", "rodapeCxmsg")
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg)
        areaCxmsg.appendChild(rodapeCxmsg)

        const btn_ok = document.createElement("button")

        const estilo_botaoCxmsg = 
            "background-color: "+this.cor+";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "text-transform: uppercase;"

        if(this.tipo=="ok"){
            btn_ok.setAttribute("id", "btn_ok")
            btn_ok.setAttribute("style", estilo_botaoCxmsg)
            btn_ok.addEventListener("click", (evt) => {
                this.ocultar()
            })
            rodapeCxmsg.appendChild(btn_ok)  
            btn_ok.innerHTML="ok"    
        }else if(this.tipo=="sn"){
            const btn_sim= document.createElement("button")
            btn_sim.setAttribute("id", "btn_sim")
            btn_sim.setAttribute("style", estilo_botaoCxmsg)
            btn_sim.addEventListener("click", (evt) => {
                this.comando_sn()
                this.ocultar()
            })
            rodapeCxmsg.appendChild(btn_sim)  
            btn_sim.innerHTML= this.textos[0]

            const btn_nao = document.createElement("button")
            btn_nao.setAttribute("id", "btn_nao")
            btn_nao.setAttribute("style", estilo_botaoCxmsg)
            btn_nao.addEventListener("click", (evt) => {
                this.ocultar()
            })
            rodapeCxmsg.appendChild(btn_nao)  
            btn_nao.innerHTML= this.textos[1]
        }
    }
    static ocultar=()=>{
        this.divmsg.remove()
    }
}

export {Cxmsg}