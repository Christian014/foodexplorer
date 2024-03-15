import { Container } from "./style";

import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TitleAndLogo } from "../../components/titleAndLogo";

import { api } from "../../services/api";


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState(null);
    const [button, setButton] = useState("Cadastrar")

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    async function stopDefAction(evt) {
        evt.preventDefault();
        setButton("Cadastrando")
        

        if(!name || !email || !password){
            return setAlert(<Alert severity="error">Preencha Todos os Campos</Alert>)
        }

        if(!validarEmail(email)){
            return setAlert(<Alert severity="error">E-mail inválido</Alert>)
        }
        
        if(password.length < 6){
            return setAlert(<Alert severity="error">Senha Invalida</Alert>)
        }

        setAlert(<Alert severity="success">Cadastrado com sucesso</Alert>)
        
        api.post("/register", {name, email, password})
        .then((res) => {

           if(res.status == 200){
                
            return window.location.href = "/";
                
           }
        })
        .catch((error => {
        
            
            alert("email ja está sendo utilizado", error)
            console.log(error)

        }));
        
      };

    return (
        <Container>

            <div className="container">

                <div className="titleAndLogo">

                    <TitleAndLogo />

                </div>

                <form>

                    <h1 className="h1-desktop">Crie Sua Conta</h1>

                    <div className="name">

                        <label>Seu Nome</label>
                        <Input placeholder="Exemplo: Maria da Silva" onChange={e => setName(e.target.value)}/>

                    </div>

                    <div className="email">

                        <label>Email</label>
                        <Input type="text" placeholder="Exemplo: exemplo@exemplo.com" onChange={e => setEmail(e.target.value)} />

                    </div>

                    <div className="password">

                        <label>Senha</label>
                        <Input type="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)} />


                    </div>
            
                    <div className="auth-buttons">
                        <Button id="bttCadastrar" onClick={(e) => {stopDefAction(e)}}>{button}</Button>
                        
                        <Link to="/">Ja tenho uma conta</Link>
                        {alert}
                    </div>
                </form>

            </div>

        </Container>
    )
}