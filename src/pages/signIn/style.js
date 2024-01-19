import styled from "styled-components";

export const Container = styled.div `
    @media(min-width: 1191px){
        width: 100vw;
        height: 100vh;

        .container{
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 100%;
        }

        .login{
            box-sizing: border-box;
            display: flex;
            flex-direction: column;

            border-radius: 16px;
            width: 476px;
            height: 540px;
            padding-left: 64px;
            padding-right: 64px;
            gap: 32px;

            background-color: ${({theme}) => theme.COLORS.BACKGROUND_NAVBAR};
            

            h1{
                align-self: center;
                margin-top: 64px;
                color: white;
                font-family: 'Poppins';
            }

            label{
                color: ${({theme}) => theme.COLORS.LABEL_COLOR};
                font-size: 16px;
                font-family: 'Roboto';
            }

            Input{
                margin-top: 8px;
                border: 1px solid white;
            }

            a{
                text-decoration: none;
                color: white;
                font-family: 'Roboto';
                align-self: center;
            }
        }
    }

    //mobile fist
    @media (max-width: 1190px) {

        width: 100%;
        height: 100%;

        color: ${({theme}) => theme.COLORS.H1_COLOR};

        .login{
            display: flex;
            flex-direction: column;

            a{
                align-self: center;
            }
        }

        .container{

            width: 316px;

            margin: 0 auto;
            margin-top: 158px;

            display: flex;
            flex-direction: column;
            
            .login{
                h1{
                    position: absolute;
                    visibility: hidden;
                }
            }

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