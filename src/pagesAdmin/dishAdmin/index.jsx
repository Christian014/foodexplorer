import { Container } from "./style";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';


//components
import { NavBar } from "../../components/navBar";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button"; 
import { Tag } from "../../components/tags";

//img
import Ravanelo from "../../assets/dish/ravanelo400.png";
import Voltar from "../../assets/MenorQue.png";

export function DishAdmin(){

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    
    console.log(id)
    return(

        <Container>

            <NavBar className="navbar"/>

            <div className="containOneDish">

                <div className="back">

                    <img src={Voltar} alt="voltar" />
                    <Link to = "/">
                        <p>voltar</p>
                    </Link>

                </div>

                <div className="dishDescription">

                    <img src={Ravanelo} alt="Ravanelo" />

                    <div className="txt-description">
                        <h1>Salada Ravanello</h1>

                        <p className="p-mobile">Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                        <p className="p-desktop">
                            Rabanetes, folhas verdes e molho agridoce salpicados com    gergelim. O pão naan dá um toque especial.
                        </p>
                    </div>

                </div>

                <div className="tags">
                    
                    <Tag tagname= "alface"/>
                    <Tag tagname= "cebola"/>
                    <Tag tagname= "pão naan"/>
                    <Tag tagname= "pepino"/>
                    <Tag tagname= "rabanete"/>
                    <Tag tagname= "tomate"/>
                    
                    
                </div>

                <div className="buttons">

                    <Link to="/dishCustomAdmin">
                    
                    <Button
                        className = "btt"
                        children= "Editar Prato"
                    />
                    </Link>
                    
                
                </div>

            </div>

            
                <div className="footer">
                    <Footer />
                </div>
            
        </Container>

    )
}