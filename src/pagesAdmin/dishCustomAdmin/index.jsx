import { Container } from "./style";
import { NavBarAdmin } from "../../components/componentsAdmin/navBarAdmin";
import { TagAdmin } from "../../components/componentsAdmin/tagsAdmin";
import { Link, useSearchParams } from "react-router-dom";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer"
import Alert from '@mui/material/Alert';


//api
import { api } from "../../services/api"

//img
import MenorQue from "../../assets/MenorQue.png";
import Upload from "../../assets/upload.png";
import Close from "../../assets/close.png";
import Mais from "../../assets/mais.png"
import { useEffect, useState } from "react";



export function DishCustomAdmin() {
    const [alert, setAlert] = useState(null);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Refeição");
    const [price, setPrice] = useState("");

    const [data, setData] = useState([])

    const [addIngredients, setAddIngredients] = useState([])
    const [ingredients, setIngredients] = useState("");

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id')

    useEffect(() => {
        async function previewDish(){

            const dataDish = await api.post("/dishPreView", {id})
            setData(dataDish.data)
        }
        previewDish()
    }, [])

    function ingredientsUpdate(){
        setAddIngredients(prevstate => [...prevstate, ingredients])
    }

    const formData = new FormData();
    
    
    function handleUpdate(){   
        
        if(!image || !name || !price){
            return setAlert(<Alert severity="error">Preencha Todos os Campos</Alert>)
        }else{
            formData.append('image', image);
            formData.append('name', name);
            formData.append('price', price);
            formData.append('category', category);
            formData.append('description', description);
            formData.append('ingredients', addIngredients);
            formData.append('id', id);

            setAlert(<Alert severity="success">Atualizado com sucesso</Alert>)

            try{
                api.put("/dish", formData);
 
            }catch{
                setAlert(<Alert severity="error">erro ao atualizar</Alert>)
            }

            return window.location.href = "/"
        }
    }

    async function deleteDish(){
        try{
            api.delete(`/dish/${id}`)
             setAlert(<Alert severity="success">Deletado</Alert>)
             window.location.href = "/"
             return;
        }catch{
            setAlert(<Alert severity="error">erro</Alert>)
        }
    }

    function deleteTag(index) {
        const updatedIngredients = addIngredients.filter((_, i) => i !== index);
        setAddIngredients(updatedIngredients);
    }
    
    
    const ingredient = addIngredients.map((ingredient, index) => (
        <TagAdmin tagname={ingredient} icon={Close} key={index} onClick={() => deleteTag(index)} />
    ));

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

                    <h1>Editar prato</h1>
                    
                    <div className="img-name-category">
                    <div className="img-dish">
                        <p className="p-img-fo-prato">Imagem do prato</p>

                        <div className="upload">
                            <input type="file" name="" id="" onChange={e => setImage(e.target.files[0])}/>
                            <img src={Upload} alt="upload" />
                            <p className="p-upload-mobile" >Selecione imagem para alterá-la</p>
                            <p className="p-upload-desktop">Selecione imagem</p>
                        </div>

                    </div>

                    <div className="name">
                        <p>Nome</p>
                        <input type="text" placeholder="Salada César" onChange={e => setName(e.target.value)}/>
                    </div>

                    <div className="category">
                        <p>Categoria</p>
                        <div className="select">

                            <select onChange={e => setCategory(e.target.value)}>
                                <option value="refeição">Refeição</option>
                                <option value="sobremesas">Sobremesas</option>
                                <option value="bebidas">Bebidas</option>
                            </select>


                        </div>


                    </div>
                    </div>

                    <div className="ingredients-price">
                    <div className="ingredients">
                        <p>Ingredientes</p>

                        <div className="tags">
                            {
                                
                                ingredient
                            }
                            <input className="ingredientsTag"  placeholder="Adicionar" onChange={e => setIngredients(e.target.value)}/>
                            <img className="img-ingredients" src={Mais} alt="" onClick={ingredientsUpdate}/>
                        </div>

                    </div>

                    <div className="price">
                        <p>Preço</p>
                        <Input className="inpt" placeholder="R$ 40,00" onChange={e => setPrice(e.target.value)}/>
                    </div>
                    </div>

                    <div className="description">
                        <p>Descrição</p>


                        <textarea wrap="hard" cols="30" rows="10" placeholder="A Salada César é uma opção refrescante para o verão." onChange={e => setDescription(e.target.value)}></textarea>
                    </div>

                    <div className="save-delete">
                        {alert}
                        <Button onClick={deleteDish} id="delete-btt">Excluir Prato</Button>
                        <Button onClick={handleUpdate} id="save-btt">Salvar Alterações</Button>
                    </div>

                </div>
            <Footer />  
            </main>
        </Container>
    )
}