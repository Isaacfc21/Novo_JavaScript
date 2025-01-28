import { Login } from "./login.js";
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
    Cxmsg.mostrar(config,"ERRO","Login não efetuado! Usuário ou senha incorretos.");;
};
Login.login(callback_ok,callback_naook);