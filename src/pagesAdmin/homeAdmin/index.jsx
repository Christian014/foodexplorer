import { Container } from "./style";
import { NavBarAdmin } from "../../components/componentsAdmin/navBarAdmin";
import Lanches from "../../assets/lanches.png"

import { Footer } from "../../components/footer";

import { CarouselAdmin } from "../../components/componentsAdmin/carouselAdmin";
import { Link } from "react-router-dom";
import { DishAdmin } from "../../components/componentsAdmin/dishesAdmin";
import { api } from "../../services/api";


export function HomeAdmin(){

    function handleAddDish(){}

    return(

        <Container>

            <main>
            
                   
                <NavBarAdmin />
                    
                
                <div className="img-banner" />
                <div className="banner">

                    
                        <img className="lanhces" src={Lanches} alt="" />
                    
                    
                    <div className="banner-text">

                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

                    </div>

                </div>

        
                <div className="meals">

                    <h2>Refeições</h2>
                    
                    <div className="dishes refeicoes">
                        
                    <CarouselAdmin/>

                    </div>

                    <h2>Sobremesas</h2>
                    
                    <div className="dishes sobremesas">

                        <CarouselAdmin />

                    </div>

                    <h2>Bebidas</h2>
                    
                    <div className="dishes bebidas">

                        <CarouselAdmin />

                    </div>

                </div>

            </main>

            <div className="footer">
                <Footer />
            </div>
            
        </Container>
    )

}