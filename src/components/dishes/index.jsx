import { Container } from "./style";
import { Button } from "../button";

import { SlArrowRight } from "react-icons/sl";

import Coracao from "../../assets/coracao.png";
import CoracaoColor from "../../assets/coracao-color.png";

import Increment from "../../assets/increment.png";
import Decrement from "../../assets/decrement.png";

import { useState } from "react";
import { Link } from "react-router-dom";



export function Dish({ image, name, price, category, ingredients, description, id, onClick, setIdPedido, setIds, incluirPedidoCarousel, setQtdRequestDish, setArrayRequest }) {
    
    const [dishAmount, setDishAmount] = useState(1);
    
    const [classeAtiva, setClasseAtiva] = useState(false);

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

    const alternarClasse = () => {

        setClasseAtiva((estadoAtual) => !estadoAtual);
    };
    
    const handleAddToCart = () => {
        setIdPedido(id);
        setIds(prevIds => [...prevIds, id]);
        incluirPedidoCarousel(id);
        setQtdRequestDish(dishAmount)
        setArrayRequest(prev => [...prev, dishAmount])
      };




    return (

        <Container>

            <div className="favorite">
                <img onClick={alternarClasse} className={` coracao ${classeAtiva ? "visibility-hidden" : ""}`} id="coracao" src={Coracao} alt="" />
                <img onClick={alternarClasse} className={` coracao-color  ${classeAtiva ? "" : "visibility-hidden"}`} id="coracaoColor" src={CoracaoColor} alt="" />
            </div>


            <Link to={{ pathname: "/dish", search: `?id=${id}`, }}>


                <img className="img-dish" src={"https://api-foodexplorer-si8p.onrender.com/dish/" + image} alt="" />

            </Link>

            <p>{name} <SlArrowRight className="arrowRight" /> </p>

            <strong>R$ {price}</strong>

            <div className="price">

                <img id="decrement" className="decrement" onClick={decrementDishAmount} src={Decrement} alt="" />

                <strong id="dishAmount" className="number-dish">{dishAmount.toString().padStart(2, '0')}</strong>

                <img id="increment" className="increment" onClick={incrementDishAmount} src={Increment} alt="" />

            </div>

            <Button onClick={() => handleAddToCart(id)}>incluir</Button>
        </Container>

    )

}