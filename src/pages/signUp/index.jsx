import { Container } from "./style";

import { Link } from "react-router-dom";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TitleAndLogo } from "../../components/titleAndLogo";

export function SignUp() {
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
                        <Input placeholder="Exemplo: Maria da Silva" />

                    </div>

                    <div className="email">

                        <label>Email</label>
                        <Input placeholder="Exemplo: exemplo@exemplo.com" />

                    </div>

                    <div className="password">

                        <label>Senha</label>
                        <Input placeholder="No mínimo 6 caracteres" />

                    </div>

                    <div className="auth-buttons">
                        <Button>Entrar</Button>

                        <Link to="/signIn">Ja tenho uma conta</Link>
                    </div>
                </form>

            </div>

        </Container>
    )
}