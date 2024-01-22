import styled from "styled-components";
import ravanelo200 from "../../assets/dish/ravanelo200.png";

export const Container = styled.div `
    @media(min-width: 1920px){
        width: 304px;
        height: 462px;

        .img-dish{
            margin-top: 24px;
            margin-bottom: 15px;
            width: 176px;
            height: 175px;
            background-image: url(${ravanelo200});
        }

        .ravanelo{
            visibility: hidden;
            position: absolute;
        }

        p{
            font-size: 24px;
        }
    }


    //default media
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_DISH};

    margin-left: 24px;

    width: 210px;
    height: 292px;

    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color: white;
        font-family: 'Poppins', sans-serif;

        margin-bottom: 12px;
    }

    .ravanelo{

        margin-top: 24px;
        margin-bottom: 12px;

        width: 88px;

    }

    .favorite{

        position: relative;
        width: 100%;

        .coracao{

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

`;