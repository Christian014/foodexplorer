import styled from "styled-components"

export const Container = styled.span `
    width: max-content;
    
    padding: 8px 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG_ADMIN};

    border-radius: 8px;
    color: white;
    align-items: center;
    gap: 5px;
    font-family: 'Roboto';
    font-size: 14px;
    display: flex;
    
    img{
        width: 8px;
        height: 8px;
        padding-left: 4px;
        cursor: pointer;
    }
`