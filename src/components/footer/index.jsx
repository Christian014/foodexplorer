import { Container } from "./style";
import Polygon  from "../../assets/PolygonFooter.png"

export function Footer(){

    return(

        <Container>
            <div className="content-footer">

                    <div className="txt-foot">
                        <img src={Polygon} alt="polygon" />
                        <p>food explorer</p>
                    </div>

                <h3>© 2024 - Todos os direitos reservados.</h3>

            </div>
        </Container>

    )
}