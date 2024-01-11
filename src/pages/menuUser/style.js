import styled from "styled-components";

export const Container = styled.div `

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_NAVBAR};

    height: 114px;
    
    a{
        text-decoration: none;
    }

    main{
        display: flex;
        flex-direction: column;
        height: 100vh;
        
        .footer{
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    }

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
        flex-direction: column;

        width: 372px;
        height: 677px;
        margin: 0 auto;
        margin-bottom: 26px;
        margin-top: 56px;

        img{
            position: absolute;
            margin-top: 14px;
            padding-left: 14px;
        }

        Input{
            padding-left: 52px;
            height: 48px;
        }

        p{
            color: white;
            margin-top: 36px;
            font-family: 'Poppins';
            font-size: 24px;
            cursor: pointer;
            border-bottom: ${({theme}) => theme.COLORS.BORDER_BOTTOM_P} 1px solid;
            padding-bottom: 10px;
        }
    }

`;