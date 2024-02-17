import { Container } from "./style";



export function Button({ children, event, onClick, ...props }){

    return(

        <Container onClick={onClick} {...props}> 
            {children}
            
            
        </Container>

    )

}