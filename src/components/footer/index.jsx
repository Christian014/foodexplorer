import { Container } from "./style";
import Polygon  from "../../assets/PolygonFooter.png"

export function Footer(){

    return(

        <Container>
            <div className="content-footer">

                    <img src={Polygon} alt="polygon" />
                    <p>food explorer</p>

                <h3>© 2023 - Todos os direitos reservados.</h3>

            </div>
        </Container>

    )
}