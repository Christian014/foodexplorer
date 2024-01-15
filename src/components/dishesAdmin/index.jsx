import { Container } from "./style";

import { SlArrowRight } from "react-icons/sl";

import Pencil from "../../assets/Pencil.png";
import Ravanelo from "../../assets/dish/ravanelo100.png";

import { Link } from "react-router-dom";

export function DishAdmin(){


    return(

        <Container>

            <div className="edit">
                <Link to= "/newDishAdmin">

                <img className="pencil" src={Pencil} alt="" />
                </Link>
            </div>


            <img className="ravanelo img-dish" src={Ravanelo} alt="" />

            <p>Salada de Ravanello <SlArrowRight className="arrowRight"/> </p>

            <strong>R$ 49,90</strong>
        </Container>

    )

}