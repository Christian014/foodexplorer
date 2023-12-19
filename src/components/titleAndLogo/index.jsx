import { Container } from "./style";
import  Polygon  from "../../assets/Polygon.png"

export function TitleAndLogo(){

    return (

        <Container>
            <img src={Polygon} alt="" />
            <h1>food explorer</h1>
        </Container>

    )
}