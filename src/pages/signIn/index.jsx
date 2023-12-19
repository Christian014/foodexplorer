import { Container } from "./style";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { TitleAndLogo } from "../../components/titleAndLogo";

export function SignIn() {
    return (
        <Container>

            <div className="container">

                <div className="titleAndLogo">

                    <TitleAndLogo />

                </div>

                <div className="email">

                    <label>Email</label>
                    <Input placeholder="Exemplo: exemplo@exemplo.com" />

                </div>

                <div className="password">

                    <label>Senha</label>
                    <Input placeholder="No mínimo 6 caracteres" />

                </div>

                <Button>Entrar</Button>
                
                <a href="#signUp">Criar uma conta</a>

            </div>

        </Container>
    )
}