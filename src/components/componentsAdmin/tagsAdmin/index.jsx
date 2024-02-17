
import { Container } from "./style";

export function TagAdmin({tagname, icon}){
    

    
    return(
        <Container>
            {tagname}
            <img src={icon} />
        </Container>
    )
}