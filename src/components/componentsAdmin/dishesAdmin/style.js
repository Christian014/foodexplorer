import styled from "styled-components";

export const Container = styled.div `

        a{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
        }
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_DISH};

    margin-left: 24px;

    width: 210px;
    height: 292px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .description{
        position: absolute;
        visibility: hidden;
    }

    p{
        color: white;
        font-family: 'Poppins', sans-serif;

        margin-bottom: 12px;
    }

    .img-dish{

        margin-top: 70px;
        margin-bottom: 12px;

        width: 88px;
        height: 88px;
        border-radius: 50%;

    }

    .edit{

        position: relative;
        width: 100%;

        .pencil{
            cursor: pointer;

            position: absolute;
            right: 0;
            width: 24px;

            margin-top: 16px;
            margin-right: 16px;

        }
    }
    

    .arrowRight{
        width: 10px;
        height: 10px;
    }

    strong{

        color: ${({theme}) => theme.COLORS.PRICE_COLOR};
        font-family: 'Roboto',sans-serif;

    }

    .price{

        >img{
            cursor: pointer;
        }

        .decrement{
            padding-top: 5px;
            padding-bottom: 5px;
        }

        .increment{
            padding-top: 5px;
            padding-bottom: 5px;
        }
        
        align-items: center;
        display: flex;

        margin-top: 12px;
        gap: 14px;

        .number-dish{
            color: white;
        }
    }

    Button{
        width: 160px;
        height: 32px;
        margin-top: 16px;
    }

    @media (min-width: 1500px){
        width: 304px;
        height: 462px;

        .description{
            text-align: center;
            width: 90%;
        }

        .img-dish{
            width: 176px;
            height: 176px;
            border-radius: 50%;
        }

        p{
            margin-bottom: 15px;
        }

        .title{
            font-size: 24px;
            font-weight: bold;

            
        }

        .description{
            font-size: 14px;
            visibility: visible;
            position: static;
        }

        strong{
            font-size: 32px;
        }
    }

`;