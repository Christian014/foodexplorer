import { Container } from "./style";
//img
import Close from "../../assets/close.png";
import Lupa from "../../assets/lupa.png"
//component
import { Input } from "../../components/input"

export function MenuUser(){
    return(

        <Container>
            <div className="header">

                <div>
                    <img src={Close} alt="close" />
                    <p>Menu</p>
                </div>

            </div>

            <div className="container">
                <img src={Lupa} alt="" />
                <Input className= " input" placeholder="Busque por pratos ou ingredientes"/>
            </div>
        </Container>

    )
}