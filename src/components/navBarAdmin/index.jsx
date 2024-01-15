import { Container } from "./style";

import { TitleAndLogo } from "../titleAndLogo";

//img
import Menu from "../../assets/Menu.png";
import Pedidos from  "../../assets/Vector.png";
import { Link } from "react-router-dom";



export function NavBarAdmin(){

    return(

        <Container>

            <div className="nav">
                
                <Link to="/menuAdmin">
                    <img className="img-menu" src={Menu} alt="" />
                </Link>
                
                <div className="titleAndLogo">
                    <TitleAndLogo />
                    <p>Admin</p>
                </div>

                <div className="pedidos">
                    <img className="img-pedido" src={Pedidos} alt="" />
                    <span>0</span>
                </div>
            </div>

        </Container>

    )

}