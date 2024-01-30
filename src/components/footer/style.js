import styled from "styled-components";

export const Container = styled.div `

@media(min-width: 1920px){
    

    /* .content-footer{
        position: absolute;
        bottom: 0;
        display: flex;
        height: 77px;
        width: 100%;
    } */
}

//mobile first
    /* height: 77px;
    width: 100%; */
    
    

    .content-footer{
        background-color: #001119;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 77px;
        width: 100%;
        position: absolute;
        bottom: 0;
    
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