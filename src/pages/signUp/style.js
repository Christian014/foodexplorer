import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 1191px){
        #name{
            position: absolute;
        }

        .container{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 300px;
            
        }

        .titleAndLogo{
            align-items: center;
            display: flex;

            img{
                width: 49px;
                height: 49px;
            }

            h1{
                font-size: 42px;
            }
        }

        a, h1, p {
            font-family: 'Roboto';
        }
        
        .h1-desktop{
            align-self: center;
            font-family: 'Poppins';
        }

        h1{
            font-family: 'Poppins';
            color: white;;
            font-size: 32px;
        }

        label{
            color: white;
            font-family: 'Roboto';
            font-size: 16px;
        }
        form{
            margin-top: 165px;
            width: 476px;
            height: 621px;

            background-color: ${({theme}) => theme.COLORS.BACKGROUND_NAVBAR};

            padding: 64px;
            display: flex;
            flex-direction: column;
            gap: 32px;

            border-radius: 16px;

            

            .auth-buttons{
                display: flex;
                flex-direction: column;
                text-align: center;
                gap: 32px;
                a{
                    text-decoration: none;
                    color: white;
                }
            }
        }

        .name{
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .email{
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .password{
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }

    @media(max-width: 1266px){
        .titleAndLogo{
            h1{
                font-size: 30px;
            }
        }
    }




    //mobile first    
    @media (max-width: 1190px) {
        //h1 do desktop
        .h1-desktop{
            visibility: hidden;
            position: absolute;
        }

        .auth-buttons{
            text-align: center;
            display: flex;
            flex-direction: column;
        }

        width: 100%;
        height: 100%;

        color: ${({ theme }) => theme.COLORS.H1_COLOR};

        .container{

            width: 316px;

            margin: 0 auto;
            margin-top: 158px;

            display: flex;
            flex-direction: column;
            

            .titleAndLogo{
                margin-bottom: 73px;
            }

            form{
                .name{
                    margin-bottom: 32px;
                    gap: 8px;

                    display: flex;
                    flex-direction: column;
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
            }

            label{

                font-family: 'Roboto', sans-serif;
                color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
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