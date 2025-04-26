class Login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estilo_css = null;
    static callback_ok = null;
    static callback_naook = null; 
    static config={
        cor: null, //"048",
        img: null, //"logo.png",
        endpoint: null //"https://72fa6cf3-4535-4ccb-b924-ff4dda224448-00-r3vezqr20d6f.spock.replit.dev/"
    }

    static login=(callback_ok,callback_naook,config)=>{
        this.config = config;
        this.callback_ok = () =>{callback_ok()};
        this.callback_naook = () =>{callback_naook()};

        this.estilo_css=
        ".fundoLogin{display: flex; justify-content: center;align-items: center; width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.75);box-sizing: border-box;}"+
        ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 40%;box-sizing: inherit;}"+
        ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 50%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        ".logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
        ".logoLogin img{width: 70%;box-sizing: inherit;}"+
        ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px}"+
        ".campoLogin label{font-size: 18px;}"+
        ".campoLogin input{width: 100%;font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;}"+
        ".botoesLogin{display: flex;width: 100%;justify-content: space-around;align-items: center;box-sizing: inherit;}"+
        `.botoesLogin button{cursor: pointer;background-color: #${this.config.cor}; color: #fff;border-radius: 5px;padding: 10px;width: 100px;box-sizing: inherit;}`
        
        
        

        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id","id_estiloLogin");
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML=this.estilo_css;
        document.head.appendChild(styleEstilo)

        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute("id", "fundoLogin");
        fundoLogin.setAttribute("class", "fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id", "baseLogin");
        baseLogin.setAttribute("class", "baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin = document.createElement("div");
        elementosLogin.setAttribute("id", "elementosLogin");
        elementosLogin.setAttribute("class", "elementosLogin");
        baseLogin.appendChild(elementosLogin);

        const campoLoginUsername = document.createElement("div");
        campoLoginUsername.setAttribute("id", "campoLoginUsername");
        campoLoginUsername.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername = document.createElement("label");
        labelUsername.setAttribute("id", "labelUsername");
        labelUsername.innerHTML="Username"
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername = document.createElement("input");
        inputUsername.setAttribute("id", "f_username");
        inputUsername.setAttribute("type", "text");
        inputUsername.setAttribute("name", "f_username");
        inputUsername.addEventListener("keydown", (evt) => {
            if(evt.code ==="ArrowDown"){
                inputSenha.focus();
            };
        });
        campoLoginUsername.appendChild(inputUsername);

        const campoLoginSenha = document.createElement("div");
        campoLoginSenha.setAttribute("id", "campoLoginSenha");
        campoLoginSenha.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLoginSenha);

        const labelSenha = document.createElement("label");
        labelSenha.setAttribute("id", "labelSenha");
        labelSenha.innerHTML="Senha"
        campoLoginUsername.appendChild(labelSenha);

        const inputSenha = document.createElement("input");
        inputSenha.setAttribute("id", "f_senha");
        inputSenha.setAttribute("type", "password");
        inputSenha.setAttribute("name", "f_senha");
        inputSenha.addEventListener("keydown", (evt) => {
            if(evt.code ==="ArrowUp"){
                inputUsername.focus();
            };
        });
        campoLoginUsername.appendChild(inputSenha);

        const botoesLogin = document.createElement("div");
        botoesLogin.setAttribute("id", "botoesLogin");
        botoesLogin.setAttribute("class", "botoesLogin");
        elementosLogin.appendChild(botoesLogin);

        const btn_login = document.createElement("button");
        btn_login.setAttribute("id", "btn_login");
        btn_login.innerHTML="Login"
        btn_login.addEventListener("click", (evt) => {
            this.verificalogin()
        });
        botoesLogin.appendChild(btn_login);

        const btn_cancelar = document.createElement("button");
        btn_cancelar.setAttribute("id", "btn_cancelar");
        btn_cancelar.innerHTML="Cancelar"
        btn_cancelar.addEventListener("click", (evt) => {
            this.fechar();
        });
        botoesLogin.appendChild(btn_cancelar);

        const logoLogin = document.createElement("div");
        logoLogin.setAttribute("id", "logoLogin");
        logoLogin.setAttribute("class", "logoLogin");
        baseLogin.appendChild(logoLogin);

        const imglogoLogin = document.createElement("img");
        imglogoLogin.setAttribute("src", this.config.img)
        imglogoLogin.setAttribute("title", "CFB Cursos");
        logoLogin.appendChild(imglogoLogin);

    };

    static verificalogin = () => {
        const mat = document.getElementById("f_username");
        const pas = document.getElementById("f_senha");

        const valores = {
            "f_username": mat.value,
            "f_username": pas.value
        }
        const cabecalho = {
            method: 'POST',
            dados:JSON.stringify(valores)
        }

        const endpoint = `https://127.0.0.1:1880/add_username`

        fetch(endpoint,cabecalho)
        // .then(res=>res.json())
        .then(res=>{
            if(res.status=200){
                this.logado=true;
                this.matlogado=mat;
                this.nomelogado=res.nome;
                this.acessologado=res.acesso;
                this.callback_ok();
                this.fechar();
                console.log(res)
            }else{
                this.logado=false;
                this.matlogado=null;
                this.nomelogado=null;
                this.acessologado=null;
                this.callback_naook();
            }
        });
        // const mat = document.getElementById("f_username").value;
        // const pas = document.getElementById("f_senha").value;

        // const endpoint = `${this.config.endpoint}?matricula=${mat}&senha=${pas}`

        // fetch(endpoint)
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res){
        //         sessionStorage.setItem("logado","true");
        //         sessionStorage.setItem("matlogado",mat);
        //         sessionStorage.setItem("nomelogado",res.nome);
        //         sessionStorage.setItem("acessologado",res.acesso);
        //         this.callback_ok();
        //         this.fechar();   
        //         // this.logado=true;
        //         // this.matlogado=mat;
        //         // this.nomelogado=res.nome;
        //         // this.acessologado=res.acesso;
        //         this.callback_ok();
        //         this.fechar();
        //     }else{
        //         sessionStorage.setItem("logado","false");
        //         sessionStorage.setItem("matlogado","");
        //         sessionStorage.setItem("nomelogado","");
        //         sessionStorage.setItem("acessologado","");
        //         // this.logado=false;
        //         // this.matlogado=null;
        //         // this.nomelogado=null;
        //         // this.acessologado=null;
        //         this.callback_naook();
        //     }
        // });
    }
    static fechar = () => {
        const fundoLogin = document.querySelector("#fundoLogin");
        fundoLogin.remove();

        const id_estiloLogin = document.querySelector("#id_estiloLogin");
        id_estiloLogin.remove();
    }
};
// export{Login}; 