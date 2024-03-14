import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GLOBAL};

    .footer{
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    @media(max-width: 1200px){
        .color-p{
                        background-color: #0D161B;
                    }
        main{
            width: 80%;
            margin: 0 auto;
            

            h2{
                margin-top: 56px;
                margin-bottom: 36px;
                color: white;
                font-size: 32px;
                font-family: 'Poppins';
            }

            .payment-await{
                border-radius: 8px 8px 8px 8px;
                border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                display: flex;
                flex-direction: column;
                min-height: 480px;

                .payment-method{
                    
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;

                    .credit{
                        border-radius: 0 8px 0 0;
                    }
                    .pix{
                        border-radius: 8px 0 0 0;
                    }
                    p{
                        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                        height: 80px;
                        padding: 10px;
                        display: flex;
                        gap: 8px;
                        width: 100%;
                        text-align: center;
                        justify-content: center;
                        align-items: center;
                        color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                        font-size: 16px;

                        img{
                            width: 22px;
                            color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                            
                        }
                    }
                    p:hover{
                        cursor: pointer;
                        transition: .5s;
                        background-color: #0D161B;
                    }
                    

                    
                }

                .await-confirmation{
                    margin: auto;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    height: 100%;
                    gap: 24px;
                    p{
                        font-size: 32px;
                        font-weight: 400;
                        color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                    }

                    img{
                        opacity: .5;
                    }
                }
            }
        }
    }
`