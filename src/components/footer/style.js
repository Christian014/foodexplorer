import styled from "styled-components";

export const Container = styled.div `

@media(min-width: 1000px){
        display: flex;
        justify-content: space-around;

    .content-footer{
        display: flex;
        justify-content: space-around;
    }
}

//mobile first

@media (max-width: 999px){
    position: absolute;
    width: 100%;
    height: 77px;
    .content-footer{
        justify-content: center;
    }
}

    .content-footer{
        background-color: #001119;
        display: flex;
        
        align-items: center;
        height: 77px;
        width: 100%;
        position: absolute;
        bottom: 0;

        div{
            display: flex;
        }
    
        p{
            color: ${({theme}) => theme.COLORS.P_FOOTER_COLOR};
            
            font-size: 15px;
            font-weight: bold;
            font-family: 'Roboto';
            
        }

        h3{
            color: ${({theme}) => theme.COLORS.H3_FOOTER_COLOR};
            font-size: 12px;

            align-self: center;
            font-family: 'Roboto';

            margin-left: 15px;
        }

        img{
            width: 22px;
            height: 18px;
            margin-right: 6px;
        }

    }
`;