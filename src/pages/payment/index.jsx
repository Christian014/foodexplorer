import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navBar";
import { Container } from "./style";

import Credit from "../../assets/credit.png";
import Pix from "../../assets/pix.png";
import Awaitpayment from "../../assets/await-payment.png";
import { useState } from "react";





export function Payment(){

    const [color, setColor] = useState(false)
    function Color(){
        setColor(!color)
        console.log("oi")
    }
    
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
                        <img src={Awaitpayment} alt="" />
                        <p>Aguardando pagamento no caixa</p>
                    </div>
                </div>
            </main>

            <div className="footer">
                <Footer/>
            </div>
        </Container>
    )
}