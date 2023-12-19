import { Container } from "./style";

import { TitleAndLogo } from "../titleAndLogo";

import Menu from "../../assets/Menu.png";
import Pedidos from  "../../assets/Vector.png";

export function NavBar(){

    return(

        <Container>

            <div className="nav">
                <img className="img-menu" src={Menu} alt="" />

                <div className="titleAndLogo">
                    <TitleAndLogo />
                </div>

                <div className="pedidos">
                    <img className="img-pedido" src={Pedidos} alt="" />
                    <span>0</span>
                </div>
            </div>

        </Container>

    )

}