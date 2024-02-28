
import { Container } from "./style";

export function TagAdmin({tagname, icon, onChange, onClick, value}){
    

    
    return(
        <Container onChange={onChange} onClick={onClick}>
            {tagname}
            {value}
            <img src={icon} />
        </Container>
    )
}