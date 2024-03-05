import Lanches from "../../assets/desktopimg.png";
import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GLOBAL};

    .footer{
            position: absolute;
            

            position: absolute;
            width: 100%;
            margin-top: 115px;
        }
        @media(max-width: 400px){
        .banner{
            p{
                visibility: hidden;
            }
        }
    }

    @media (max-width: 1099px){

        .banner{

            margin-left: 30px;
            margin-top: 44px;
            margin-right: 18px;
            
            height: 120px;

            display: flex;

            background-color: rgb(9,29,38);
            color: white;

            img{

                height: 149px;
                width: 191px;

                position: initial;
                margin-left: -30px;
                margin-top: -29px;

            }

            .banner-text{

                display: flex;
                flex-direction: column;

                gap: 3px;

                h1{
                    
                    margin-top: 36px;

                    font-size: 18px;
                    font-family: 'Poppins', sans-serif;

                }

                p{

                    font-size: 12px;
                    font-family: 'Poppins', sans-serif;

                }
            }
        }

        .meals{

            h2{

                margin-top: 62px;
                margin-left: 24px;
                margin-bottom: 24px;

                font-family: 'Poppins',sans-serif;
                font-size: 18px;
                color: white;

            }
        }

        .footer{
            position: absolute;
            

            position: absolute;
            width: 100%;
            margin-top: 115px;
        }
    }

    @media( min-width: 1100px){
        h2{
            color: white;
            font-family: 'Poppins';
            width: 78%;
            margin: 0 auto;
        }
        main{
            .lanhces{
                position: absolute;
                visibility: hidden;
            }
            .img-banner{
                    background-image: url(${Lanches});
                    position: absolute;
                    background-size: contain;
                    background-repeat: no-repeat;
                    height: 412px;
                    width: 650px;

                    margin-top: 17px;
                    margin-left: 46px;
                }

            .banner{
                background-color: rgb(9,29,38);
                color: white;

                margin: 0 100px;
                margin-bottom: 62px;
                margin-top: 170px;
                height: 260px;
                border-radius: 8px;

                
                display: flex;
                align-items: center;
                justify-content: end;

                .banner-text{
                    margin-right: 30px;
                }

                h1{
                    font-family: 'Poppins';
                }

                p{
                    font-family: 'Roboto';
                }
            }

            .meals{
                display: flex;
                flex-direction: column;
                gap: 32px;

                .dishes{
                    width: 90%;
                    margin: 0 auto;
                }
            }
        }
    }

`;