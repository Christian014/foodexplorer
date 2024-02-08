import { Container } from "./style";

export function Input({type, placeholder, onChange }){

    return (

        <Container
         type={type} 

         placeholder={placeholder} 

         onChange={e => onChange(e.target.value)}>
            
        </Container>

    )
}