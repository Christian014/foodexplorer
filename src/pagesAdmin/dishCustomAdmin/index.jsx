import { Container } from "./style";
import { NavBarAdmin } from "../../components/componentsAdmin/navBarAdmin";
import { TagAdmin } from "../../components/componentsAdmin/tagsAdmin";
import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer"

//img
import MenorQue from "../../assets/MenorQue.png";
import Upload from "../../assets/upload.png";
import Close from "../../assets/close.png";
import Mais from "../../assets/mais.png"



export function DishCustomAdmin() {
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

                    <div className="img-dish">
                        <p className="p-img-fo-prato">Imagem do prato</p>

                        <div className="upload">
                            <input type="file" name="" id="" />
                            <img src={Upload} alt="upload" />
                            <p>Selecione imagem para alterá-la</p>
                        </div>

                    </div>

                    <div className="name">
                        <p>Nome</p>
                        <input type="text" placeholder="Salada César" />
                    </div>

                    <div className="category">
                        <p>Categoria</p>
                        <div className="select">

                            <select>
                                <option value="volvo">Refeição</option>
                                <option value="saab">Bebidas</option>
                            </select>


                        </div>


                    </div>

                    <div className="ingredients">
                        <p>Ingredientes</p>

                        <div className="tags">
                            <TagAdmin tagname="Pão Naan" icon={Close} />
                            <button>Adicionar <img src={Mais} alt="" /> </button>
                        </div>

                    </div>

                    <div className="price">
                        <p>Preço</p>
                        <Input className="inpt" placeholder="R$ 40,00" />
                    </div>

                    <div className="description">
                        <p>Descrição</p>


                        <textarea wrap="hard" cols="30" rows="10" placeholder="A Salada César é uma opção refrescante para o verão."></textarea>
                    </div>

                    <div className="save-delete">
                        <Button id="delete-btt">Excluir Prato</Button>
                        <Button id="save-btt">Salvar Alterações</Button>
                    </div>

                </div>
            <Footer />  
            </main>
        </Container>
    )
}