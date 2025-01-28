import { Cxmsg } from "./cxmsg.js";

const callback_ok = () =>{
    const config ={
        cor: "#48f",
        tipo: "ok", 
        textos: null,
        comando_sn: null
    };
    Cxmsg.mostrar(config,"Login","Login efetuado com sucesso!");
};
const callback_naook = () =>{
    const config ={
        cor: "#800",
        tipo: "ok", 
        textos: null,
        comando_sn: null
    };
    Cxmsg.mostrar(config,"ERRO","Login não efetuado! Usuário ou senha incorretos.");
};
const configLogin = {
    cor: "048",
    img: "logo.png",
    endpoint: "https://72fa6cf3-4535-4ccb-b924-ff4dda224448-00-r3vezqr20d6f.spock.replit.dev/"
};
Login.login(callback_ok,callback_naook,configLogin);