import { Container } from "./style";
import { NavBar } from "../../components/navBar";
import Lanches from "../../assets/lanches.png"

import { Footer } from "../../components/footer";

import { useState } from "react";

import { Carousel } from "../../components/carousel";

export function Home(){

    const [searchValue, setSearchValue] = useState("");

    const handleSearchHome = (value) => {
        setSearchValue(value);
    };

    return(

        <Container>

            <main>
                <NavBar onSearch={handleSearchHome}/>

                <div className="banner">
                    <div className="img-desktop"></div>
                    <img src={Lanches} alt="" />
                    
                    <div className="banner-text">

                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

                    </div>

                </div>

        
                <div className="meals">

                    
                    <h2 className="h2-mobile">Pratos Principais</h2>
                    <div className="dishes">
                    <div className="h2-dishes">
                        <h2 className="h2-desktop">Refeições</h2>
                    </div>
                        <Carousel category="Refeição" searchValue={searchValue} />

                    </div>

                    <h2 className="h2-mobile">Pratos Principais</h2>
                    
                    <div className="dishes">
                    <div className="h2-dishes">
                        <h2 className="h2-desktop">Sobremesas</h2>
                    </div>

                        <Carousel category="Sobremesas" searchValue={searchValue}/>

                    </div>

                    <h2 className="h2-mobile">Pratos Principais</h2>
                    
                    <div className="dishes">
                    <div className="h2-dishes">
                        <h2 className="h2-desktop">Bebidas</h2>
                    </div>
                        <Carousel category="Bebidas" searchValue={searchValue}/>

                    </div>

                </div>

            </main>

            <div className="footer">
                <Footer />
            </div>
            
        </Container>
    )

}