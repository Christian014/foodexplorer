import styled from "styled-components";

export const Container = styled.div `

    background-color: #001119;

    height: 77px;
    width: 100%;


    .content-footer{

        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    
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