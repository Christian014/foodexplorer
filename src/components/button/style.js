import styled from "styled-components";

export const Container = styled.button `

    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    border-radius: 5px;
    
    cursor: pointer;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;

    color: white;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON};

    @media(min-width: 1920px){
        padding-left: 10px;
    }
`;