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
    @media(max-width: 428px){

        p{
            color: ${({theme}) => theme.COLORS.LABEL_COLOR};
        }
        a{
            color: white;
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

                button{
                    cursor: pointer;
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
}
`;