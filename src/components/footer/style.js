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
            font-size: 15px;
            color: #4d585e;
            font-weight: bold;
            font-family: 'Roboto';
            
        }

        h3{
            color: #efece4;
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