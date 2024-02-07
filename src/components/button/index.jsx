import { Container } from "./style";



export function Button({ children, event, ...props }){

    return(

        <Container {...props}> 
            {children}
            
            
        </Container>

    )

}