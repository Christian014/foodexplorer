import styled from "styled-components";

export const Container = styled.div `

    width: 90%;
    

    @media(min-width: 1920px){
        width: 83%;

        .swiper-button-prev{
            color: white;

            box-sizing: border-box;
            margin-left: 12px;
            padding-right: 233px;
            background-color: rgba(0, 0, 0, .3);
            height: 476px;
            margin-top: -15%;
        }
        .swiper-button-next{
            color: white;


            box-sizing: border-box;
            margin-right: 40px;
            padding-left: 233px;
            background-color: rgba(0, 0, 0, .3);
            height: 476px;
            margin-top: -15%;
        }
        
    }

    @media (max-width: 640px){
        .swiper-button-prev{
            position: absolute;
            visibility: hidden;
        }

        .swiper-button-next{
            position: absolute;
            visibility: hidden;
        }
    }
`;