import { Container } from "./style";

import { TitleAndLogoAdmin } from "../../componentsAdmin/titleAndLogoAdmin";
import { Link } from "react-router-dom";
import { Input } from "../../input";
import { Button } from "../../button";

//img
import Menu from "../../../assets/Menu.png";
import Lupa from "../../../assets/lupa.png";
import ExitDesktop from "../../../assets/exitDesktop.png";



export function NavBarAdmin(){

    return(

        <Container>

            <div className="nav">
                
                <Link className="link-menu" to="/menuAdmin">
                    <img className="img-menu" src={Menu} alt="" />
                </Link>
                
                <div className="titleAndLogo">
                    <TitleAndLogoAdmin />
                    <div className="p-admin">
                        <p>Admin</p>
                    </div>
                </div>

                <div className="input-nav">
                    <img className="lupa" src={Lupa} alt="" />
                    <Input placeholder="Busque por pratos ou ingredientes"/>
                </div>

                
                <div className="btts-nav">
                    
                    <Link to="/dishNewAdmin">
                        <Button children= "Novo prato"/>
                    </Link>
                    
                </div>

                <div className="exit">
                    <img src={ExitDesktop} alt="" />
                </div>

                
            </div>

        </Container>

    )

}