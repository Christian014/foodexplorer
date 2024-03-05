import { Container } from "./style";
import { SlArrowRight } from "react-icons/sl";
import Pencil from "../../../assets/Pencil.png";
import { Link } from "react-router-dom";

export function DishAdmin({ image, name, price, category, ingredients, description, id, onClick }) {

    return (

        <Container onClick={onClick} id={id}>

            <div className="edit">
                <Link to={{
                    pathname: "/dishCustomAdmin",
                    search: `?id=${id}`,
                }}>
                    <img className="pencil" src={Pencil} alt="" />
                </Link>
            </div>

            <Link
                to={{
                    pathname: "dishAdmin",
                    search: `?id=${id}`,
                }}
            >


                <img className="img-dish" src={"https://api-foodexplorer-si8p.onrender.com/dish/" + image} alt="" />



                <p className="title">{name} <SlArrowRight className="arrowRight" /></p>
                <p className="description">{description}</p>


                <strong>R$ {price}</strong>
            </Link>
        </Container>

    )

}