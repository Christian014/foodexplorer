import { Container } from "./style";

import { Link, redirect } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TitleAndLogo } from "../../components/titleAndLogo";

import { api } from "../../services/api";


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    //tirando o default do button e chamando os states funcao handleSignUp
    async function stopDefAction(evt) {
        evt.preventDefault();
        console.log("click")
        console.log(name, email, password)

        if(!name || !email || !password){
            return alert("Preencha Todos os Campos")
        }
        if(password.length < 6){
            return alert("senha invalida")
        }
        api.post("/register", {name, email, password})
        .then((res) => {

           if(res.status == 200){
               
                alert("cadastrado com sucesso")

                return <redirect to ="/"/>

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
                        <Button id="bttCadastrar" onClick={(e) => {stopDefAction(e)}}>Cadastrar</Button>
                        
                        <Link to="/">Ja tenho uma conta</Link>
                    </div>
                </form>

            </div>

        </Container>
    )
}