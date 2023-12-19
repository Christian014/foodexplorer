import { Container } from "./style";

import { Outlet, Link } from "react-router-dom";

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

                <form action="">

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
                </form>



                <Button>Entrar</Button>

                <a href="#signIn">Ja tenho uma conta</a>

            </div>

        </Container>
    )
}