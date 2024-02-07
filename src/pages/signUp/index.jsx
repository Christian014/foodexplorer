import { Container } from "./style";

import { Link } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TitleAndLogo } from "../../components/titleAndLogo";



export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignUp(){
        console.log(name, email, password)
    }

    function stopDefAction(evt) {
        evt.preventDefault();
        console.log("click")
      }
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
                        <Input placeholder="Exemplo: Maria da Silva" onChange={(e) => setName(e.target.value)}/>

                    </div>

                    <div className="email">

                        <label>Email</label>
                        <Input placeholder="Exemplo: exemplo@exemplo.com" onChange={(e) => setEmail(e.target.value)} />

                    </div>

                    <div className="password">

                        <label>Senha</label>
                        <Input placeholder="No mínimo 6 caracteres"  onChange={(e) => setPassword(e.target.value)}/>


                    </div>
            
                    <div className="auth-buttons">
                        <Button id="bttCadastrar" onClick={(e) => {stopDefAction(e); handleSignUp();}}>Cadastrar</Button>
                        
                        <Link to="/signIn">Ja tenho uma conta</Link>
                    </div>
                </form>

            </div>

        </Container>
    )
}