
import { Container } from "./style";
import { useState } from "react";

export function TagAdmin({tagname, icon, onChange, onClick, value, index}){
    
    return(
        <Container onChange={onChange}>
            {tagname}
            {value}
            <img src={icon} onClick={onClick}/>
            
        </Container>
    )
}