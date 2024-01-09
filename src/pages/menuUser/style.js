import styled from "styled-components";

export const Container = styled.div `

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_NAVBAR};

    height: 114px;
    

    .header{
        
        
       div{
            padding-top: 56px;
            width: 372px;
            display: flex;
            gap: 16px;
            align-items: center;

            margin: 0 auto;
            

            img{
                width: 18px;
                height: 18px;
            }

            p{
                color: white;

                font-size: 21px;
                font-family: 'Roboto';
            }

       }
    }

    .container {
        display: flex;
        width: 372px;
        margin: 0 auto;

        img{
            position: absolute;
            align-self: center;
            padding-left: 14px;
        }

        Input{
            padding-left: 52px;
            height: 48px;
        }
    }

`;