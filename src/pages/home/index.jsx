import { Container } from "./style";
import { NavBar } from "../../components/navBar";
import Lanches from "../../assets/lanches.png"

import { Footer } from "../../components/footer";



import { Carousel } from "../../components/carousel";

export function Home(){

    return(

        <Container>

            <main>
                <NavBar />

                <div className="banner">

                    <img src={Lanches} alt="" />
                    
                    <div className="banner-text">

                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

                    </div>

                </div>

        
                <div className="meals">

                    <h2>Refeições</h2>
                    
                    <div className="dishes">

                        <Carousel />

                    </div>

                    <h2>Pratos Principais</h2>
                    
                    <div className="dishes">

                        <Carousel />

                    </div>

                    <h2>Pratos Principais</h2>
                    
                    <div className="dishes">

                        <Carousel />

                    </div>

                </div>

            </main>

            <Footer />
            
        </Container>
    )

}