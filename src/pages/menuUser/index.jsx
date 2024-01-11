import { Container } from "./style";
//img
import Close from "../../assets/close.png";
import Lupa from "../../assets/lupa.png";
//component
import { Input } from "../../components/input";
import { Footer } from "../../components/footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export function MenuUser() {

    return (

        <Container>
            <main>
                <div className="header">

                    <div>
                        <Link to="/">
                            <img src={Close} alt="close" />
                        </Link>
                        
                        <p>Menu</p>
                    </div>

                </div>

                <div className="container">
                    <img src={Lupa} alt="" />
                    <Input className=" input" placeholder="Busque por pratos ou ingredientes" />
                    

                    <Link to="/">
                        <p className="paragrafo">Sair</p>
                    </Link>
                </div>

                
                    <div className="footer">
                        <Footer />
                    </div>
                
            </main>
        </Container>

    )
}