import styled from "styled-components";
import setaPraBaixo from "../../assets/setaPraBaixo.png";
import { Tag } from "../../components/tags/index";


export const Container = styled.div`
    
    color: white;
    h1{
        font-family: 'Poppins';
    }
    a{
        text-decoration: none;
    }

    @media(max-width: 999px){
        .sc-jSguLX {
            position: relative;
        }
        .ingredients-price{
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        .p-upload-desktop{
            position: absolute;
            visibility: hidden;
        }

        .img-name-category{
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        p{
            color: ${({theme}) => theme.COLORS.LABEL_COLOR};
            font-family: 'Roboto';
        }
        a{
            color: white;
            font-family: 'Roboto';
        }
        .container{
            width: 364px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .return{
            margin-top: 11px;
            display: flex;
            gap: 5px;
            align-items: center;
            cursor: pointer;

            
            p{
                font-size: 16px;
                font-family: 'Roboto';
                
            }

            img{
                width: 8px;
                height: 15px;
            }
        }

        .img-dish{

            .p-img-fo-prato{
                margin-bottom: 16px;
                font-size: 16px;
                font-family: 'Roboto';
            }

            .upload{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 8px;
            gap: 8px;
            width: 100%;
            height: 48px;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT_ADMIN};

            input{
                width: 100%;
                height: 100%;
                opacity: 0;
                position: absolute;
                cursor: pointer;
            }

            img{
                width: 24px;
                height: 24px;
            }

            p{
                font-size: 14px;
                font-family: 'Poppins';
            }
            }
        }

        .name{
            p{
                margin-bottom: 16px;
                font-family: 'Roboto';
                color: ${({theme}) => theme.COLORS.LABEL_COLOR};
                
            }
            input{
                font-family: 'Roboto';
                border: none;
                border-radius: 8px;
                gap: 8px;
                width: 100%;
                height: 48px;
                color: white;
                padding-left: 14px;
                box-sizing: border-box;
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                outline: none;
            }

            input::placeholder{
                color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT};
                font-family: 'Roboto';
            }
        }

        .category{

            p{
                font-family: 'Roboto';
                font-size: 16px;
                color: ${({theme}) => theme.COLORS.LABEL_COLOR};
            }

            select{
            width: 95%;
            height: 48px;
            border-radius: 8px;
            padding-left: 11px;

            outline: none;
            border: none;
            

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
            color: ${({ theme }) => theme.COLORS.LABEL_COLOR};

            background-image: url("${setaPraBaixo}");
            background-repeat: no-repeat;
            background-position: right 10px top 50%;

            -webkit-appearance: none;
            -moz-appearance:    none;
            appearance:         none;

            
        }

        .select{
            width: 100%;
            height: 48px;
            
            margin: 8px 0;
            
            border-radius: 8px;
            box-sizing: border-box;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
            display: grid;

            img{
                position: fixed;
                align-self: center;
                right: 47px;
            }
            
        }
        }

        .ingredients{
            p{
                margin-bottom: 16px;
                font-family: 'Roboto';
                font-size: 16px;
                color: ${({theme}) => theme.COLORS.LABEL_COLOR};
            }
            .tags{
                border-radius: 8px;
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                display: flex;
                gap: 16px;
                height: 48px;
                align-items: center;
                padding: 8px;
                box-sizing: border-box;

                .ingredientsTag{
                    cursor: pointer;
                    box-sizing: border-box;
                    
                    width: 116px;
                    height: 32px;
                    border-radius: 8px;
                    border: 1px dashed;
                    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                    color: ${({theme}) => theme.COLORS.PLACEHOLDER_INPUT};

                    

                    img{
                        padding-left: 3px;
                    }
                }
            }
        }

        .price{
            p{
                margin-bottom: 16px;
                font-size: 16px;
                font-family: 'Roboto';
                color: ${({theme}) => theme.COLORS.LABEL_COLOR}
            }

            Input{
                font-family: 'Roboto';
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};

            }

            Input::placeholder{
                color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT};
            
                font-family: 'Roboto';
            }
        }

        .description{
            p{
                margin-bottom: 16px;
                font-size: 16px;
                font-family: 'Roboto';
                color: ${({theme}) => theme.COLORS.LABEL_COLOR}
            }
            
            textarea{
                width: 364px;
                height: 172px;
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                border-radius: 8px;
                color: white;
                border: none;

                flex-wrap: wrap;

                padding: 14px;
                box-sizing: border-box;

                outline: none;
                font-family: 'Roboto';
                margin-bottom: 24px;
            }

            textarea::placeholder{
                color: ${({ theme }) => theme.COLORS.PLACEHOLDER_INPUT}
            }
        }

        .save-delete{
            display: flex;
            gap: 32px;
            margin-bottom: 53px;

            Button{
                width: 160px;
            }
            #delete-btt{
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
            }
            #save-btt{
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON_SAVE}
            }
        }
}
    @media(min-width: 1000px){
        .p-upload-mobile{
            position: absolute;
            visibility: hidden;
        }
        main{
            .container{
                display: flex;
                flex-direction: column;
                gap: 26px;
                padding: 0 123px;

                .return{
                    margin-top: 40px;
                    align-items: center;
                    display: flex;
                    gap: 6px;

                    p{
                        font-size: 24px;
                        text-decoration: none;
                        color: white;
                        font-family: 'Poppins';
                        font-weight: bold;
                    }
                    img{
                        width: 12px;
                        height: 26px;
                    }
                }

                .img-name-category{
                    display: flex;
                    justify-content: space-between;
                }

                .img-dish{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    width: 229px;
                    .p-img-fo-prato{
                        font-family: 'Roboto';
                        font-size: 16px;
                    }

                    .upload{
                        border-radius: 8px;
                        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                        width: 229px;
                        height: 48px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        cursor: pointer;
                        
                        .p-upload-desktop{
                            justify-self: center;
                            align-self: center;
                            font-size: 14px;

                            font-family: 'Roboto';
                        }

                        input{
                            width: 229px;
                            height: 48px;
                            
                            position: absolute;
                            opacity: 0;
                            cursor: pointer;
                       }

                       img{
                            
                            width: 24px;
                            height: 24px;
                       }
                    }
                }

                .name{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    p{
                        font-family:'Roboto';
                        
                    }

                    input{
                        width: 463px;
                        height: 48px;

                        color: white;
                        font-family: 'Roboto';

                        border-radius: 8px;
                        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                        border: 0;
                        outline: 0;

                        padding-left: 14px;
                        box-sizing: border-box;
                    }

                    ::placeholder{
                        color: ${({theme}) => theme.COLORS.PLACEHOLDER_INPUT};
                    }
                }

                .category{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    p{
                        font-family: 'Roboto';
                    }
                    select{
                        padding-left: 14px;
                        outline: 0;
                        border: 0;
                        color: white;
                        width: 364px;
                        height: 48px;
                        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                        border-radius: 8px;
                    }
                }

                .ingredients{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    .tags{
                        width: 837px;
                        height: 48px;
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                        padding-left: 8px;
                        box-sizing: border-box;
                        border-radius: 8px;

                       

                        .ingredientsTag{
                            width: 116px;
                            height: 32px;
                            border: 1px dashed ${({theme}) => theme.COLORS.PLACEHOLDER_INPUT};
                            color: ${({theme}) => theme.COLORS.PLACEHOLDER_INPUT};
                            background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                            border-radius: 8px;
                            cursor: pointer;

                            padding: 0 20px 0 10px;
                            box-sizing: border-box;
                        }

                        .img-ingredients{
                            margin-left: -39px;
                        }
                    }
                }
                .price{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    input{
                        width: 251px;
                    }
                }

                .ingredients-price{
                    display: flex;
                    justify-content: space-between;
                }

                .description{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    p{
                        font-family: 'Roboto';
                    }
                    textarea{
                        width: 100%;
                        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                        outline: 0;
                        border: 0;
                        border-radius: 8px;
                        color: white;
                        box-sizing: border-box;
                        padding: 14px;
                    }

                    textarea::placeholder{
                        color: ${({theme}) => theme.COLORS.PLACEHOLDER_INPUT};
                    }
                }

                .save-delete{
                    display: flex;
                    justify-content: end;
                    gap: 32px;

                    #delete-btt{
                        width: 135px;
                        height: 48px;
                        padding: 0;
                        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                    }

                    #save-btt{
                        width: 172px;
                        height: 48px;

                        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON_SAVE};
                    }
                }
            }
        }
    }
`;