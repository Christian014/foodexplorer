import styled from "styled-components";

export const Container = styled.div `
    @media(max-width: 640px){
        padding-left: 62px;
    }

    color: ${({theme}) => theme.COLORS.H1_COLOR};

    gap: 10px;
    display: flex;
    flex-direction: row;
    
    h1  {

        font-family: 'Roboto';
        font-weight: bold;
        font-size: 24px;

    }

    img{
        width: 24px;
        height: 24px;
    }

    @media(min-width: 1920px){
        align-items: center;
        h1{
            font-size: 24px;
            font-family: 'Roboto';
            font-weight: bold;
        }

        img{
            width: 30px;
            height: 30px;
        }
    }

`;