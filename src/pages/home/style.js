import styled from "styled-components";

export const Container = styled.div `

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_GLOBAL};

    @media (max-width: 428px){
        

        .banner{

            width: 376px;
            height: 120px;

            background-color: rgb(9,29,38);
            color: white;
        }
    }

`;