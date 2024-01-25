import styled from "styled-components";

export const Container = styled.div `  

@media (min-width: 1920px){

    .img-menu{
        position: absolute;
        visibility: hidden;
    }
    .img-pedido{
        position: absolute;
        visibility: hidden;
    }
    span{
        position: absolute;
        visibility: hidden;
    }

    Input.input{
        width: 581px;
    }

    .nav{
        padding: 0 0 0 0;
        display: flex;
        height: 100%;
        align-items: center;
        gap: 32px;
        justify-content: space-evenly;
        
        
    }

    .btt{
        display: flex;
        
        img{
            position: absolute;
            align-self: center;
            padding-left: 38px;
        }
    }

    .div-input{
        display: flex;

        img{
            position: absolute;
            padding-left: 55px;
            align-self: center;
        }
    }
}



//mobile first

@media(max-width: 640px){
    Input{
        position: absolute;
        visibility: hidden;
    }
    .nav{
        display: flex;
        justify-content: space-between;
        padding: 56px 28px 24px 28px;
    }
}
    height: 114px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_NAVBAR};
    
    .nav{
        

        .img-menu{
            width: 24px;
            height: 18px;
            cursor: pointer;
        }

        
            
        
        .img-pedido{
            width: 26px;
            height: 22px;
            cursor: pointer;
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

`;