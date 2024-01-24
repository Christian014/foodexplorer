import { Container } from "./style";
import { Button } from "../button";

import { SlArrowRight } from "react-icons/sl";

import Coracao from "../../assets/coracao.png";
import CoracaoColor from "../../assets/coracao-color.png";
import Ravanelo from "../../assets/dish/ravanelo100.png";
import Increment from "../../assets/increment.png";
import Decrement from "../../assets/decrement.png";

import { useState } from "react";
import { Link } from "react-router-dom";



export function Dish(){


    const [dishAmount, setDishAmount] = useState(1);

    const incrementDishAmount = () => {

        setDishAmount((prevAmount) => prevAmount + 1);
        
    };

    const decrementDishAmount = () => {

        if (dishAmount > 1) {
            setDishAmount((prevAmount) => prevAmount - 1);
        } else {
            alert("Escolha ao menos um prato");
        }

    };


    const [classeAtiva, setClasseAtiva] = useState(false);

    // Função para alternar a classe
    const alternarClasse = () => {
      // Atualize o estado para o oposto do estado atual
      setClasseAtiva((estadoAtual) => !estadoAtual);
    };
    
    

    return(

        <Container>

            <div className="favorite">
                <img onClick={alternarClasse}  className = {` coracao ${classeAtiva ? "visibility-hidden" : ""}`} id="coracao" src={Coracao} alt="" />
                <img  onClick={alternarClasse}  className = {` coracao-color  ${classeAtiva ? "" : "visibility-hidden"}`} id="coracaoColor" src={CoracaoColor} alt="" />
            </div>


            <Link to= "/dish">
                <img className="ravanelo" src={Ravanelo} alt="" />
                <div className="img-dish"></div>
            </Link>

            <p>Salada de Ravanello <SlArrowRight className="arrowRight"/> </p>

            <strong>R$ 49,90</strong>

            <div className="price">
                
                <img id="decrement" className="decrement" onClick={decrementDishAmount} src={Decrement} alt="" />
                
                <strong id="dishAmount" className="number-dish">{dishAmount.toString().padStart(2, '0')}</strong>

                <img id="increment" className="increment" onClick={incrementDishAmount} src={Increment} alt="" />
                
            </div>

            <Button>inluir</Button>
        </Container>

    )

}