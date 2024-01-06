import styled from "styled-components"

export const Container = styled.div `
    width: max-content;
    
    padding: 4px 8px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};

    border-radius: 5px;
    color: white;

    font-family: 'Poppins';
    font-size: 14px;
    

`