import styled from "styled-components"

export const Container = styled.div `
    width: max-content;
    
    padding: 8px 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG_ADMIN};

    border-radius: 8px;
    color: white;

    font-family: 'Roboto';
    font-size: 14px;
    
    img{
        width: 8px;
        height: 8px;
        padding-left: 4px;
        cursor: pointer;
    }
`