import { Container } from "./style";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import Alert from '@mui/material/Alert';
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TitleAndLogo } from "../../components/titleAndLogo";
import { Link } from "react-router-dom";
import { useState, useTransition } from "react";

export function SignIn() {

    const { signIn } = useAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [button, setButton] = useState("Entrar")
    const [alert, setAlert] = useState(null);
    
    function login(evt){
        
        signIn({ email, password });
        
        evt.preventDefault();
        setButton("Carregando")
        if(!email || !password){
            return setAlert(<Alert severity="error">Digite todos os Campos</Alert>)
        }
        

        api.post("/login", {email, password})
        .then((res) => {
            
            if(res.status === 200){
                console.log("carregando")
                return setAlert(<Alert severity="success">Sucesso ao se autenticar</Alert>)
            }
        })
        .catch((error) => {
            return setAlert(<Alert severity="error">E-mail e/ou Senha Inválido</Alert>)
            
            
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
                        <Input type={"text"} placeholder="Exemplo: exemplo@exemplo.com" onChange={e => setEmail(e.target.value)}/>

                    </div>

                    <div className="password">

                        <label>Senha</label>
                        <Input type={"password"} placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>

                    </div>

                    <Button onClick = {login}>{button}</Button>

                    <Link to="/signUp">Criar uma conta</Link>

                    {alert}
                </div>

            </div>

        </Container>
    )
}