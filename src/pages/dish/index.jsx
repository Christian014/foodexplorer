import { Container } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

//components
import { NavBar } from "../../components/navBar";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button"; 
import { Tag } from "../../components/tags";

//img
import Ravanelo from "../../assets/dish/ravanelo400.png";
import Increment from "../../assets/increment.png";
import Decrement from "../../assets/decrement.png";
import Voltar from "../../assets/MenorQue.png";
import Menu from "../../assets/Vector.png";

export function Dish(){

const [amount, setAmount] = useState(1)


    function incrementNum(){
        setAmount((prevState) => prevState + 1)
    }

    function decrementNum(){
        if(amount > 1){
            setAmount((prevState) => prevState - 1)
        }else{
            alert("quantidade inválida")
        }
    }

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

                    <div className="pedidos">
                        
                        <img className="decrement" onClick={decrementNum} src={Decrement} alt="" />
                        <strong>{amount}</strong>
                        <img className="increment" onClick={incrementNum} src={Increment} alt="" />
                    </div>



                    <img className="img-pedidos" src={Menu} alt="" />

                    <Button
                        className = "btt"
                        children= "pedir ∙ R$ 25,00"
                    />

                    
                
                </div>

            </div>

            
                <div className="footer">
                    <Footer />
                </div>
            
        </Container>

    )
}