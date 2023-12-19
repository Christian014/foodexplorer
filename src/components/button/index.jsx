import { Container } from "./style";

export function Button({ children, ...props }){
    
    return(

        <Container {...props}> 
            {children}
        </Container>

    )

}