import { Container } from "./style";
import { NavBarAdmin } from "../../components/navBarAdmin";


//img
import Upload from "../../assets/upload.png"

export function NewDishAdmin(){
    return(
        <Container>
            <NavBarAdmin />

            <div className="container">
                <div className="img-dish">
                    <p>imagem do prato</p>
                    <img src={Upload} alt="" />
                </div>
            </div>
        </Container>
    )
}