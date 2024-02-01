import styled from "styled-components";

export const Container = styled.div `

    height: 114px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_NAVBAR};

    .nav{
        display: flex;
        justify-content: space-between;
        padding: 56px 28px 24px 28px;

       

    .titleAndLogo{
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 8px;
            p{
                color: ${({theme}) => theme.COLORS.P_NAVBAR_ADMIN};
                font-family: 'Roboto';
                font-size: 12px;
            }
    }

    .btts-nav{
        button{
            width: 216px;
        }
    }
    }

    

    
    
    @media(max-width: 1099px){
        .nav{
        display: flex;
        justify-content: space-between;
        padding: 56px 28px 24px 28px;

        .img-menu{
            width: 24px;
            height: 18px;
            cursor: pointer;
        }

        
        .titleAndLogo{
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 8px;
            p{
                color: ${({theme}) => theme.COLORS.P_NAVBAR_ADMIN};
                font-family: 'Roboto';
                font-size: 12px;
            }
        }
            
        
        .img-pedido{
            width: 26px;
            height: 22px;
            cursor: pointer;
        }

        >div{
            
            h1{
                font-size: 21px;
            }

            img{
                width: 24px;
                height: 24px;
            }
        }

        span{
            width: 20px;
            height: 20px;
            font-size: 14px;

            border-radius: 50%;
            
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
            
            margin-top: -36px;
            margin-left: 15px;
            
            color: white;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON};
        }
    }
    }

`;