import { Container } from "./style";
import { NavBar } from "../../components/navBar";

import Lanches from "../../assets/lanches.png"

export function Home(){

    return(

        <Container>

            <main>
                <NavBar />

                <div className="banner">

                    <img src={Lanches} alt="" />
                    
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

                </div>

            </main>
            
        </Container>
    )

}