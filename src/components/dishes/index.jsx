import { Container } from "./style";
import { Button } from "../button";

import { useState } from "react";

import { SlArrowRight } from "react-icons/sl";

import Coracao from "../../assets/coracao.png";
import Ravanelo from "../../assets/dish/ravanelo100.png";

import Increment from "../../assets/increment.png";
import Decrement from "../../assets/decrement.png";


export function Dish(){

    

    const [incrementNumDish, setIncrementNumDish] = useState('00');

     async function incrementDish() {
        
        let numberDishElement = document.getElementById('numberDish');
        
          let num = parseInt(numberDishElement.textContent);
          setIncrementNumDish((num + 1).toString().padStart(2, '0'));
          
      }

    return(

        <Container>

            <div className="favorite">
                <img className="coracao" src={Coracao} alt="" />
            </div>


            <img className="ravanelo" src={Ravanelo} alt="" />

            <p>Salada de Ravanello <SlArrowRight className="arrowRight"/> </p>

            <strong>R$ 49,90</strong>

            <div className="price">
                
                <img id="decrement" className="decrement" src={Decrement} alt="" />
                
                <strong id="numberDish" className="number-dish">{incrementNumDish}</strong>

                <img id="increment" className="increment" onClick={incrementDish} src={Increment} alt="" />
                
            </div>

            <Button>inluir</Button>
        </Container>

    )

}