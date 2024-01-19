import styled from "styled-components";

export const Container = styled.div `

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_GLOBAL};

    @media ( max-width: 1190px){
        
        .swiper{
            width: 600px;
            height: 300px;
        }

        .banner{

            height: 120px;
            display: flex;
            background-color: rgb(9,29,38);
            color: white;
            margin: 0 auto;
            width: 90%;

            margin-top: 44px;
            
            /* margin-left: 30px;
            width: 376px;
            height: 120px;

            display: flex;

            background-color: rgb(9,29,38);
            color: white; */

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
            padding-left: 24px;
            h2{

                margin-top: 62px;
                margin-left: 24px;
                margin-bottom: 24px;

                font-family: 'Poppins',sans-serif;
                font-size: 18px;
                color: white;

            }
        }
    }

`;