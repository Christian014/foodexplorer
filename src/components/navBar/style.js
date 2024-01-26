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

    .div-input{
        display: flex;
        Input{
            width: 581px;
            padding-left: 135px;
        }

        img{
            padding-left: 100px;
            position: absolute;
            align-self: center;
        }
    }

    

    .nav{

        padding: 0 0 0 0;
        display: flex;
        height: 104px;
        align-items: center;
        gap: 32px;
        justify-content: space-evenly;
        
        
    }

    .btt{
        display: flex;
        Button{
            width: 216px;
        }
        
        img{
            position: absolute;
            align-self: center;
            padding-left: 38px;
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

        .btt, .div-input, .exit-desktop{
            position: absolute;
            visibility: hidden;
        }
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