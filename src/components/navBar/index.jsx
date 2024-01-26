import { Container } from "./style";

import { TitleAndLogo } from "../titleAndLogo";
import { Input } from "../input";
import { Link } from "react-router-dom";
import { Button } from "../button"

//img
import Menu from "../../assets/Menu.png";
import Pedidos from  "../../assets/Vector.png";
import lupa from "../../assets/lupa.png";
import pedidos from "../../assets/Vector.png";
import exitDesktop from "../../assets/exitDesktop.png"



export function NavBar(){

    return(

        <Container>

            <div className="nav">
                
                <Link to="/menuUser">
                    <img className="img-menu" src={Menu} alt="" />
                </Link>
                
                <div className="titleAndLogo">
                    <TitleAndLogo />
                </div>
                

                <div className="div-input">
                    <img src={lupa} alt="" />
                    <Input className=" input" placeholder="Busque por pratos ou ingredientes" /> 
                </div>

                <div className="btt">
                    <img src={pedidos} alt="" />
                    <Button children="Pedidos (0)"/>
                </div>

                <Link to="signIn">
                    <img className="exit-desktop" src={exitDesktop} alt="" />
                </Link>

                <div className="pedidos">
                    <img className="img-pedido" src={Pedidos} alt="" />
                    <span>0</span>
                </div>
            </div>

        </Container>

    )

}