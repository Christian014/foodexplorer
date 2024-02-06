import styled from "styled-components";

export const Container = styled.div `

    /* height: 114px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_NAVBAR}; */
    
    .nav{
        height: 114px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_NAVBAR};
        display: flex;
        justify-content: space-around;
        align-items: center;

        Link{
            text-decoration: none;
        }
        

        .input-nav{
            display: flex;
            Input{
                width: 581px;
                height: 48px;
                text-align: center;
            }

            .lupa{
                position: absolute;
                right: 65%;
                align-self: center;
            }
        }
        
        
        .img-menu{
            position: absolute;
            visibility: hidden;
        }
        .link-menu{
            position: absolute;
            visibility: hidden;
            margin: 0;
        }
       

    .titleAndLogo{
            
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            p{
                color: ${({theme}) => theme.COLORS.P_NAVBAR_ADMIN};
                font-family: 'Roboto';
                font-size: 12px;
            }

            .p-admin{
                align-self: end;
            }
    }

    .btts-nav{
        button{
            width: 216px;
        }
    }
    }

    

    
    //mobile
    @media(max-width: 1199px){
        .btts-nav button{
            visibility: hidden;
            position: absolute;
        }
        .nav{
        display: flex;
        justify-content: space-between;
        padding: 56px 28px 24px 28px;

        

        .input-nav, .btts-nav, .exit{
            position: absolute;
            visibility: hidden;
        }

        .img-menu{
            
            visibility: visible;
        }
        a{
            
            visibility: visible;
            margin: 0;
        }

        .img-menu{
            width: 24px;
            height: 18px;
            cursor: pointer;
        }

        
        .titleAndLogo{
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            p{
                color: ${({theme}) => theme.COLORS.P_NAVBAR_ADMIN};
                font-family: 'Roboto';
                font-size: 12px;
            }
        }
            
        
        .img-pedido{
            visibility: visible;
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