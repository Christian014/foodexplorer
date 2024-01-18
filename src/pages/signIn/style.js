import styled from "styled-components";

export const Container = styled.div `
    
    @media (max-width: 640px) {

        width: 100%;
        height: 100%;

        color: ${({theme}) => theme.COLORS.H1_COLOR};

        .container{

            width: 316px;

            margin: 0 auto;
            margin-top: 158px;

            display: flex;
            flex-direction: column;
            

            .titleAndLogo{
                margin-bottom: 73px;
            }

            .email{

                margin-bottom: 32px;
                gap: 8px;

                display: flex;
                flex-direction: column;

            }

            .password{

                margin-bottom: 32px;
                gap: 8px;

                display: flex;
                flex-direction: column;

            }

            label{

                font-family: 'Roboto', sans-serif;
                color: ${({theme}) => theme.COLORS.LABEL_COLOR};
                font-size: 14px;

            }

            a{

                margin-top: 32px;

                font-size: 14px;

                text-decoration: none;
                color: white;
                font-family: 'Poppins';
                text-align: center;

            }
        }
    }
`;