import styled from "styled-components";

export const Container = styled.button `

    width: 100%;
    height: 48px;

    border: none;
    border-radius: 5px;
    
    cursor: pointer;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;

    color: white;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON};

    @media(min-width: 1920px){
        width: 216px;

        padding-left: 10px;
    }
`;