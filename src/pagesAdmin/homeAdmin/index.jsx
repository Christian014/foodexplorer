import { Container } from "./style";
import { NavBarAdmin } from "../../components/componentsAdmin/navBarAdmin";
import Lanches from "../../assets/lanches.png"

import { Footer } from "../../components/footer";

import { CarouselAdmin } from "../../components/componentsAdmin/carouselAdmin";


export function HomeAdmin(){

    return(

        <Container>

            <main>
                
                    <NavBarAdmin />
                

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

                        <CarouselAdmin />

                    </div>

                    <h2>Pratos Principais</h2>
                    
                    <div className="dishes">

                        <CarouselAdmin />

                    </div>

                    <h2>Pratos Principais</h2>
                    
                    <div className="dishes">

                        <CarouselAdmin />

                    </div>

                </div>

            </main>

            <Footer />
            
        </Container>
    )

}