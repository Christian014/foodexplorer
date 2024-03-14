import styled from "styled-components"

export const Container = styled.div`
        width: 100%;
        height: 100vh;

        a{
            text-decoration: none;
        }
        span{
            color: white;
        }

        h1.title{
            
            font-family: 'Poppins';
            font-size: 32px;
            color: white;
            margin-bottom: 27px;
    
        }

        @media(max-width: 1200px){
            main{
            margin-left: 35px;
            margin-top: 56px;
            height: 70%;

            .payment{
                position: fixed;
                visibility: hidden;
            }

            .pixcard{
                h2{
                    line-height: 32px;
                    grid-area: pagamento;
                    
                    font-size: 32px;
                    font-family: 'Poppins';
                    color: white;
                    margin-bottom: 15px;
                }

                .pix-and-card{
                    
                    width: 80%;
                    margin: 0 auto;
                    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                    border-radius: 8px 8px 0 0;
                    .pix-card{
                        display: flex;
                        

                        p{
                            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                            color: white;
                            height: 80px;
                            width: 50%;
                            justify-content: center;
                            align-items: center;
                            display: flex;
                        }

                        .pix{
                            border-radius: 8px 0 0 0;
                        }
                        .card-credit{
                            border-radius: 0 8px 0 0;
                        }

                    }

                    .qrcode{
                            display: flex;
                            img{
                                width: 100%;
                                padding: 30px;
                                margin: 0 auto;
                            }
                        }
                    .credit-div{
                        width: 70%;
                        margin: 0 auto;
                        padding: 57px 0 57px 0;

                        .numCredit{
                            display: flex;
                            flex-direction: column;
                            gap: 8px;

                            p{
                                color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
                            }
                            .num{
                                height: 48px;
                                background-color: transparent;
                                border-radius: 8px;
                                border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                                padding-left: 10px;
                            }

                            ::placeholder{
                                font-size: 16px;
                                color: ${({ theme }) => theme.COLORS.LABEL_COLOR}
                            }
                        }

                        .valid-cvc{
                            display: flex;
                            gap: 10px;
                                .validated, .cvc-input{
                                    width: 100%;
                                    box-sizing: border-box;
                                    height: 48px;
                                    background-color: transparent;
                                    border-radius: 8px;
                                    border: 1px solid ${({ theme }) => theme.COLORS.    BACKGROUND_TAG_ADMIN};
                                    padding-left: 10px;
                                }

                                .valid{
                                    width: 100%;
                                }
                                .cvc{
                                    width: 100%;
                                }

                                .valid,.cvc{
                                    
                                    margin-top: 37px;
                                    display: flex;
                                    flex-direction: column;
                                    gap: 8px;

                                    p{
                                        color: ${({ theme }) => theme.COLORS.LABEL_COLOR}
                                    }
                                }
                            }
                            ::placeholder{
                                font-size: 16px;
                                color: ${({ theme }) => theme.COLORS.LABEL_COLOR}
                            }
                    }

                    .finished-request-dish{
                        margin-top: 37px;

                        img{
                            position: absolute;
                            visibility: hidden;
                        }
                    }
                }
            }

            .btt{
                display: flex;
                justify-content: end;
                
                .button{
                    margin-top: 50px;
                    margin-right: 37px;
                    width: 216px;
                }
            }
        }

        .footer{
            margin-top: 5%;
            position: absolute;
            bottom: 0;
            width: 100%;
        }

.pedidos{

    height: 62%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 25px;
    
    .one-pedido{
        
        display: flex;
        
        gap: 13px;
        align-items: center;

        img{
            border-radius: 50%;
            width: 72px;
            height: 72px;
        }

        .title-and-remove{
            display: flex;
            flex-direction: column;
            h2{
                line-height: 32px;
                font-size: 20px;
                font-family: 'Poppins';
                color: white;
            }

            p{
                color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_SAVE};
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 12px;
                cursor: pointer;
            }
        }


    }
}

.price-total{
        p{
            margin-top: 20px;
            color: white;
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 20px;
        }
    }
        }
        

@media(min-width: 1201px){
            
            .hidden{
                position: fixed;
                visibility: hidden;
            }
            main{
                width: 85%;
                margin: 0 auto;
                display: grid;
                grid-template-areas: "title pagamento"
                                    "dishes payment"
                                    "priceTotal null"
                                 ;
            
                margin-top: 56px;
                height: 70%;

            .pedido-title{
                grid-area: title;
                height: 10px;
            }
            .payment{
                grid-area: payment-start;
                margin-top: -45px;
                h2{
                    line-height: 32px;
                    grid-area: pagamento;
                    
                    font-size: 32px;
                    font-family: 'Poppins';
                    color: white;
                    margin-bottom: 15px;

                }

                .pix-and-card{
                    width: 100%;
                    
                    height: 100%;
                    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                    border-radius: 8px;

                    .pix-card{
                        display: flex;
                        text-align: center;
                        align-items: center;
                        
                        p{
                            height: 45px;
                            img{
                                width: 22px;
                                height: 22px;
                            }
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 5px;
                            color: white;
                            padding: 30px;
                            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                            width: 50%;
                            
                        }

                        p:hover{
                            transition: .5s;
                            background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                        }

                        .pix{
                            border-radius: 8px 0 0 0;
                        }

                        .credit{
                            border-radius: 0 8px 0 0;
                        }
                    }

                    .qrcode{
                        width: 100%;
                        height: 80%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        
                    }

                    .credit{
                        width: 100%;
                        height: 70%;
                        align-items: center;
                        justify-content: center;
                        display: flex;
                        
                        flex-direction: column;

                        input{
                            box-sizing: border-box;
                            padding-left: 8px;
                            border-radius: 8px;
                            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                            background: transparent;
                            height: 45px;
                        }

                        .valid-cvc{
                            gap: 16px;
                        }

                        .numCredit{
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                        }

                        .valid,.cvc{
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                        }

                        .num{
                            margin-bottom: 37px;
                        }

                        .validated{
                            width: 166px;
                        }
                        .cvc{
                            width: 166px;
                        }

                        ::placeholder{
                            
                            color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG_ADMIN};
                        }

                        input.num{
                            width: 348px;
                        }

                        p{
                            color: white;
                        }

                        .valid-cvc{
                            display: flex;
                        }

                        .finished-request-dish{
                            width: 340px;
                            margin-top: 32px;
                        }
                    }
                }
            }

            .pedidos{
                grid-area: dishes;
            }

            .pix-and-card{
                grid-area: payment;
            }
            .price-total{
                grid-area: priceTotal;
            }

            .btt{
                position: absolute;
                visibility: hidden;
                
                .button{
                    margin-top: 50px;
                    margin-right: 37px;
                    width: 216px;
                }
            }
        }

        .footer{
            margin-top: 5%;
            position: absolute;
            bottom: 0;
            width: 100%;
        }

    main>.pedidos{
    width: 80%;
    margin-top: 35px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 25px;
    
    .price{
        color: white;
    }
    .one-pedido{
        
        display: flex;
        
        gap: 13px;
        align-items: center;

        img{
            border-radius: 50%;
            width: 72px;
            height: 72px;
        }

        .title-and-remove{
            display: flex;
            flex-direction: column;
            h2{
                line-height: 32px;
                font-size: 20px;
                font-family: 'Poppins';
                color: white;
            }

            p{
                color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_SAVE};
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 12px;
                cursor: pointer;
            }
        }


    }

    
    
    
}

.price-total{
        p{
            margin-top: 20px;
            color: white;
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 30px;
        }
    }
    }
        
`;