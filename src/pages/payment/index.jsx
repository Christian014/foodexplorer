import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navBar";
import { Container } from "./style";

import Credit from "../../assets/credit.png";
import Pix from "../../assets/pix.png";
import Awaitpayment from "../../assets/await-payment.png";
import PaymentAprovado from "../../assets/payment-aprovado.png";
import Entregue from "../../assets/entregue.png";
import { useState, useEffect } from "react";

export function Payment(){

    const [color, setColor] = useState(false)
    function Color(){
        setColor(!color)
    }

    const [imageSrc, setImageSrc] = useState(Awaitpayment);
    const [paragrado, setParagrafo] = useState("Aguardando pagamento no caixa!");

  useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      setImageSrc(PaymentAprovado);
      setParagrafo("Pagamento aprovado!")  
    }, 5000);

    const timeoutId2 = setTimeout(() => {
      setImageSrc(Entregue);
      setParagrafo("Pedido Entregue")
    }, 10000);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, []);
    
    return(
        <Container>
            <NavBar/>

            <main>
                <h2>Pagamento</h2>

                <div className="payment-await">
                    <div className="payment-method">
                        <p onClick={()=> Color()} className={!color ? 'pix' : 'pix color-p'}><img src={Pix} alt="" /> Pix</p>
                        <p onClick={()=> Color()} className={color ? 'credit' : 'credit color-p'}><img src={Credit} alt="" /> Crédito</p>
                    </div>

                    <div className="await-confirmation">
                        <img src={imageSrc} alt="" />
                        <p>{paragrado}</p>
                    </div>
                </div>
            </main>

            <div className="footer">
                <Footer/>
            </div>
        </Container>
    )
}