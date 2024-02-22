import { Container } from "./style";

import { SlArrowRight } from "react-icons/sl";

import Pencil from "../../../assets/Pencil.png";
import Ravanelo from "../../../assets/dish/ravanelo100.png";

import { Link } from "react-router-dom";

export function DishAdmin({image, name, price, category, ingredients, description}){


    return(

        <Container>

            <div className="edit">
                <Link to= "/dishCustomAdmin">

                <img className="pencil" src={Pencil} alt="" />
                </Link>
            </div>

            
            <Link to="dishAdmin">
            
            <img className="img-dish" src= {"http://localhost:3333/dish/" + image} alt="" />
            </Link>
            

            <p className="title">{name} <SlArrowRight className="arrowRight"/></p>
            <p className="description">{description}</p>
            

            <strong>R$ {price}</strong>
        </Container>

    )

}