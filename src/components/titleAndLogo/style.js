import styled from "styled-components";

export const Container = styled.div `

    color: ${({theme}) => theme.COLORS.H1_COLOR};

    gap: 10px;
    display: flex;
    flex-direction: row;
    
    h1  {

        font-family: 'Roboto';
        font-weight: bold;
        font-size: 37px;

    }

`;