import { Container } from "./style";

export function Input({type, placeholder, onChange ,...props}){

    return (

        <Container
         type={type} 

         placeholder={placeholder} 
         onChange={onChange}
         {...props}
         >
            
        </Container>

    )
}