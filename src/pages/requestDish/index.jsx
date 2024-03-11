import { Container } from "./style";
import {NavBar} from "../../components/navBar";
import {Footer} from "../../components/footer"
import { Button } from "../../components/button";
import { useLocation } from 'react-router-dom';

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function RequestDish(){

    const { state } = useLocation();
    
    const idPedido = state;
    const qtdRequestDish = state.qtdRequestDish

    const [data, setData] = useState([])

    console.log(qtdRequestDish)

    useEffect(() => {
        async function dishes(){
            try{
                if(idPedido){
                    const data = await api.post("/dishRequest", idPedido)
                    const arrayObectDish =  data.data.response

                    setData(arrayObectDish)
                }else{
                    console.log("sem id")
                }
                
            }catch(error){
                console.log(error, "erro")
            }
        }

        dishes()
    }, [])
    

    
    return(
        <Container>
            <NavBar className="navbar" />

            <main>
                <div className="pedido-title">
                    <h1 className="title">Meu Pedido</h1>
                </div>

                <div className="pedidos">

                    

                    {data.map(dish => (<div className="one-pedido" key={dish.id}>
                        <img src={`https://api-foodexplorer-si8p.onrender.com/dish/${dish.image}`} alt="" />

                        <div className="title-and-remove">
                            <h2>{dish.name}</h2>
                            <p>Remover dos Favoritos</p>
                        </div>
  
                    </div>))}

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