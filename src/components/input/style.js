import styled from "styled-components";

export const Container = styled.input `

    box-sizing: border-box;

    width: 100%;
    height: 48px;
    padding-left: 14px;
    
    border: none;
    border-radius: 8px;

    outline: none;

    font-family: 'Roboto', sans-serif;
    
    color: white;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    
    ::placeholder{
        color: ${({theme}) => theme.COLORS.PLACEHOLDER_INPUT};
    }

    @media(min-width: 1920px){
        width: 581px;
        padding-left: 100px;
    }
`;