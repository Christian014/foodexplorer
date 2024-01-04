import { Container } from "./style";
import { NavBar } from "../../components/navBar";
import { Footer } from "../../components/footer";

//img
import Voltar from "../../assets/MenorQue.png";
import Ravanelo from "../../assets/dish/ravanelo400.png";

export function Dish(){

    return(

        <Container>

            <NavBar/>

            <div className="containOneDish">

                <div className="back">

                    <img src={Voltar} alt="voltar" />
                    <p>voltar</p>

                </div>

                <div className="dishDescription">

                    <img src={Ravanelo} alt="Ravanelo" />

                    <h1>Salada Ravanello</h1>

                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                </div>
            </div>
        </Container>

    )
}