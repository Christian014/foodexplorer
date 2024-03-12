import { Container } from "./style";
import { NavBarAdmin } from "../../components/componentsAdmin/navBarAdmin";
import { TagAdmin } from "../../components/componentsAdmin/tagsAdmin";
import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer"

import { api } from "../../services/api";

//img
import MenorQue from "../../assets/MenorQue.png";
import Upload from "../../assets/upload.png";
import Close from "../../assets/close.png";
import Mais from "../../assets/mais.png"
import { useState } from "react";



export function DishNewAdmin() {

    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")

    function handleAddTag() {
        setIngredients(prevState => [...prevState, newIngredients]);
    }

    
    function deleteTag(index){
        
        const newTags = ingredients.filter((_, i) => i !== index)
        setIngredients(newTags)
    }
    


    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Refeição");
    const [description, setDescription] = useState("");

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('ingredients', ingredients);



    async function handleUpload() {
        api.post("/dish", formData)
            .then((res) => {
                if (res.status === 200) {
                    
                    return alert("Cadastrado com sucesso");
    
                }
            }).catch((error) => {
                alert("erro ao cadastrar", error);
            })
    }
    return (
        <Container>
            <NavBarAdmin />

            <main>
                <div className="container">

                    <Link to="/">
                        <div className="return">
                            <img src={MenorQue} alt="menor que" />
                            <p>voltar</p>
                        </div>
                    </Link>

                    <h1>Adicionar Prato</h1>

                    <div className="img-name-category">
                        <div className="img-dish">
                            <p className="p-img-fo-prato">Imagem do prato</p>

                            <div className="upload">
                                <input type="file"
                                    id="inptUpload"
                                    onChange={e => setImage(e.target.files[0])}
                                />
                                <img src={Upload} alt="upload" />
                                <p className="p-upload-mobile" >Selecione imagem para alterá-la</p>
                                <p className="p-upload-desktop">Selecione imagem</p>
                            </div>

                        </div>

                        <div className="name">
                            <p>Nome</p>
                            <input type="text"
                                placeholder="Salada César"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="category">
                            <p>Categoria</p>
                            <div className="select">

                                <select value={category}
                                    onChange={e => setCategory(e.target.value)}
                                >
                                    <option value="Refeição">Refeição</option>
                                    <option value="Bebidas">Bebidas</option>
                                    <option value="Sobremesas">Sobremesas</option>
                                </select>


                            </div>


                        </div>
                    </div>

                    <div className="ingredients-price">
                        <div className="ingredients">
                            <p>Ingredientes</p>

                            <div className="tags">
                                {
                                    ingredients.map((ingredients, index) => (

                                        <TagAdmin icon={Close} key={String(index)} value={ingredients} onClick={() => deleteTag(index)}/>
                                    ))
                                }

                                <input className="addNewTag" type="text" placeholder="Adicionar" onChange={e => setNewIngredients(e.target.value)} />
                                <img src={Mais} className="addTag" alt="" onClick={handleAddTag} />

                            </div>

                        </div>

                        <div className="price">
                            <p>Preço</p>
                            <Input className="inpt"
                                placeholder="R$ 40,00"
                                onChange={handlePriceChange}
                            />
                        </div>
                    </div>

                    <div className="description">
                        <p>Descrição</p>


                        <textarea wrap="hard" cols="30" rows="10" placeholder="A Salada César é uma opção refrescante para o verão." onChange={e => setDescription(e.target.value)}></textarea>
                    </div>

                    <div className="save-delete">

                        <Button id="save-btt" onClick={handleUpload}>Salvar Alterações</Button>

                    </div>

                </div>
                <Footer />
            </main>
        </Container>
    )
}