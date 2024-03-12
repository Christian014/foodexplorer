import styled from "styled-components"

export const Container = styled.div `
        width: 100%;
        height: 100vh;

        a{
            text-decoration: none;
        }
        span{
            color: white;
        }

        h1.title{
            
            font-family: 'Poppins';
            font-size: 32px;
            color: white;
            margin-bottom: 27px;
    
        }

        main{
            margin-left: 35px;
            margin-top: 56px;
            height: 70%;

            .btt{
                display: flex;
                justify-content: end;
                
                .button{
                    margin-top: 50px;
                    margin-right: 37px;
                    width: 216px;
                }
            }
        }

        .footer{
            margin-top: 5%;
            position: absolute;
            bottom: 0;
            width: 100%;
        }

.pedidos{

    height: 62%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 25px;
    
    .one-pedido{
        
        display: flex;
        
        gap: 13px;
        align-items: center;

        img{
            border-radius: 50%;
            width: 72px;
            height: 72px;
        }

        .title-and-remove{
            display: flex;
            flex-direction: column;
            h2{
                line-height: 32px;
                font-size: 20px;
                font-family: 'Poppins';
                color: white;
            }

            p{
                color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON_SAVE};
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 12px;
                cursor: pointer;
            }
        }


    }
}

.price-total{
        p{
            margin-top: 20px;
            color: white;
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 20px;
        }
    }
`;