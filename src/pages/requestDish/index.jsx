import { Container } from "./style";
import {NavBar} from "../../components/navBar";
import {Footer} from "../../components/footer"
import { Button } from "../../components/button";

import camaron400 from "../../assets/dish/camaron400.png"
export function RequestDish({image, name}){
    return(
        <Container>
            <NavBar className="navbar" />

            <main>
                <div className="pedido-title">
                    <h1 className="title">Meu Pedido</h1>
                </div>

                <div className="pedidos">

                    <div className="one-pedido">
                        <img src={camaron400} alt="" />

                        <div className="title-and-remove">
                            <h2>Salada radish</h2>
                            <p>Remover dos Favoritos</p>
                        </div>
  
                    </div>

                    <div className="one-pedido">
                        <img src={camaron400} alt="" />

                        <div className="title-and-remove">
                            <h2>Salada radish</h2>
                            <p>Remover dos Favoritos</p>
                        </div>
  
                    </div>

                    <div className="price-total">
                        <p className="price">Total: R$ 103,88</p>
                    </div>
       
                </div>

                <div className="btt">
                    <div className="button">
                        <Button children="Avançar"/>
                    </div>
                </div>

            </main>

            <div className="footer">
                <Footer />
            </div>
        </Container>
    )
}