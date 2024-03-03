import { Container } from "./style";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

import { api } from "../../services/api";

//components
import { NavBar } from "../../components/navBar";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { Tag } from "../../components/tags";

//img
import Voltar from "../../assets/MenorQue.png";

export function DishAdmin() {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [previewDish, setPreviewDish] = useState([]);
 

    
    useEffect(() => {
        async function PreviewDish() {
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

        if(ingredients == undefined){
            return console.log("ingredients vazio")
        }

        const dividindoIngredients = ingredients.split(",")
        console.log(dividindoIngredients)


        const tagsIngredients = dividindoIngredients.map((ingredient, index) => (
            
                  <Tag tagname={ingredient} />
            
            ));


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

                    <img className="dishImg" src={`http://localhost:3333/dish/`+ previewDish.image} alt="Ravanelo" />

                    <div className="txt-description">
                        <h1>{previewDish.name}</h1>

                        <p className="p-mobile">
                            {previewDish.description}
                        </p>

                        <p className="p-desktop">
                            {previewDish.description}
                        </p>
                    </div>

                </div>

                <div className="tags">

                    {tagsIngredients}
            
                </div>

                <div className="buttons">

                <Link
                to={{
                    pathname: "/dishCustomAdmin",
                    search: `?id=${id}`,
                }}
            >

                    

                        <Button
                            className="btt"
                            children="Editar Prato"
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