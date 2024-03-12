import { Container } from "./style";
import { NavBar } from "../../components/navBar";
import { Footer } from "../../components/footer"
import { Button } from "../../components/button";
import { useLocation } from 'react-router-dom';
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function RequestDish() {
    
    const { state } = useLocation();

    const idPedido = state;
    const arrayRequest = state.arrayRequest

    let soma = arrayRequest.reduce((total, pedido) => total + pedido, 0);
    const [data, setData] = useState([])
    const [pedidos, setPedidos] = useState(soma)

    function removeDish(index, arrayRequest){
        const newDishes = data.filter((_, i) => i !== index)
        setData(newDishes)
 
        setPedidos(pedidos - arrayRequest)
    }
    
    useEffect(() => {
        async function dishes() {

            try {
                if (idPedido) {
                    const data = await api.post("/dishRequest", idPedido)
                    const arrayObectDish = data.data.response

                    setData(arrayObectDish)

                } else {
                    console.log("sem id")
                }

            } catch (error) {
                console.log(error, "erro")
            }
        }
        
        dishes()
    }, [])

    const arrayPrice = data.map((price) => [price.price.replace(",", ".")])
    const prices = arrayPrice.map(price => parseFloat(price));

    const priceFinal = data.map((dish, index) => arrayRequest[index] * prices[index]);
    const finalPrice = priceFinal.reduce((accumulator, num) => accumulator + num, 0).toFixed(2)
    const totalPrice = finalPrice.replace(".", ",")
    return (
        <Container>

            <NavBar className="navbar" qtdRequestDish={pedidos} />


            <main>
                <div className="pedido-title">
                    <h1 className="title">Meu Pedido</h1>
                </div>

                <div className="pedidos">
                    {data.map((dish, index) => (<div className="one-pedido" key={dish.id}>
                        <img src={`https://api-foodexplorer-si8p.onrender.com/dish/${dish.image}`} alt="" />

                        <span>{arrayRequest[index]}</span>
                        <div className="title-and-remove">
                            <h2>{dish.name}</h2>
                            <p onClick={function remove(){removeDish(index, arrayRequest[index])}}>Remover dos Pedidos</p>
                        </div>
                    </div>))}

                </div>
                <div className="price-total">
                    <p className="price">Total: R$ {totalPrice}</p>
                </div>

                <div className="btt">
                    <div className="button">
                        <Button children="Avançar" />
                    </div>
                </div>

            </main>

            <div className="footer">
                <Footer />
            </div>
        </Container>
    )
}