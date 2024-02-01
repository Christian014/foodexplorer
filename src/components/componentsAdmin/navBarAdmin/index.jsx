import { Container } from "./style";

import { TitleAndLogo } from "../../titleAndLogo";
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
                
                <Link to="/menuAdmin">
                    <img className="img-menu" src={Menu} alt="" />
                </Link>
                
                <div className="titleAndLogo">
                    <TitleAndLogo />
                    <p>Admin</p>
                </div>

                <div className="input-nav">
                    <img src={Lupa} alt="" />
                    <Input />
                </div>

                <div className="btts-nav">
                    <Button children="Novo prato"/>
                </div>

                <div className="exit">
                    <img src={ExitDesktop} alt="" />
                </div>

                
            </div>

        </Container>

    )

}