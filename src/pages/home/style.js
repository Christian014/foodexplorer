import styled from "styled-components";
import desktopimg from "../../assets/desktopimg.png"
export const Container = styled.div`

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GLOBAL};
    color: white;

    @media(min-width: 1920px){
        box-sizing: border-box;
        .dishes{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;

                .h2-dishes{
                    width: 80%;
                }
        }
    
        .meals{
            h2{
                margin-top: 64px;
                margin-bottom: 24px;
                font-family: 'Poppins';
            }

            .h2-mobile{
                position: absolute;
                visibility: hidden;
            }
        }
    
        .banner{
            height: 260px;
            display: flex;
            background-color: rgb(9,29,38);
            color: white;
            margin: 0 164px;
            
            
            margin-top: 164px;
    
            img{
                
                visibility: hidden;
            }
    
            .img-desktop{
                background-image: url(${desktopimg});
                width: 656px;
                height: 412px;
                margin-top: -145px;
                position: absolute;
                margin-left: -60px;
                position: absolute;
            }
        }
    
        .banner-text{
    
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            gap: 3px;
    
    
    
            h1{
        
                
    
                font-size: 40px;
                font-family: 'Poppins', sans-serif;
    
            }
    
            
    
            p{
    
                font-size: 12px;
                font-family: 'Poppins', sans-serif;
    
            }
        }
    }

    @media ( max-width: 640px){
        
        

        .banner{

            height: 120px;
            display: flex;
            background-color: rgb(9,29,38);
            color: white;
            margin: 0 auto;
            width: 90%;

            margin-top: 44px;
            
            

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

            .h2-desktop{
                position: absolute;
                visibility: hidden;
            }

            
            
        }

        

        
    }

`;