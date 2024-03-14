import { Container } from "./style";
import { NavBar } from "../../components/navBar";
import { Footer } from "../../components/footer"
import { Button } from "../../components/button";
import { useLocation } from 'react-router-dom';
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import credit from "../../assets/credit.png";
import pix from "../../assets/pix.png";
import meuoficialpix from "../../assets/meuoficialpix1.png";
import Vector from "../../assets/Vector.png";

export function RequestDish() {

    const { state } = useLocation();

    const idPedido = state;
    const arrayRequest = state.arrayRequest

    let soma = arrayRequest.reduce((total, pedido) => total + pedido, 0);
    const [data, setData] = useState([])
    const [pedidos, setPedidos] = useState(soma)
    const [isActive, setIsActive] = useState(false);
    const [isActiveMobile, setIsActiveMobile] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(false);

    function removeDish(index, arrayRequest) {
        const newDishes = data.filter((_, i) => i !== index)
        setData(newDishes)

        setPedidos(pedidos - arrayRequest)
    }

    const toggleClassDesktop = () => {
        setIsActive(!isActive);
    };

    const toogleClassMobile = () => {
        setIsButtonActive(true);
        setIsActiveMobile(!isActiveMobile);
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

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1200 && isButtonActive) {
                setIsActiveMobile(true);
            }
            else {
                setIsActiveMobile(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isButtonActive]);

    const arrayPrice = data.map((price) => [price.price.replace(",", ".")])
    const prices = arrayPrice.map(price => parseFloat(price));

    const priceFinal = data.map((dish, index) => arrayRequest[index] * prices[index]);
    const finalPrice = priceFinal.reduce((accumulator, num) => accumulator + num, 0).toFixed(2)
    const totalPrice = finalPrice.replace(".", ",")

    return (
        <Container>

            <NavBar className="navbar" qtdRequestDish={pedidos} />


            <main>
                <div className={isActiveMobile ? "payment" : "pedido-title"}>
                    <h1 className="title">Meu Pedido</h1>
                </div>

                <div className={isActiveMobile ? "payment" : "pedidos"}>
                    {data.map((dish, index) => (<div className="one-pedido" key={dish.id}>
                        <img src={`https://api-foodexplorer-si8p.onrender.com/dish/${dish.image}`} alt="" />

                        <span>{arrayRequest[index]}</span>
                        <div className="title-and-remove">
                            <h2>{dish.name}</h2>
                            <p onClick={function remove() { removeDish(index, arrayRequest[index]) }}>Remover dos Pedidos</p>
                        </div>
                        <p className="price">R$ {arrayRequest[index] * prices[index]}</p>
                    </div>))}
                </div>
                <div className={isActiveMobile ? "payment" : "price-total"}>
                    <p className="price">Total: R$ {totalPrice}</p>
                </div>

                <div className={isActiveMobile ? "payment" : "btt"}>
                    
                    <div className="button">
                    
                        <Button children="Avançar" onClick={toogleClassMobile}/>
                    
                    </div>
                </div>

                <div className={isActiveMobile ? "pixcard" : "payment"}>
                    <h2>Pagamento</h2>
                    <div className="pix-and-card">
                        <div className="pix-card">
                            <p className="pix" onClick={toggleClassDesktop}> <img src={pix} alt="" /> Pix</p>
                            <p className="credit-card" onClick={toggleClassDesktop}> <img src={credit} alt="" /> Credito</p>
                        </div>

                        <div className={isActive ? 'qrcode hidden payment' : 'qrcode '}>
                            <img src={meuoficialpix} alt="" />
                        </div>

                        <div className={isActive ? 'credit credit-div' : 'credit hidden payment'}>
                            <div className="numCredit">
                                <p>Número do Cartão</p>
                                <input className="num" type="text" placeholder="0000 0000 0000 0000" />
                            </div>

                            <div className="valid-cvc">
                                <div className="valid">
                                    <p>Validade</p>
                                    <input className="validated" type="text" placeholder="04/25" />
                                </div>

                                <div className="cvc">
                                    <p>CVC</p>
                                    <input className="cvc-input" type="password" placeholder="000" />
                                </div>
                            </div>

                            <div className="finished-request-dish">
                                
                                <Link to="/payment">
                                
                                    <Button image={Vector} children="Finalizar Pagamento" />
                                </Link>
                                
                            </div>
                        </div>

                    </div>
                </div>

            </main>

            <div className="footer">
                <Footer />
            </div>
        </Container>
    )
}