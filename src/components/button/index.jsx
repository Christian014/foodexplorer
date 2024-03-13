import { Container } from "./style";



export function Button({ children, event,image, onClick, ...props }){

    return(

        <Container onClick={onClick} {...props}> 
            <img src={image} alt="" />
            {children}
            
        </Container>

    )

}