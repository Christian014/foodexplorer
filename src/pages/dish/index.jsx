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
import { useSearchParams } from 'react-router-dom';
import { useEffect } from "react";
import { api } from "../../services/api";


export function Dish() {

    const [amount, setAmount] = useState(1)

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [previewDish, setPreviewDish] = useState([]);



    useEffect(() => {
        async function PreviewDish() {
            console.log("ola", id)
            try {
                const dados = await api.post("/dishPreView", { id })
                const previewDish = dados.data

                console.log(previewDish.response)

                setPreviewDish(previewDish.response)
            } catch {
                console.log("eror")
            }
        }
        PreviewDish()
    }, [])

    const ingredients = previewDish.ingredients;

    if (ingredients == undefined) {
        return console.log("ingredients vazio")
    }

    const dividindoIngredients = ingredients.split(",")
    console.log(dividindoIngredients)


    const tagsIngredients = dividindoIngredients.map((ingredient, index) => (

        <Tag tagname={ingredient} />

    ));


    function incrementNum() {
        setAmount((prevState) => prevState + 1)
    }

    function decrementNum() {
        if (amount > 1) {
            setAmount((prevState) => prevState - 1)
        } else {
            alert("quantidade inválida")
        }
    }

    return (

        <Container>

            <NavBar className="navbar" />

            <div className="containOneDish">

                <div className="back">

                    <img src={Voltar} alt="voltar" />
                    <Link to="/">
                        <p>voltar</p>
                    </Link>

                </div>

                <div className="dishDescription">

                    <img className="image" src={`https://api-foodexplorer-si8p.onrender.com/dish/` + previewDish.image} alt="" />

                    <div className="txt-description">
                        <h1>{previewDish.name}</h1>

                        <p className="p-mobile">{previewDish.description}</p>

                        <p className="p-desktop">
                            {previewDish.description}
                        </p>
                    </div>

                </div>

                <div className="tags">

                    {tagsIngredients}


                </div>

                <div className="buttons">

                    <div className="pedidos">

                        <img className="decrement" onClick={decrementNum} src={Decrement} alt="" />
                        <strong>{amount}</strong>
                        <img className="increment" onClick={incrementNum} src={Increment} alt="" />
                    </div>



                    <img className="img-pedidos" src={Menu} alt="" />

                    <Button
                        className="btt"
                        children="pedir ∙ R$ 25,00"
                    />



                </div>

            </div>


            <div className="footer">
                <Footer />
            </div>

        </Container>

    )
}