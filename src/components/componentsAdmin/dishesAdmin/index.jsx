import { Container } from "./style";
import { SlArrowRight } from "react-icons/sl";
import Pencil from "../../../assets/Pencil.png";
import { Link } from "react-router-dom";

export function DishAdmin({ image, name, price, category, ingredients, description, id, onClick }) {


    console.log(id)

    return (

        <Container onClick={onClick} id={id}>

            <div className="edit">
                <Link to="/dishCustomAdmin">
                    <img className="pencil" src={Pencil} alt="" />
                </Link>
            </div>

            <Link
                to={{
                    pathname: "dishAdmin",
                    search: `?id=${id}`,
                }}
            >


                <img className="img-dish" src={"http://localhost:3333/dish/" + image} alt="" />



                <p className="title">{name} <SlArrowRight className="arrowRight" /></p>
                <p className="description">{description}</p>


                <strong>R$ {price}</strong>
            </Link>
        </Container>

    )

}