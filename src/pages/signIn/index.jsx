import { Container } from "./style";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TitleAndLogo } from "../../components/titleAndLogo";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignIn() {

    const { signIn } = useAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login(evt){
        signIn({ email, password });

        evt.preventDefault();

        if(!email || !password){
            return alert("digite todos os campos");
        }

        api.post("/login", {email, password})
        .then((res) => {
            if(res.status === 200){
                alert("logado com sucesso")
            }
        })
        .catch((error) => {
            if(error.response){
                alert(error.response.data.message)
            }
            console.error("Erro durante o login:", error.message);
            
        })

    };

    return (
        <Container>

            <div className="container">

                <div className="titleAndLogo">

                    <TitleAndLogo />

                </div>

                <div className="login">

                    <h1>Faça Login</h1>

                    <div className="email">

                        <label>Email</label>
                        <Input type={"text"} placeholder="Exemplo: exemplo@exemplo.com" onChange={e => setEmail(e)}/>

                    </div>

                    <div className="password">

                        <label>Senha</label>
                        <Input type={"password"} placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e)}/>

                    </div>

                    <Button onClick = {login}>Entrar</Button>

                    <Link to="/signUp">Criar uma conta</Link>

                </div>

            </div>

        </Container>
    )
}