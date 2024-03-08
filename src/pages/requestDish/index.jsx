import { Container } from "./style";
import {NavBar} from "../../components/navBar";
import {Footer} from "../../components/footer"
import { Button } from "../../components/button";
import { useLocation } from 'react-router-dom';
import camaron400 from "../../assets/dish/camaron400.png"
import { api } from "../../services/api";
import { useEffect, useState } from "react";
export function RequestDish({image, name}){

    const { state } = useLocation();
    const idPedido = state;
const id = idPedido.idPedido[0]
    console.log(id)

    const [data, setData] = useState("")

    useEffect(() => {
        async function dishes(){
            try{
                const data = await api.post("/dishPreView", {id})
                const response = data.data

                const oneDish = response.response
                console.log(oneDish)
                setData(oneDish)
            }catch(error){
                console.log(error, "erro")
            }
        }

        dishes()
    }, [])

    console.log(data)
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
                        <img src={`https://api-foodexplorer-si8p.onrender.com/dish/${data.image}`} alt="" />

                        <div className="title-and-remove">
                            <h2>{data.name}</h2>
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